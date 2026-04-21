# samoLabs Corporate Identity

> **Purpose:** Single source of truth for another Claude Code instance (or a human designer) to replicate the samoLabs visual language across all boiken-uC products (SamoChat, SamoRad, SamoPlan, SamoTerminal, SamoLizenz, SamoAngebot, Kunden-Shops).
>
> **Canonical reference:** `samoLabs-web/index.html` (live: https://samolabs.de). If this file disagrees with the live site, the live site wins — update this document.
>
> **Stand:** 2026-04-21. Nach dem "Top-20-EU-IT-Benchmark-Refresh". Branche: Software-Agentur, junges Team, direkter Ton.

---

## 1. Brand in one paragraph

samoLabs ist eine kleine, direkte Software-Schmiede, die Geschäftsprozesse für mittelständische Betriebe digitalisiert — ohne Consulting-Overhead, ohne Buzzwords. Auftritt: enterprise-seriös in Struktur und Typografie (wie SAP/Atos/Capgemini), aber mit einem lauten Hot-Pink-Akzent, der den Small-Team-Charakter signalisiert. Dark-dominant (Navy) für Hero/Footer, Weiß und Slate-100 für Inhalte — Rhythmuswechsel dark↔light ist konstitutiv, nicht kosmetisch.

---

## 2. Farbpalette

### Brand Colors

| Rolle | Hex | CSS-Variable | Einsatz |
|---|---|---|---|
| **Navy (primary)** | `#0F172A` | `--navy` | Hero-Background, Footer, dunkle Sections, Text auf Weiß |
| Navy-mid | `#1E293B` | `--navy-mid` | Sekundäre dunkle Flächen, Card-Hintergründe auf Navy |
| Navy-deep | `#020617` | `--navy-deep` | Sehr tiefes Schwarz-Blau (selten, z. B. unterer Footer-Verlauf) |
| **Purple (accent 1)** | `#818CF8` | `--purple` | Links, Arrow-Icons, Hover-States auf Dark, Eyebrow-Text |
| Purple-2 | `#6366F1` | `--purple-2` | Stärkerer Purple für Buttons/Icons auf Light |
| Purple-3 | `#4F46E5` | `--purple-3` | Dunkelster Purple (Gradient-Ende) |
| Purple-light | `#EEF2FF` | `--purple-light` | Light-Surface, Badge-Hintergrund |
| **Pink (Hot-Accent)** | `#F472B6` | `--pink` | **Hauptakzent neu 2026-04:** Primary-CTA, Highlight-Underline, "laut"-Signal |
| Pink-2 | `#EC4899` | `--pink-2` | Pink Hover-State (stärker) |

### Neutrals

| Rolle | Hex | CSS-Variable |
|---|---|---|
| White | `#FFFFFF` | `--white` |
| Gray (muted) | `#64748B` | `--gray` |
| Gray-light | `#F8FAFC` | `--gray-light` |
| **Slate-100** | `#F1F5F9` | `--slate-100` | Light-Section-Hintergrund (Alternative zu Weiß) |
| Slate-200 | `#E2E8F0` | `--slate-200` | Border-Lines auf Weiß |
| Border | `#E2E8F0` | `--border` |
| Text | `#0F172A` | `--text` |
| Text-muted | `#475569` | `--text-muted` |

### Semantik

- **Pink ist der seltene, bewusste Akzent.** Nicht für Fließtext, nicht für jede Karte. Nur: Primary-CTA, eine Underline pro Hero, Sound-Toggle-Active.
- **Purple ist der tägliche Akzent.** Alle regulären Links, Icons, Arrow-Pfeile, Hover-Outlines.
- **Navy ist dominant, nicht gleichmäßig.** Hero + Footer + ~1 Mittelsektion → ca. 40–50 % der Seitenhöhe dark, Rest light. Monoton-dark ist falsch.
- **Slate-100 bricht die Monotonie zwischen zwei weißen Sections.** Nicht überall einsetzen.

### Gradients

- **Hero-CTA-Gradient:** `linear-gradient(90deg, var(--navy) 0%, var(--purple-2) 60%, var(--pink) 100%)` — Sektion #kontakt.
- **Text-Muted auf Navy:** `rgba(255,255,255,0.68)` für Subtext, `rgba(255,255,255,0.82)` für Button-Text-Secondary.

---

## 3. Typografie

### Fonts

- **Headings:** `'Outfit', sans-serif` — Google Fonts, Weights `300, 500, 700, 800, 900`
- **Body:** `'Inter', system-ui, sans-serif` — Google Fonts, Weights `300, 400, 500, 600, 700`

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Type Scale

| Rolle | Font | Weight | Size | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| **Hero H1** | Outfit | 900 | `clamp(44px, 6.5vw, 84px)` | 1.02 | -0.035em |
| Section H2 | Outfit | 800 | `clamp(34px, 3.6vw, 52px)` | 1.1 | -0.02em |
| Card H3 | Outfit | 700 | 22–24px | 1.3 | -0.01em |
| **Body** | Inter | 400 | 16px | 1.6 | 0 |
| **Hero Sub** | Inter | **300** | `clamp(17px, 1.55vw, 20px)` | 1.7 | 0 |
| Small / Caption | Inter | 500 | 13–14px | 1.5 | 0 |
| **Eyebrow** | Inter | **700** | **12px** | 1 | **0.14em**, all-caps |
| Button | Inter | 700 | 15px | 1 | 0 |
| Stat (oversized) | Outfit | 900 | `clamp(56px, 7vw, 96px)` | 1 | -0.04em |

### Prinzipien

- **Gewichts-Kontrast ist laut:** Outfit 900 Hero-Headline direkt über Inter **300** Subline. Nicht beide in 400/700 mischen — die Dramatik lebt vom Sprung.
- **Headline ≤ 3 Zeilen.** Lange Sätze brechen das Enterprise-Bild.
- **Ein Wort pro Headline mit `.accent`-Underline** (pink). Nicht mehr — sonst wirkt es beliebig.
- **Eyebrow IMMER mit farbigem Dot** (`.eyebrow-dot`, Pink, mit Glow).

---

## 4. Logo

### Dateien

Zentral in `boiken-uC/assets/logo/` und pro Projekt in `./assets/` dupliziert.

| Datei | Einsatz |
|---|---|
| `samolabs-logo-dark.png` | Logo für dunkle Hintergründe (Hero, Nav, Footer) — **Standard** |
| `samolabs-logo-light.png` | Logo für helle Hintergründe |
| `samoRad-logo-dark.png` | Produkt-Logo SamoRad |
| `samoChat-logo-dark.png` | Produkt-Logo SamoChat |
| `samoPlan-logo-dark.png` | Produkt-Logo SamoPlan |
| `samoTerminal-logo-dark.png` | Produkt-Logo SamoTerminal |

### Regeln

- **Height in Nav:** `26px` (fest). In Hero/Footer größer nur nach Absprache.
- **Clearspace:** mind. Logo-Höhe rundum.
- **Nie auf pink/bunt.** Nur Navy, Weiß, Slate. Pink ist Akzent, nicht Logo-Hintergrund.

---

## 5. Komponenten-Katalog

### 5.1 Button — Primary (Pink-CTA)

```css
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--pink);
  color: var(--navy);
  font-family: 'Inter';
  font-weight: 700; font-size: 15px;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(244,114,182,0.3);
  transition: background .2s, transform .15s, box-shadow .2s;
}
.btn-primary:hover {
  background: var(--pink-2);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(236,72,153,0.45);
}
```

### 5.2 Button — Outline (Dark-BG)

```css
.btn-outline {
  display: inline-flex; align-items: center; gap: 8px;
  background: transparent;
  color: rgba(255,255,255,0.82);
  font-family: 'Inter';
  font-weight: 600; font-size: 15px;
  padding: 15px 30px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.22);
  transition: border-color .2s, color .2s, background .2s;
}
.btn-outline:hover {
  border-color: var(--purple);
  color: var(--purple);
  background: rgba(129,140,248,0.06);
}
```

### 5.3 Eyebrow

```html
<div class="eyebrow">
  <span class="eyebrow-dot"></span>
  Software-Entwicklung &amp; Prozessoptimierung
</div>
```

```css
.eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  background: rgba(129,140,248,0.1);
  border: 1px solid rgba(129,140,248,0.24);
  border-radius: 99px;
  padding: 6px 18px;
  font-size: 12px; font-weight: 700;
  color: var(--purple);
  letter-spacing: .14em;
  text-transform: uppercase;
}
.eyebrow-dot {
  width: 6px; height: 6px;
  background: var(--pink);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(244,114,182,0.2);
}
```

### 5.4 Card (Produkt/Leistung)

- Border-Radius `18px`
- Border `1px solid var(--border)` auf Weiß, `rgba(255,255,255,0.08)` auf Navy
- Padding `28px 30px` (Desktop), `24px 24px` (Mobile)
- Hover: `translateY(-4px)` + Shadow-Upgrade
- Optional Hintergrund-SVG-Mockup mit `opacity: 0.08`, bei Hover `opacity: 0.18`

### 5.5 Nav (Sticky)

- `position: fixed; top:0; z-index:100; height:68px; padding: 0 6%;`
- Default: `background: rgba(15,23,42,0.55); backdrop-filter: blur(14px);`
- Bei `window.scrollY > 8` Klasse `.scrolled` toggeln → solides Navy `rgba(15,23,42,0.96)` + Shadow.

### 5.6 Hero-Underline (Pink-Accent)

```css
.hero-h1 .accent {
  position: relative;
  color: var(--white);
  white-space: nowrap;
}
.hero-h1 .accent::after {
  content: "";
  position: absolute;
  left: 0; right: 0;
  bottom: 0.06em;
  height: 0.24em;
  background: var(--pink);
  border-radius: 2px;
  z-index: -1;
  opacity: .85;
}
```

### 5.7 Shadow-Tiers

| Tier | Wert | Einsatz |
|---|---|---|
| Card rest | `0 2px 8px rgba(15,23,42,0.04), 0 1px 2px rgba(15,23,42,0.03)` | Statische Karten |
| Card hover | `0 12px 32px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.05)` | Hover-Lift |
| Pink-Glow CTA | `0 8px 24px rgba(244,114,182,0.3)` rest → `0 12px 32px rgba(236,72,153,0.45)` hover | Primary-Button |
| Nav-scrolled | `0 6px 24px rgba(0,0,0,0.18)` | Nav bei Scroll |

---

## 6. Section-Rhythmus

Standard-Reihenfolge für eine Produkt-/Marketing-Seite (Soll-Architektur):

1. **Nav** (sticky, transparent→solid) — Navy-Transparent
2. **Hero** — Navy, optionales Video-Loop im Hintergrund mit Dark-Overlay (opacity 0.45)
3. **Trust-Bar** (Logo-Marquee) — Weiß, dünn
4. **Leistungen** (01/02/03 als Prozesslinie) — Weiß
5. **Produkte** (4er-Grid) — Navy
6. **Stats / KPI** (oversized Zahlen mit Counter) — Slate-100
7. **Case Study / Zitat** — Weiß
8. **Über uns** — Slate-100 oder Weiß
9. **Kontakt-CTA** — Gradient Navy→Purple→Pink
10. **Footer** — Navy-deep

**Regel:** Zwei aufeinanderfolgende Sections dürfen NICHT die gleiche BG-Farbe haben. Wechsel: Navy↔Weiß↔Slate-100.

---

## 7. Motion & Interaktion

- **Sticky Nav-Transition:** `background/border/shadow` über 0.3s bei scrollY > 8
- **Section-Reveal:** IntersectionObserver, `translateY(16px) opacity(0) → 0/1` über 0.6s (ease-out)
- **Counter-Animation:** Zielwert von 0 hochzählen über 1.2s, Easing `1 - (1-p)^3`
- **Card-Hover:** `translateY(-4px)` + Shadow-Upgrade, 0.15–0.2s
- **Logo-Marquee:** CSS `@keyframes` linear infinite, 40s pro Loop
- **`prefers-reduced-motion: reduce`** → ALLE o. g. Animationen deaktivieren (keine Ausnahmen).

---

## 8. Iconographie

- **Icon-Library:** Lucide (inline SVG, kein externes Bundle).
- **Stroke:** `stroke-width: 2` (Regel), `2.5` für Buttons.
- **Size:** 16px (inline), 20–24px (Feature-Karten).
- **Color:** `currentColor` — Farbe kommt aus dem Eltern-Text-Style.

---

## 9. Voice & Tone (Deutsch)

- **Direkt, ohne Anglizismen wo vermeidbar** ("Gespräch vereinbaren", nicht "Book a Call")
- **Keine Consulting-Buzzwords:** nein zu "Synergien", "skalieren", "holistisch", "disruptiv", "leveragen"
- **Small-Team-ehrlich:** "wir sind zu zweit und bauen euch das", nicht "unser Kompetenzzentrum für digitale Transformation"
- **Kunden-Sprache:** "Ihre Prozesse", nicht "Ihre Business-Logik". Konkret, nicht abstrakt.
- **Headline-Länge:** max. 3 Zeilen, 8–12 Wörter.
- **CTA-Verben:** "ansehen", "vereinbaren", "starten", "probieren" — nie "Jetzt loslegen!" mit Ausrufezeichen.

---

## 10. Accessibility (Pflicht, nicht Nice-to-have)

- **Lighthouse A11y Score ≥ 95.**
- **Kontrast:** Alle Text-/BG-Kombis WCAG AA. Purple auf Navy ist grenzwertig — immer gegen Tool prüfen.
- **Keyboard-Nav:** Alle interaktiven Elemente via Tab erreichbar, keine Traps, sichtbarer Focus-Ring (Purple-2 outline).
- **Reduced-Motion:** siehe §7.
- **Alt-Texte:** Logos haben Alt, Deko-SVGs `aria-hidden="true"`.
- **Sound:** NIE Autoplay mit Ton (Browser-Policy + höflich). Toggle-Button mit `aria-pressed` und `aria-label`.

---

## 11. Produkt-Sub-Brands

Jedes Produkt erbt die Grund-Identität, darf aber eine eigene "Ton-Variante" haben:

| Produkt | Sekundärfarbe | Ton | Domain |
|---|---|---|---|
| **SamoRad** | Purple-2 (wie core) | Werkstatt-praktisch, kurz | samorad.de |
| **SamoChat** | Purple + leicht Cyan | KI-/Tech, nüchtern | samochat.de |
| **SamoPlan** | Purple + Emerald | Plan-/Struktur-Tone | samoplan.de |
| **SamoTerminal** | Purple + Amber | Tablet/Hardware-Tone | — (Kiosk) |
| **SamoLizenz** | Neutral/Slate | Admin-Tool, sachlich | lizenz.samorad.de |
| **SamoAngebot** | Pink-akzentuiert | Sales, selbstbewusst | — (intern) |

Das Logo bleibt immer das jeweilige `<Produkt>-logo-dark.png`. Nav/Footer übernehmen das Core-Navy der Mutter. Nur die Feature-Akzente (Icons, Section-Headline-Underlines) dürfen die Sekundärfarbe tragen.

---

## 12. Für andere Claude-Code-Instanzen: "Was einbauen?"

Wenn du eine neue boiken-uC-Seite baust, mach minimum:

1. **Fonts laden** (Outfit + Inter, siehe §3)
2. **CSS-Variablen** (§2) als `:root` copy-paste
3. **Hero mit Eyebrow + 900er-Headline + 300er-Sub + Pink-CTA** — das ist der Wiedererkennungs-Anker
4. **Dark↔Light-Rhythmus** mindestens zweimal wechselnd
5. **Sticky Nav mit Scroll-Transition**
6. **IntersectionObserver Reveal + reduced-motion-Respekt**
7. **Lucide-Icons inline, nicht extern**
8. **Logo links in Nav, 26px hoch**

Wenn du diese 8 Punkte hast, sieht die Seite "wie samoLabs" aus. Alles Darüberhinausgehende ist Kür.

---

## Changelog

- **2026-04-21** — Initial nach dem Top-20-EU-IT-Benchmark-Refresh. Pink als Hot-Accent neu. Outfit 900 Hero-H1 statt 800. Slate-100 als Light-Variante etabliert.
