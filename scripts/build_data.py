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
]

HEADING_RE = re.compile(r"^(#{1,3})\s+(.*)$")
LIST_ITEM_RE = re.compile(r"^\s*(?:[-*]|\d+\.)\s+(.+?)\s*$")
LABEL_LINE_RE = re.compile(r"^([A-Za-z][A-Za-z0-9 ,/\-']{0,45}):\s*$")
LINK_RE = re.compile(r"\[([^\]]+)\]\((https?://[^\s)]+)\)")


def strip_links(text):
    return LINK_RE.sub(lambda m: m.group(1), text).strip(" -–—")


def is_excluded(title):
    t = title.lower()
    return any(kw in t for kw in EXCLUDE_HEADINGS)


def make_id(*parts):
    h = hashlib.sha1("::".join(parts).encode("utf-8")).hexdigest()
    return h[:12]


def parse_table_row(line):
    cells = [c.strip() for c in line.strip().strip("|").split("|")]
    return cells


def is_separator_row(cells):
    return all(re.match(r"^:?-{2,}:?$", c) or c == "" for c in cells)


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

    for raw_line in lines:
        line = raw_line.rstrip("\n")
        heading_match = HEADING_RE.match(line)

        if heading_match:
            level = len(heading_match.group(1))
            title = heading_match.group(2).strip()
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
                continue
            if level == 3:
                cur_h3 = title
                cur_h3_excluded = is_excluded(title)
                cur_group = None
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
            links = LINK_RE.findall(item_text)
            if links:
                for link_text, url in links:
                    add_item(link_text, url)
            else:
                add_item(strip_links(item_text), None)
            continue

        label_match = LABEL_LINE_RE.match(line.strip())
        if label_match:
            cur_label = label_match.group(1).strip()
            continue
        # otherwise: plain prose paragraph, ignored

    sheet_desc = " ".join(desc_lines).strip()

    # prune empty groups, then empty/excluded sections
    for s in sections:
        s["groups"] = [g for g in s["groups"] if g["items"]]
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
