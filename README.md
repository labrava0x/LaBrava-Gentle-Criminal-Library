# Gentle's Grand Library — *LaBrava-Gentle-Criminal-Library*

An interactive, single-page archive and fan-art web application inspired by *My Hero Academia* (created by Kōhei Horikoshi), celebrating the theatrical devotion and hacker-noir synergy of Gentle Criminal and Manami Aiba (La Brava).

What began as a fourth library build turned into a deep dive into concentric heart spirals and vector eye geometry—chasing the exact gaze of Manami looking out through the screen with her Quirk active and unshakable devotion.

---

## Architectural Overview

The project uses a modular single-page layout with a standalone validation layer:

* **`gentlindex.html`**: Semantic document structure hosting the full-screen **Quirk Threshold Portal**, header controls, archive inscription modal, and responsive library grid container.
* **`gentlestyle.css`**: Narrative stylesheet setting up the dark hacker-noir aesthetic, CRT scanlines, typography (`Cinzel`, `Cormorant Garamond`, and `Share Tech Mono`), and crimson, plum, raspberry, and terminal-green accents (`#060205`, `#1C0D15`, `#351B29`, `#D67893`, `#F9D3DD`, `#ff007f`, `#00ff88`).
* **`gentlelibrary.js`**: Object-oriented engine managing the 29-volume seed archive, `localStorage` persistence (`v6`), dynamic DOM card rendering, state toggling, deletion, JSON export, and Quirk Boost interactions.
* **`gentle.validators.js`**: Self-attaching form validation module (maintained on the `validation-form` branch) that intercepts submission in the capture phase and delivers character-voiced feedback without modifying `gentlelibrary.js`.

---

## 👁️ The Quirk Threshold Portal (La Brava’s Active Gaze)

The entry screen opens with a full-screen interactive SVG portal depicting La Brava's gaze as her Quirk is engaged:

* **Eyeliner & Contours (`#1C0D15`)**: Slanted anime eye contour with a sharp upper wing sweeping upward and outward.
* **Sclera (`#FFFFFF`)**: High-contrast eye whites set against the deep dark plum backdrop (`#060205`).
* **Active Quirk Iris Structure (Center-Outward Progression)**:
  * **Innermost Core Heart Rings (2 Rings)**: Twin concentric heart paths built with cubic Bézier (`C`) curves in deep plum (`#351B29`) and core shade (`#1C0D15`).
  * **Expanding Circular Spirals**: Concentric `<circle>` elements expanding outward from `r="11"` to `r="44"`, alternating across mid-tone pink highlights (`#D67893`) and light pink base rings (`#F9D3DD`).
  * **Outer Iris Boundary**: Solid near-black closing ring (`#1C0D15`) framing the iris against the sclera.
* **Interactive Trigger**: Clicking anywhere on the portal or pressing `Enter` applies the `shattered` class, scaling and dissolving the portal into the library archive.

---

## 📚 The Grand Library Engine & Data Architecture

Preloaded with a curated collection of **29 master volumes** spanning literary classics, technical/hacking manuals, and private journals:

* **Unified Rallying Cry**: Every card highlights the custom inscription in high-visibility terminal green (`#00FF66`):
  > `each book, shared with love , and imperial royal ☕! I love you, Gentle! ❤️`
* **Object-Oriented `Book` Class**: Stores unique UUIDs (via `crypto.randomUUID()` with a deterministic fallback generator), `title`, `author`, `pages`, `shelf`, `belovedBy`, `marginalia`, `loveLevel` (`❤️❤️❤️❤️❤️`), `status`, and `notes`.
* **Enhanced Readability Notes**: La Brava's notes render in large, high-contrast hacker green (`#00FF66`) with generous line spacing.
* **Interactive Controls & Actions**:
  * **Status Toggling**: Switch entries between `"🎩 Gentle has studied this tome"` and `"⏳ Awaiting Gentle’s review"`.
  * **Exile / Removal (`"Back to the Terminal"`)**: Remove volumes from the archive and persist the updated state.
  * **Archive Inscription Modal**: Log new volumes or deeds directly into `localStorage`.
  * **JSON Export**: Download a full backup of the archive as `gentles-grand-library-archives.json`.
  * **Quirk Boost Trigger**: Toggle visual camera/boost styling with celebratory feedback.

---

## Running Locally & Branch Workflow

Start a local server from the project directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

To commit and push changes to the `validation-form` branch:

```bash
git status
git add .
git commit -m "Update README and finalize validation-form branch"
git push -u origin validation-form
```

---

## Attribution & Disclaimer

*My Hero Academia* and its characters—including Manami Aiba (La Brava) and Gentle Criminal—belong to **Kōhei Horikoshi** and their respective rights holders. This repository is a non-commercial fan-art and coding project.