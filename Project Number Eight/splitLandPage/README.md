<div align="center">

# ◧ Console Clash

### Two consoles. One screen. Pick your side.

A split-screen landing page showcasing **PlayStation 5** and **Xbox Series X**, built with **HTML, CSS, and JavaScript**.

![HTML](https://img.shields.io/badge/HTML-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Style-663399?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interaction-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Planned-06B6D4?style=for-the-badge)
![License](https://img.shields.io/badge/License-CC_BY_4.0-22C55E?style=for-the-badge)

[Overview](#overview) · [The Experience](#the-experience) · [Built With](#built-with) · [Getting Started](#getting-started) · [License](#license)

---

**PlayStation blue. Xbox green. A landing page with two personalities.**

</div>

## Overview

**Console Clash** is a front-end project concept that puts PlayStation 5 and Xbox Series X side by side in a bold, full-screen landing page.

Each console gets its own panel, background image, heading, and call to action. Interacting with one side expands its space while the opposite side contracts, giving the selected console the spotlight.

> **Project status:** Planned build. This README describes the proposed experience and file structure; implementation files are not included here.

## The Experience

```text
┌────────────────────────┬────────────────────────┐
│                        │                        │
│     PLAYSTATION 5      │     XBOX SERIES X      │
│                        │                        │
│     [ Explore ]        │      [ Explore ]       │
│                        │                        │
└────────────────────────┴────────────────────────┘
             Hover or focus to explore
```

| State | Intended behavior |
| --- | --- |
| **At rest** | Both panels share the screen equally. |
| **PlayStation active** | The PS5 panel expands and the Xbox panel narrows. |
| **Xbox active** | The Xbox panel expands and the PS5 panel narrows. |
| **Interaction ends** | The layout returns to an even split. |
| **Touch devices** | Both consoles and their actions remain accessible without hover. |

## Planned Features

- 🎮 **Two-console showcase** with distinct PlayStation and Xbox styling.
- ↔️ **Expanding split panels** driven by JavaScript interaction states.
- ✨ **Smooth CSS transitions** for a polished change in emphasis.
- 🖼️ **Full-panel background images** with overlays that keep text readable.
- 🔗 **Clear calls to action** linking to the chosen destination for each console.
- 📱 **Responsive layout** with a stacked presentation where needed on small screens.
- ⌨️ **Keyboard support** so focus can activate the same emphasis as hover.
- ♿ **Reduced-motion support** for a comfortable browsing experience.

## Built With

| Technology | Role |
| --- | --- |
| **HTML** | Semantic panel structure, headings, and destination links. |
| **CSS** | Split layout, console themes, overlays, responsive styles, and transitions. |
| **JavaScript** | Pointer and focus handling, active-panel classes, and reset behavior. |

The intended core build uses browser-native features without a front-end framework.

## How It Works

1. HTML divides the landing page into two console sections.
2. CSS gives each section an equal share of the available space.
3. JavaScript detects pointer entry or keyboard focus and activates the corresponding panel.
4. CSS transitions expand the active panel and reduce the opposite panel.
5. JavaScript clears the active state when neither pointer nor keyboard focus remains in a panel.

On touch devices, the layout should keep both calls to action immediately usable. Animation should enhance the page without becoming a requirement for navigation.

## Suggested Project Structure

```text
console-clash/
├── index.html          # PS5 and Xbox landing-page sections
├── style.css           # Split layout, themes, and transitions
├── script.js           # Panel interaction states
├── assets/
│   ├── ps5.jpg         # PlayStation panel image
│   └── xbox-series-x.jpg
├── LICENSE.md
└── README.md
```

## Getting Started

Once the implementation files have been created:

1. Download or clone the project.
2. Add your console images to the `assets` folder.
3. Update the image paths in the stylesheet or markup to match your files.
4. Set each call-to-action link to its intended destination.
5. Open `index.html` in a modern browser.
6. Hover over either panel, then test the page using only the keyboard.

Use a local development server if the build introduces JavaScript modules or fetched resources.

## Customization

| Setting | What it changes |
| --- | --- |
| **Panel images** | The console photography or artwork on each side. |
| **Theme colors** | Blue and green accents, overlays, and button states. |
| **Expansion ratio** | How much space the active panel receives. |
| **Transition duration** | How quickly the panels expand and contract. |
| **Text and buttons** | Headings, action labels, and destination links. |
| **Mobile breakpoint** | When the side-by-side layout becomes stacked. |

### Suggested Design Tokens

```css
:root {
  --playstation-accent: #0070d1;
  --xbox-accent: #107c10;
  --panel-expanded: 75%;
  --panel-contracted: 25%;
  --transition-duration: 700ms;
}
```

These are proposed styling values. Adjust them during implementation, keeping headings and buttons readable even in the contracted panel.

## Build Checklist

- [ ] Create both console panels with meaningful headings.
- [ ] Add properly licensed images and readable overlays.
- [ ] Implement pointer and keyboard interaction states.
- [ ] Restore the even split when no panel is active.
- [ ] Keep focus-driven emphasis stable when the pointer leaves.
- [ ] Ensure both calls to action work on touch devices.
- [ ] Prevent cropped headings, buttons, and horizontal overflow.
- [ ] Respect reduced-motion preferences.
- [ ] Keep navigation usable when JavaScript is unavailable.
- [ ] Check desktop, tablet, and mobile layouts.
- [ ] Verify all destination links.
- [ ] Add a screenshot and live demo link when available.

## Credits & Brand Notice

This is an independent front-end showcase project. It is not affiliated with or endorsed by Sony Interactive Entertainment or Microsoft.

PlayStation, PS5, Xbox, and Xbox Series X names, logos, and other brand assets belong to their respective owners. Add the creator, source, and license for each image or external asset used in the finished page. These third-party materials are not relicensed by this project.

## Contributing

Suggestions and improvements are welcome. Keep changes focused, explain what they improve, and provide steps to check the result. Include screenshots or a short recording for layout and animation changes when helpful.

## License

Unless otherwise noted, the original code, documentation, and original assets in **Console Clash** are licensed under the **Creative Commons Attribution 4.0 International License (CC BY 4.0)**.

You may share and adapt that material, including commercially, under the license terms. Give appropriate credit, provide a link to the license, and indicate whether changes were made. Third-party images, logos, and other materials remain subject to their own terms; this license grants no trademark rights.

See the [license notice](LICENSE.md), [license summary](https://creativecommons.org/licenses/by/4.0/), and [full legal terms](https://creativecommons.org/licenses/by/4.0/legalcode.en).

---

<div align="center">

**Two sides worth exploring. One page worth building.**

HTML · CSS · JavaScript

</div>
