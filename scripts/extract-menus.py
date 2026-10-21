"""Transcreve os cardápios em PDF para src/data/cardapios.json.

Uso, a cada troca de estação (a partir da pasta site/):
    python scripts/extract-menus.py "<pasta com os PDFs>"

Os papéis de cada linha vêm das fontes usadas nos PDFs da casa:
Affogato = seção, EB Garamond SemiBold com "•" = item com preço,
EB Garamond Regular/Medium = descrição. Revise o JSON gerado antes de publicar.
"""

import json
import re
import sys
from pathlib import Path

import fitz  # PyMuPDF

SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("..")
OUT = Path(__file__).resolve().parent.parent / "src" / "data" / "cardapios.json"

MENUS = [
    ("restaurante", "Menu do Restaurante", "Rompeto - Menu Restaurante.pdf", True),
    ("bar", "Menu de Bar", "Rompeto - Menu de Bar.pdf", False),
    ("bebidas", "Carta de Bebidas", "Rompeto - Carta de Bebidas.pdf", False),
    ("vinhos", "Carta de Vinhos", "Rompeto - Carta de Vinhos (1).pdf", False),
]

SKIP_TEXT = re.compile(r"^(continua.*|I @rompeto\.restaurante|Inverno \d{4}|Verão \d{4}|Outono \d{4}|Primavera \d{4}|\d{1,2})$")
PRICE = re.compile(r"\s*•\s*(\d[\d.,]*(?:\s*/\s*[\d.,]*[a-zçã]*)*)\s*$")


def tidy(text):
    return re.sub(r"\s+", " ", text).strip()


def unspace(line):
    """Junta letras espaçadas (tracking largo) usando a distância real entre caracteres."""
    chars = [c for s in line["spans"] for c in s["chars"]]
    if not chars:
        return ""
    gaps = []
    for a, b in zip(chars, chars[1:]):
        if a["c"] != " " and b["c"] != " ":
            gaps.append(b["bbox"][0] - a["bbox"][2])
    visible = [c for c in chars if c["c"] != " "]
    widths = sorted(c["bbox"][2] - c["bbox"][0] for c in visible)
    em = widths[len(widths) // 2] if widths else 5
    out, prev = "", None
    for c in visible:
        if prev is not None and c["bbox"][0] - prev["bbox"][2] > em * 0.9:
            out += " "
        out += c["c"]
        prev = c
    return tidy(out)


def is_spaced(text):
    tokens = text.split()
    singles = sum(1 for t in tokens if len(t) == 1 and t.isalpha())
    return len(tokens) >= 4 and singles / len(tokens) > 0.6


def lines_of(page, two_columns):
    width = page.rect.width
    rows = []
    for block in page.get_text("rawdict")["blocks"]:
        for line in block.get("lines", []):
            text = tidy("".join(c["c"] for s in line["spans"] for c in s["chars"]))
            if not text:
                continue
            span = line["spans"][0]
            col = 1 if two_columns and line["bbox"][0] > width * 0.5 else 0
            rows.append((col, line["bbox"][1], text, span["font"], round(span["size"]), line))
    rows.sort(key=lambda r: (r[0], r[1]))
    return rows


def parse(path, two_columns):
    blocks = []
    last_item = None
    menu_part = None
    for page in fitz.open(path):
        for _, _, text, font, size, line in lines_of(page, two_columns):
            if SKIP_TEXT.match(text) or "Playfair" in font or "Ikon" in font or size <= 8:
                continue
            if text.startswith("*") or "faremos o possível" in text:
                continue
            if "Affogato" in font:
                label = unspace(line) if is_spaced(text) else text
                kind = "section" if size >= 13 else "group"
                if size >= 14 and menu_part is not None:
                    blocks.append({"type": "part", "label": "Garrafas"})
                    menu_part = None
                blocks.append({"type": kind, "label": label})
                last_item = None
                continue
            if is_spaced(text):
                label = unspace(line)
                m = re.match(r"^(.*?)\s*(\d+\s*ml)$", label)
                blocks.append({"type": "section", "label": m.group(1) if m else label, "note": m.group(2).replace(" ", "") if m else ""})
                last_item = None
                continue
            if "SemiBold" in font and re.match(r"^•.*•$", text):
                label = tidy(text.strip("• "))
                if label == "Vinhos em Taça":
                    blocks.append({"type": "part", "label": label})
                    menu_part = label
                else:
                    blocks.append({"type": "group", "label": label})
                last_item = None
                continue
            if "SemiBold" in font and re.match(r"^•\s*[\d.,/ ]+$", text) and last_item:
                last_item["price"] = tidy(text.strip("• ")).replace(" / ", " / ")
                continue
            if "SemiBold" in font:
                m = PRICE.search(text)
                name, price = (text[: m.start()], tidy(m.group(1))) if m else (text, "")
                if last_item and not last_item["price"] and not last_item["desc"]:
                    last_item["name"] = tidy(f"{last_item['name']} {name}")
                    last_item["price"] = re.sub(r"\s*/\s*", " / ", price)
                    continue
                last_item = {"type": "item", "name": tidy(name), "price": re.sub(r"\s*/\s*", " / ", price), "desc": ""}
                blocks.append(last_item)
                continue
            if last_item is not None:
                last_item["desc"] = tidy(f"{last_item['desc']} {text}")
    return blocks


data = []
for menu_id, title, filename, two_columns in MENUS:
    data.append({"id": menu_id, "title": title, "blocks": parse(SRC / filename, two_columns)})

OUT.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
for m in data:
    items = sum(1 for b in m["blocks"] if b["type"] == "item")
    print(f"{m['id']}: {items} itens, {len(m['blocks']) - items} títulos")
