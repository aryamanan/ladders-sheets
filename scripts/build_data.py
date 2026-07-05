#!/usr/bin/env python3
"""Parse the faang_*.md practice sheets in the repo root into docs/data.json.

Each markdown file becomes one "sheet". H2 headings become sections, H3
headings (or a short "Label:" line preceding a list) become the tag shown on
each row. Numbered/bulleted list items and markdown table cells that contain
a link become checkable items; list items without a link become plain
checkable text (no external link).

Re-run this any time a faang_*.md file is added or edited:
    python scripts/build_data.py
"""
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_PATH = ROOT / "docs" / "data.json"

# Files where the same URL legitimately gets referenced over and over within
# one section (e.g. every problem in a CSES technique family sharing an
# identical "external prereqs" list, or ladders whose solidifiers point back
# at other ladders' own targets) -- dedupe within each section on these.
DEDUPE_WITHIN_SECTION = {
    "faang_dsa_cses_complete_map.md",
}

# Preferred display order; anything not listed falls back to alphabetical.
SHEET_ORDER = [
    "faang_dsa_gauntlet.md",
    "faang_dsa_extreme_mastery_map.md",
    "faang_dsa_researched_interview_failure_map.md",
    "faang_dsa_concept_repetition_ladders.md",
    "faang_system_design_technical_mastery.md",
    "faang_system_design_researched_interview_failure_map.md",
    "faang_system_design_concept_repetition_ladders.md",
]

# H2 (and cascading H3 children) headings whose content is meta/instructional
# rather than concrete practice items -- skipped entirely. Substring match,
# case-insensitive. Tune this list after spot-checking docs/data.json.
EXCLUDE_HEADINGS = [
    "how to use",
    "research basis",
    "spaced repetition rule",
    "passing bar",
    "the standard",
    "coverage mindset",
    "mastery rubric",
    "topic coverage checklist",
    "the four layers",
    "what actually defeats candidates",
    "are sre and aws",
    "what was wrong with a normal list",
    "what they test",
    "final boss",
    "final exhaustiveness checklist",
    "how to prove you are ready",
    "system design scorecard",
    "signs you understand",
    "the 120-design rep rule",
    "the 300-rep rule",
    "mixed retention tests",
    "understand it means",
    "variant ladder",
    "what you must be able to explain",
    "source basis",
    "what counts as a question",
    "repetition protocol",
    "progression",
    "where to go after this",
    "section counts",
    "totals",
]

# Headings excluded only on an exact (case-insensitive) full-title match --
# use this instead of EXCLUDE_HEADINGS when the phrase is short enough that
# it could be a substring of an unrelated, legitimate longer heading (e.g.
# CSES's bare "Repetition Schedule" vs. the concept ladders' "System Design
# Repetition Schedule", which has real checkable content).
EXCLUDE_HEADINGS_EXACT = [
    "repetition schedule",
]

HEADING_RE = re.compile(r"^(#{1,3})\s+(.*)$")
LIST_ITEM_RE = re.compile(r"^\s*(?:[-*]|\d+\.)\s+(.+?)\s*$")
# Matches both a bare "Label:" line (group 2 empty) and an inline
# "Label: rest of line" (group 2 non-empty), e.g. "Frontier unlock: [X](url)"
# or "Technique family: binary search" (no link -> treated as ignorable
# metadata, see the label handling below).
LABEL_LINE_RE = re.compile(r"^([A-Za-z][A-Za-z0-9 ,/\-'()—.]{0,90}):\s*(.*)$")
LINK_RE = re.compile(r"\[([^\]]+)\]\((https?://[^\s)]+)\)")

# Labels whose inline (same-line, no-link) content is pure descriptive
# metadata to drop -- e.g. "Technique family: binary search". This must stay
# a narrow allowlist: plenty of ordinary checklist items also look like
# "Label: rest of sentence" (e.g. "Load balancing: L4 vs L7.") and those must
# still be kept as plain checkable items, not silently swallowed.
IGNORABLE_METADATA_LABELS = {
    "technique family",
    "why this matters",
    "baseline concepts",
    "unlock idea",
}


def strip_links(text):
    return LINK_RE.sub(lambda m: m.group(1), text).strip(" -–—")


def is_excluded(title):
    t = title.lower()
    if t in EXCLUDE_HEADINGS_EXACT:
        return True
    return any(kw in t for kw in EXCLUDE_HEADINGS)


def make_id(*parts):
    h = hashlib.sha1("::".join(parts).encode("utf-8")).hexdigest()
    return h[:12]


