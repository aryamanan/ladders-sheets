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
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_PATH = ROOT / "docs" / "data.json"

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lc_difficulty import LC_DIFFICULTY

LC_SLUG_RE = re.compile(r"^https?://leetcode\.com/problems/([a-z0-9\-]+)/?$")


def difficulty_for(url):
    if not url:
        return None
    m = LC_SLUG_RE.match(url)
    if not m:
        return None
    return LC_DIFFICULTY.get(m.group(1))

# Landing-page category is inferred from the filename ("dsa" -> OA+Interview,
# else -> System Design) except for sheets listed here, which need an
# explicit override (e.g. CSES lives under Competitive Programming even
# though its filename contains "dsa").
CATEGORY_OVERRIDES = {
    # The Competitive Programming landing section now points at curated
    # external resources (CP-31, YouKn0wWho, A2OJ, etc.) instead of an
    # in-repo ladder sheet -- this internal CSES sheet still exists and is
    # still useful, it's just not the front-line CP recommendation anymore.
    "faang_dsa_cses_complete_map.md": "deprecated",
    # Neither filename contains "dsa", so the fallback rule below would
    # otherwise misfile them under System Design.
    "faang_sql_mastery.md": "sql",
    "faang_sql_extreme_mastery.md": "sql",
}

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
    "faang_sql_mastery.md",
    "faang_sql_extreme_mastery.md",
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

HEADING_RE = re.compile(r"^(#{1,4})\s+(.*)$")
# Group 1 captures leading indentation so a nested `   - [Y](url)` under a
# top-level `1. [X](url)` can be told apart from another top-level item --
# see the indent-tracking logic around `last_top_item` in parse_file.
LIST_ITEM_RE = re.compile(r"^(\s*)(?:[-*]|\d+\.)\s+(.+?)\s*$")
# A trailing `{Some Tag}` on a list item is a purely cosmetic per-item badge
# (e.g. "Frequency Map") -- deliberately kept OUT of the id hash (unlike
# `tag`/cur_label) so retrofitting badges onto a sheet's existing items never
# changes their ids and never orphans saved checkmarks.
SUBTAG_RE = re.compile(r"^(.*\S)\s*\{([^{}]{1,60})\}\s*$")
# A trailing `<<Book: chapter/topic note>>` (one or more, anywhere on the
# line) is a "study this from here" citation into a classic book (DDIA, Alex
# Xu's System Design Interview, Google SRE, Release It!, ...). Stripped out
# of item_text and carried separately as `bookRefs` so the renderer can show
# it as a small hover-tooltip icon instead of cluttering the row with prose.
BOOK_REF_RE = re.compile(r"<<\s*([^:<>]+?)\s*:\s*([^<>]+?)\s*>>")
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


def extract_book_refs(text):
    refs = [{"book": b.strip(), "note": n.strip()} for b, n in BOOK_REF_RE.findall(text)]
    return BOOK_REF_RE.sub("", text).strip(), refs


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
        for sg in g["subgroups"]:
            for it in sg["items"]:
                if it["url"] and not it["tag"]:
                    canonical_urls.add(it["url"])

    seen = set()
    for g in section["groups"]:
        for sg in g["subgroups"]:
            kept = []
            for it in sg["items"]:
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
            sg["items"] = kept
        g["subgroups"] = [sg for sg in g["subgroups"] if sg["items"]]
    section["groups"] = [g for g in section["groups"] if g["subgroups"]]


