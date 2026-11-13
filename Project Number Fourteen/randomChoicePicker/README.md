<div align="center">

# 🎲 ChoiceSpark

### Your options. A little suspense. One fresh decision.

A stylish choice randomizer built with **HTML, CSS, and JavaScript**.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#-built-with)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)](#-built-with)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#-built-with)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-8B5CF6?style=for-the-badge)](https://creativecommons.org/licenses/by/4.0/)

**Dinner plans · Game night · Creative prompts · Everyday decisions**

[Explore the concept](#-the-idea) · [Get started](#-getting-started) · [View roadmap](#-roadmap) · [Attribution](#-license--attribution)

---

</div>

> **Project status: Planning / in development.** This README describes the intended experience. The application files, preview, and features will be added as development progresses.

## ✨ The idea

Some decisions deserve a little randomness.

**ChoiceSpark** turns a list of possibilities into a simple, playful decision. Enter your choices, press a button, and let the app pick one for you. Whether you're choosing tonight's dinner, your next creative challenge, or a game-night activity, the goal is to make the moment feel effortless and fun.

### Enter → Randomize → Discover

```text
┌─────────────────────────────────────────────┐
│                 CHOICESPARK                 │
│                                             │
│   Your choices                              │
│   • Pizza                                   │
│   • Tacos                                   │
│   • Sushi                                   │
│                                             │
│             [ PICK A CHOICE ]               │
│                                             │
│             Tonight's pick: Tacos!           │
└─────────────────────────────────────────────┘
```

*Concept illustration; the finished interface may differ.*

## 🚀 Planned features

| Feature | Intended experience |
| :--- | :--- |
| 📝 Custom choices | Enter the options you want to choose from. |
| 🎲 Random selection | Select one entry from the current list. |
| ✏️ Flexible list editing | Add, remove, or update entries before picking. |
| ✨ Animated reveal | Build a little suspense before showing the result. |
| 📱 Responsive layout | Make the interface comfortable on phones, tablets, and desktops. |
| ⌨️ Accessible controls | Support keyboard use, visible focus, and clear result announcements. |
| 🧹 Clear and restart | Reset the list when it's time for a new decision. |

## 🧭 How it will work

1. **Add your options.** Enter a choice and add it to your list.
2. **Review the list.** Edit or remove anything before making a selection.
3. **Press the randomize button.** The app selects an entry at random.
4. **See your result.** The selected choice appears in a prominent result area.
5. **Go again.** Pick another option or start a fresh list.

### Example

```text
Question: What should we do this weekend?

Choices:
  → Go hiking
  → Have a movie night
  → Visit a museum
  → Try a new restaurant

Random result: Visit a museum
```

## 🛠️ Built with

| Technology | Role |
| :--- | :--- |
| **HTML5** | Semantic page structure, form controls, and the result area. |
| **CSS3** | Layout, visual styling, responsive behavior, and animation. |
| **JavaScript** | Choice management, input validation, and random selection. |

The planned core application uses browser-native technologies and requires no backend.

## 📂 Suggested project structure

```text
choicespark/
├── index.html          # Page structure and controls
├── css/
│   └── style.css       # Layout, themes, and animations
├── js/
│   └── script.js       # List management and selection logic
├── assets/
│   └── preview.png     # Add a real screenshot when available
├── README.md           # Project documentation
└── LICENSE.md          # Creative Commons license notice
```

## ⚡ Getting started

Once the application files have been created:

1. Download or clone the project folder.
2. Open `index.html` in a modern web browser.
3. Enter your choices and try a selection.

For development, you can also open the folder in your editor and use a local preview server. No package installation or build step is planned for the initial version.

## 🎯 Selection behavior

The initial design will give every list entry an equal chance of being picked. A simple JavaScript implementation can select an index like this:

```javascript
function pickChoice(choices) {
  if (choices.length === 0) return null;

  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
```

Before selecting, the interface should trim whitespace and ignore blank entries. Duplicate entries count as separate chances unless duplicate filtering is added. Consecutive picks may return the same result.

## 🎨 Design direction

- **Bold focal point:** a clear primary button and a result that's easy to spot.
- **Polished details:** rounded panels, subtle shadows, and a vibrant accent color.
- **Comfortable spacing:** readable text and generous room around interactive controls.
- **Purposeful motion:** a brief reveal animation with reduced-motion support.
- **Clear feedback:** helpful empty-list messages and understandable input guidance.

## 🗺️ Roadmap

- [ ] Create the HTML layout and choice-entry form.
- [ ] Style the responsive interface.
- [ ] Implement adding, editing, and removing choices.
- [ ] Add input validation and random selection.
- [ ] Build the result display and optional reveal animation.
- [ ] Check keyboard navigation, screen-reader announcements, and reduced motion.
- [ ] Test on mobile and desktop browsers.
- [ ] Add a real screenshot and live demo link.

<details>
<summary><strong>🌟 Future possibilities</strong></summary>

- Save favorite lists locally in the browser.
- Shuffle the entire list into a random order.
- Pick multiple results in one round.
- Add an optional no-repeat mode.
- Offer light and dark themes.
- Import and export choice lists.

These are ideas for later versions, not current features.

</details>

## 🤝 Contributing

Ideas and improvements are welcome. When proposing a change, explain the problem it solves and include a screenshot if it changes the interface. Keep the core experience simple: enter choices, make a selection, and see the result.

## 📜 License & attribution

Except where separately noted, this project is licensed under the **[Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)**. See [LICENSE.md](LICENSE.md) for the license notice and a link to the full terms.

You may share and adapt the licensed material, including for commercial purposes, subject to the license terms. Give appropriate credit, link to the license, indicate changes, and retain required notices. Do not imply endorsement or impose additional restrictions prohibited by the license.

### Credit this project

Replace the bracketed fields with the creator's details before publishing:

```text
ChoiceSpark by [Creator Name]
Source: [Project URL]
Licensed under CC BY 4.0:
https://creativecommons.org/licenses/by/4.0/
Changes: [Describe modifications, or state “None.”]
```

Third-party materials retain their own licenses. The badge images above are served by Shields.io; technology names and logos identify the tools used and do not imply endorsement.

---

<div align="center">

**Turn “I can't decide” into “Let's do that.”**

Made with HTML, CSS, JavaScript, and a little chance. 🎲

</div>