def parse_table_row(line):
    cells = [c.strip() for c in line.strip().strip("|").split("|")]
    return cells


def is_separator_row(cells):
    return all(re.match(r"^:?-{2,}:?$", c) or c == "" for c in cells)


def dedupe_section(section):
    """Drop repeat occurrences of the same URL within one section.

    A URL that appears somewhere as a *canonical* item (tag == "", i.e. a
    problem's own entry rather than someone else's cross-reference to it)
    keeps only that canonical occurrence -- every tagged reference to it
    elsewhere in the section is redundant once the reader can already see
    it as its own item. A URL with no canonical occurrence anywhere in the
    section (e.g. an external prereq link shared by many problems in the
    same technique family) keeps just its first occurrence. Items with no
    URL (plain-text drills etc.) are never deduped.
    """
    canonical_urls = set()
    for g in section["groups"]:
        for it in g["items"]:
            if it["url"] and not it["tag"]:
                canonical_urls.add(it["url"])

    seen = set()
    for g in section["groups"]:
        kept = []
        for it in g["items"]:
            url = it["url"]
            if not url:
                kept.append(it)
                continue
            if url in canonical_urls and it["tag"]:
                continue  # a canonical entry for this URL exists elsewhere
            if url in seen:
                continue
            seen.add(url)
            kept.append(it)
        g["items"] = kept
    section["groups"] = [g for g in section["groups"] if g["items"]]