def parse_file(path):
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()

    sheet_title = path.stem.replace("_", " ").title()
    sheet_desc = ""
    sections = []

    cur_section = None  # dict: {title, excluded, groups: []}
    cur_group = None  # dict: {title, subgroups: []} -- title is the H3, or None
    cur_subgroup = None  # dict: {title, items: []} -- title is the H4, or None
    cur_h3 = None
    cur_h3_excluded = False
    cur_h4 = None
    cur_h4_excluded = False
    cur_label = None
    seen_h1 = False
    seen_h2 = False
    desc_lines = []
    # The most recently added top-level (zero-indent) item -- an indented
    # list line immediately following it becomes one of its `children`
    # instead of another flat sibling. Reset on every heading change and
    # every blank line, so children can only ever attach to the item
    # directly above them, never to something several paragraphs back.
    last_top_item = None

    table_header = None
    awaiting_separator = False

    def current_tag():
        # Only surface a badge when it adds context beyond the group/subgroup
        # heading that's already shown (e.g. "Foundation"/"Boss" within a
        # named sub-pattern, or a table row/column label). A bare H3/H4 name
        # would just repeat a heading already shown, so it's intentionally
        # not a fallback here.
        return cur_label or ""

    def ensure_group():
        nonlocal cur_group
        if cur_group is None:
            cur_group = {"title": cur_h3, "subgroups": []}
            cur_section["groups"].append(cur_group)
        return cur_group

    def ensure_subgroup():
        nonlocal cur_subgroup
        group = ensure_group()
        if cur_subgroup is None:
            cur_subgroup = {"title": cur_h4, "items": []}
            group["subgroups"].append(cur_subgroup)
        return cur_subgroup

    def add_item(item_text, url, subtag=None, book_refs=None):
        if cur_section is None or cur_section["excluded"] or cur_h3_excluded or cur_h4_excluded:
            return None
        item_text = item_text.strip()
        if not item_text:
            return None
        subgroup = ensure_subgroup()
        tag = current_tag()
        # Only fold h4 into the hash when it's actually in use, so sheets
        # that never use a 4th heading level keep byte-identical item ids to
        # before this feature existed -- otherwise every saved checkmark
        # across every existing sheet would silently orphan on next build.
        id_parts = [path.name, cur_section["title"]]
        if cur_h4:
            id_parts.append(cur_h4)
        id_parts += [tag, item_text, url or ""]
        item_id = make_id(*id_parts)
        item = {
            "id": item_id,
            "text": item_text,
            "url": url,
            "tag": tag,
            "subtag": subtag,
            "difficulty": difficulty_for(url),
            "bookRefs": book_refs or [],
        }
        subgroup["items"].append(item)
        return item

    def add_child_item(parent_item, item_text, url, subtag=None, book_refs=None):
        # A sub-item nested under `parent_item` (an indented bullet directly
        # below a top-level item) -- same shape as a normal item, individually
        # checkable, but rendered indented beneath its parent instead of as
        # another flat sibling row. Used for "same concept, different source"
        # clusters: the parent carries the highest-priority link, children
        # carry the rest.
        if cur_section is None or cur_section["excluded"] or cur_h3_excluded or cur_h4_excluded:
            return None
        item_text = item_text.strip()
        if not item_text:
            return None
        tag = current_tag()
        id_parts = [path.name, cur_section["title"]]
        if cur_h4:
            id_parts.append(cur_h4)
        id_parts += ["child", parent_item["id"], tag, item_text, url or ""]
        item_id = make_id(*id_parts)
        child = {
            "id": item_id,
            "text": item_text,
            "url": url,
            "tag": tag,
            "subtag": subtag,
            "difficulty": difficulty_for(url),
            "bookRefs": book_refs or [],
        }
        parent_item.setdefault("children", []).append(child)
        return child

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
                cur_h4 = None
                cur_h4_excluded = False
                cur_group = None
                cur_subgroup = None
                last_top_item = None
                for link_text, url in heading_links:
                    add_item(link_text, url)
                continue
            if level == 3:
                cur_h3 = title
                cur_h3_excluded = is_excluded(title)
                cur_h4 = None
                cur_h4_excluded = False
                cur_group = None
                cur_subgroup = None
                last_top_item = None
                for link_text, url in heading_links:
                    add_item(link_text, url)
                continue
            if level == 4:
                cur_h4 = title
                cur_h4_excluded = is_excluded(title)
                cur_subgroup = None
                last_top_item = None
                for link_text, url in heading_links:
                    add_item(link_text, url)
                continue

        if not line.strip():
            table_header = None
            awaiting_separator = False
            last_top_item = None
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
            if cur_section is None or cur_section["excluded"] or cur_h3_excluded or cur_h4_excluded:
                continue
            for idx, cell in enumerate(cells):
                links = LINK_RE.findall(cell)
                if not links:
                    continue
                col_name = table_header[idx] if idx < len(table_header) else ""
                for link_text, url in links:
                    tag_bits = [b for b in (row_label, col_name) if b]
                    tag = " · ".join(tag_bits) if tag_bits else current_tag()
                    subgroup = ensure_subgroup()
                    id_parts = [path.name, cur_section["title"]]
                    if cur_h4:
                        id_parts.append(cur_h4)
                    id_parts += [tag, link_text, url]
                    item_id = make_id(*id_parts)
                    subgroup["items"].append(
                        {
                            "id": item_id,
                            "text": link_text,
                            "url": url,
                            "tag": tag,
                            "difficulty": difficulty_for(url),
                        }
                    )
            continue

        table_header = None
        awaiting_separator = False

        list_match = LIST_ITEM_RE.match(line)
        if list_match:
            indent, item_text = list_match.group(1), list_match.group(2)
            is_child = bool(indent) and last_top_item is not None
            item_text, book_refs = extract_book_refs(item_text)
            subtag_match = SUBTAG_RE.match(item_text)
            subtag = None
            if subtag_match:
                subtag = subtag_match.group(2).strip()
                item_text = subtag_match.group(1).strip()
            if not is_child and handle_labelish(item_text):
                continue
            links = LINK_RE.findall(item_text)
            # Keep the whole line (link syntax stripped) as the item text,
            # not just the linked fragment's anchor text -- a quote like
            # `"..." -- Author, [Article](url)` must not lose everything
            # outside the brackets. For the common simple case (`- [Problem]
            # (url)` with nothing else on the line) this reduces to exactly
            # the anchor text since strip_links(item_text) == that text.
            text, url = strip_links(item_text), (links[0][1] if links else None)
            if is_child:
                add_child_item(last_top_item, text, url, subtag, book_refs)
            else:
                last_top_item = add_item(text, url, subtag, book_refs)
            continue

        if handle_labelish(line):
            continue
        # otherwise: plain prose paragraph, ignored

    sheet_desc = " ".join(desc_lines).strip()

    # prune empty subgroups, then empty groups, then empty/excluded sections
    for s in sections:
        for g in s["groups"]:
            g["subgroups"] = [sg for sg in g["subgroups"] if sg["items"]]
        s["groups"] = [g for g in s["groups"] if g["subgroups"]]
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
            for sg in g["subgroups"]:
                sg["id"] = make_id(path.name, s["title"], g["title"] or "", sg["title"] or "")

    category = CATEGORY_OVERRIDES.get(path.name, "dsa" if "dsa" in path.stem else "system-design")
    sheet_id = path.stem.replace("_", "-")
    total_items = sum(
        len(sg["items"]) + sum(len(it.get("children") or []) for it in sg["items"])
        for s in sections
        for g in s["groups"]
        for sg in g["subgroups"]
    )

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
