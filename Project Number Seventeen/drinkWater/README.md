<div align="center">

<img src="favicon.svg" width="96" height="96" alt="AquaFlow water droplet logo">

# AquaFlow
### Small sips. Steady progress. A daily goal within reach.

**A daily water tracker built with HTML, CSS & JavaScript.**

![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Style-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interaction-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**2 liters · 8 cups · 1 daily goal**

[The idea](#the-idea) • [How it works](#how-it-works) • [Getting started](#getting-started) • [Credits](#credits--license)

</div>

---

## The idea

AquaFlow turns your daily water intake into progress you can see. Add a cup, watch the total rise, and keep track of the water remaining toward a two-liter daily target.

Simple interactions. A refreshing design. One cup at a time.

> **Project status:** Planned. This package contains the README, favicon assets, and attribution materials. The app itself is still to be built; the behavior below describes the intended experience.

## At a glance

| Detail | Plan |
| :--- | :--- |
| Daily target | 2,000 mL / 2 liters |
| Cup size | 250 mL per cup |
| Cups to complete | 8 |
| Technologies | HTML, CSS, vanilla JavaScript |
| Dependencies | No framework required |

**Measurement note:** A “cup” in this app means a fixed 250 mL serving. It does not mean a US customary cup.

## Planned features

- **Tap to log a cup** — add 250 mL with each cup recorded.
- **See the total** — display the amount consumed in milliliters or liters.
- **Watch your progress** — show a fill indicator and completion percentage.
- **Know what remains** — display the water left to reach two liters.
- **Celebrate completion** — show a completed state after eight cups.
- **Start fresh** — reset the tracker for a new day.
- **Use it anywhere** — provide a responsive layout for phones and desktops.

## How it works

1. Begin at **0 mL** with **2 liters remaining**.
2. Record a cup after drinking **250 mL** of water.
3. Update the total, remaining amount, and progress indicator.
4. Reach **eight cups** to complete the daily target.
5. Cap the recorded total at **2,000 mL** and reset for the next day.

| Cups recorded | Total consumed | Remaining | Progress |
| :---: | :---: | :---: | :---: |
| 0 | 0 mL | 2,000 mL | 0% |
| 1 | 250 mL | 1,750 mL | 12.5% |
| 2 | 500 mL | 1,500 mL | 25% |
| 4 | 1,000 mL | 1,000 mL | 50% |
| 6 | 1,500 mL | 500 mL | 75% |
| 8 | 2,000 mL | 0 mL | 100% |

### The math

```js
const CUP_ML = 250
const DAILY_GOAL_ML = 2000

const consumedML = Math.min(cupsConsumed * CUP_ML, DAILY_GOAL_ML)
const remainingML = DAILY_GOAL_ML - consumedML
const progressPercent = (consumedML / DAILY_GOAL_ML) * 100
```

Keep `cupsConsumed` within **0–8** so the display stays consistent.

## Built with

| Technology | Responsibility |
| :--- | :--- |
| HTML | Semantic page structure, cup controls, and progress labels |
| CSS | Water visuals, layout, responsive styling, and transitions |
| JavaScript | Cup interactions, totals, goal limits, and reset behavior |

## Getting started

Once the application files have been created:

1. Place `index.html`, `style.css`, and `script.js` in the project folder.
2. Copy the supplied favicon files into that same folder.
3. Link the stylesheet, script, and icons in the HTML.
4. Open `index.html` in a browser, or use a local development server.

### Suggested project structure

```text
aquaflow/
├── index.html          # To be created: app markup
├── style.css           # To be created: app styles
├── script.js           # To be created: tracking logic
├── favicon.svg         # Included: scalable droplet icon
├── favicon.ico         # Included: browser fallback
├── README.md           # Included: project guide
├── LICENSE.md          # Included: CC BY 4.0 notice
└── ATTRIBUTION.md      # Included: reusable credit text
```

### Connect the favicon

Add these lines inside your HTML `<head>`:

```html
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="icon" href="favicon.ico" sizes="64x64">
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

## Design direction

**Deep ocean blue. Bright aqua. Clean, readable typography.**

Pair a large water vessel with eight smaller cup controls. Let the water level rise as cups are recorded, while clear text communicates the same progress without relying on color alone.

| Color | Hex | Suggested use |
| :--- | :--- | :--- |
| Deep ocean | `#082F49` | Headings and dark surfaces |
| Ocean blue | `#0369A1` | Primary controls |
| Bright aqua | `#22D3EE` | Water fill and progress |
| Ice blue | `#A5F3FC` | Highlights |
| Cloud | `#F0F9FF` | Page background |

### Accessibility checklist

- Use real buttons with visible keyboard focus.
- Give every cup a clear label, such as “Add 250 mL of water.”
- Display totals as text alongside any water animation.
- Announce changed totals with a polite live region.
- Respect reduced-motion preferences.
- Make the reset action clearly labeled.

## Build checklist

- [ ] Create the main HTML layout and eight cup controls.
- [ ] Style the water vessel and responsive layout.
- [ ] Add cup recording and progress calculations.
- [ ] Prevent intake from exceeding the app's two-liter cap.
- [ ] Add a manual daily reset.
- [ ] Test keyboard controls and mobile layouts.

### Ideas for later

- Save today's progress with `localStorage`.
- Store the local calendar date and reset when a new day begins.
- Let users undo an accidental cup entry.
- Add optional custom cup sizes and daily goals.
- Show a history of completed days.

Persistence and automatic daily rollover are future enhancements, not existing features.

## Credits & license

**Creator:** [Your name or organization]  
**Project URL:** [Add your repository or live app URL]

The original README text and supplied favicon artwork are offered under the [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/). See [LICENSE.md](LICENSE.md) and [ATTRIBUTION.md](ATTRIBUTION.md) for the notice and reusable credit text. External badges and third-party marks remain subject to their owners' terms.

Replace the creator and project URL placeholders before publishing. Application source code is not included in this package; choose and document its license when adding it.

---

<div align="center">

**Make every cup count. 💧**

*Built one sip at a time with HTML, CSS, and JavaScript.*

</div>