def parse_file(path):
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()

    sheet_title = path.stem.replace("_", " ").title()
    sheet_desc = ""
    sections = []

    cur_section = None  # dict: {title, excluded, groups: []}
    cur_group = None  # dict: {title, items: []} -- title is the H3, or None
    cur_h3 = None
    cur_h3_excluded = False
    cur_label = None
    seen_h1 = False
    seen_h2 = False
    desc_lines = []

    table_header = None
    awaiting_separator = False

    def current_tag():
        # Only surface a badge when it adds context beyond the group/section
        # heading that's already shown (e.g. "Foundation"/"Boss" within a
        # concept, or a table row/column label). A bare H3 name would just
        # repeat the group heading, so it's intentionally not a fallback here.
        return cur_label or ""

    def ensure_group():
        nonlocal cur_group
        if cur_group is None:
            cur_group = {"title": cur_h3, "items": []}
            cur_section["groups"].append(cur_group)
        return cur_group

    def add_item(item_text, url):
        if cur_section is None or cur_section["excluded"] or cur_h3_excluded:
            return
        item_text = item_text.strip()
        if not item_text:
            return
        group = ensure_group()
        tag = current_tag()
        item_id = make_id(path.name, cur_section["title"], tag, item_text, url or "")
        group["items"].append(
            {"id": item_id, "text": item_text, "url": url, "tag": tag}
        )

    def handle_labelish(text):
        """Try to interpret `text` as a "Label:" or "Label: rest" line,
        whether it arrived as a bare paragraph or the body of a bullet/
        numbered list item. Returns True if it was label-shaped (and has
        already been fully handled), False if the caller should fall back to
        treating `text` as an ordinary item/paragraph.
        """
        nonlocal cur_label
        m = LABEL_LINE_RE.match(text.strip())
        if not m:
            return False
        label, rest = m.group(1).strip(), m.group(2).strip()
        if not rest:
            # Bare "Label:" -- tags whatever list follows underneath it
            # (including indented sub-bullets on later lines).
            cur_label = label
            return True
        links = LINK_RE.findall(rest)
        if links:
            # "Label: [X](url), [Y](url)" -- each link is its own checkable
            # item tagged with this label; doesn't change cur_label so it
            # can't leak onto unrelated later items.
            saved_label, cur_label = cur_label, label
            for link_text, url in links:
                add_item(link_text, url)
            cur_label = saved_label
            return True
        if label.lower() in IGNORABLE_METADATA_LABELS:
            # e.g. "Technique family: binary search" -- descriptive context,
            # not a checkable task.
            return True
        # An ordinary checklist item that happens to contain a colon (e.g.
        # "Load balancing: L4 vs L7."). Not our concern -- let the caller
        # fall back to treating it as plain text.
        return False

    for raw_line in lines:
        line = raw_line.rstrip("\n")
        heading_match = HEADING_RE.match(line)

        if heading_match:
            level = len(heading_match.group(1))
            raw_title = heading_match.group(2).strip()
            title = strip_links(raw_title)
            heading_links = LINK_RE.findall(raw_title)
            table_header = None
            awaiting_separator = False
            cur_label = None
            if level == 1:
                if not seen_h1:
                    sheet_title = title
                    seen_h1 = True
                continue
            if level == 2:
                seen_h2 = True
                cur_section = {
                    "title": title,
                    "excluded": is_excluded(title),
                    "groups": [],
                }
                sections.append(cur_section)
                cur_h3 = None
                cur_h3_excluded = False
                cur_group = None
                for link_text, url in heading_links:
                    add_item(link_text, url)
                continue
            if level == 3:
                cur_h3 = title
                cur_h3_excluded = is_excluded(title)
                cur_group = None
                for link_text, url in heading_links:
                    add_item(link_text, url)
                continue

        if not line.strip():
            table_header = None
            awaiting_separator = False
            if not seen_h2 and desc_lines:
                # blank line after first description paragraph
                pass
            continue

        if not seen_h2:
            desc_lines.append(strip_links(line.strip()))
            continue

        if line.lstrip().startswith("|"):
            cells = parse_table_row(line)
            if table_header is None:
                table_header = cells
                awaiting_separator = True
                continue
            if awaiting_separator and is_separator_row(cells):
                awaiting_separator = False
                continue
            awaiting_separator = False
            row_label = ""
            if cells:
                first_cell = strip_links(cells[0])
                if first_cell.isdigit() and table_header:
                    row_label = f"{table_header[0]} {first_cell}"
                else:
                    row_label = first_cell
            if cur_section is None or cur_section["excluded"] or cur_h3_excluded:
                continue
            for idx, cell in enumerate(cells):
                links = LINK_RE.findall(cell)
                if not links:
                    continue
                col_name = table_header[idx] if idx < len(table_header) else ""
                for link_text, url in links:
                    tag_bits = [b for b in (row_label, col_name) if b]
                    tag = " · ".join(tag_bits) if tag_bits else current_tag()
                    group = ensure_group()
                    item_id = make_id(
                        path.name, cur_section["title"], tag, link_text, url
                    )
                    group["items"].append(
                        {"id": item_id, "text": link_text, "url": url, "tag": tag}
                    )
            continue

        table_header = None
        awaiting_separator = False

        list_match = LIST_ITEM_RE.match(line)
        if list_match:
            item_text = list_match.group(1)
            if handle_labelish(item_text):
                continue
            links = LINK_RE.findall(item_text)
            if links:
                # Keep the whole line (link syntax stripped) as the item
                # text, not just the linked fragment's anchor text -- a
                # quote like `"..." -- Author, [Article](url)` must not lose
                # everything outside the brackets. For the common simple
                # case (`- [Problem](url)` with nothing else on the line)
                # this reduces to exactly the old behavior since
                # strip_links(item_text) == the link's own anchor text.
                add_item(strip_links(item_text), links[0][1])
            else:
                add_item(strip_links(item_text), None)
            continue

        if handle_labelish(line):
            continue
        # otherwise: plain prose paragraph, ignored

    sheet_desc = " ".join(desc_lines).strip()

    # prune empty groups, then empty/excluded sections
    for s in sections:
        s["groups"] = [g for g in s["groups"] if g["items"]]
    sections = [s for s in sections if s["groups"]]

    if path.name in DEDUPE_WITHIN_SECTION:
        for s in sections:
            dedupe_section(s)
        sections = [s for s in sections if s["groups"]]
    for s in sections:
        del s["excluded"]
        s["id"] = make_id(path.name, s["title"])
        for g in s["groups"]:
            g["id"] = make_id(path.name, s["title"], g["title"] or "")

    category = "dsa" if "dsa" in path.stem else "system-design"
    sheet_id = path.stem.replace("_", "-")
    total_items = sum(len(g["items"]) for s in sections for g in s["groups"])

    return {
        "id": sheet_id,
        "file": path.name,
        "title": sheet_title,
        "description": sheet_desc,
        "category": category,
        "totalItems": total_items,
        "sections": sections,
    }


def main():
    files = sorted(
        ROOT.glob("faang_*.md"),
        key=lambda p: (
            SHEET_ORDER.index(p.name) if p.name in SHEET_ORDER else len(SHEET_ORDER),
            p.name,
        ),
    )
    sheets = [parse_file(f) for f in files]
    data = {"sheets": sheets}
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(data, indent=2), encoding="utf-8")
    total = sum(s["totalItems"] for s in sheets)
    print(f"Wrote {OUT_PATH} with {len(sheets)} sheets, {total} items total.")
    for s in sheets:
        print(f"  {s['file']:55s} {s['totalItems']:4d} items  ({len(s['sections'])} sections)")


if __name__ == "__main__":
    main()
