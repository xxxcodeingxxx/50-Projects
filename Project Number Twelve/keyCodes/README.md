<div align="center">

# ⌨️ KeyScope
### Press a key. See the event. Understand the keyboard.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-7C3AED?style=for-the-badge)](https://creativecommons.org/licenses/by/4.0/)

**A small web app for exploring the values behind every keyboard event the browser receives.**

[Overview](#-overview) · [How It Works](#-how-it-works) · [Getting Started](#-getting-started) · [License](#-license--attribution)

</div>

---

## ✨ Overview

**KeyScope** is a planned HTML, CSS, and JavaScript web app that displays three keyboard event properties when you press a key:

- **`event.key`** — the key's interpreted value.
- **`event.keyCode`** — its legacy numeric identifier.
- **`event.code`** — the identifier associated with its physical keyboard position.

Use it to explore JavaScript keyboard events, compare keys, and understand the difference between a character and a keyboard position.

> 🚧 **Project status:** In development. This README describes the intended app; implementation files and a live demo are not included with this documentation.

## 🎯 Planned Experience

1. Open the app and focus the page.
2. Press a key on a physical keyboard.
3. View its `key`, `keyCode`, and `code` values together.
4. Press another key to update the display.

A simple, readable interface will keep the event values at the center of the experience.

## 🔎 How It Works

The app listens for the browser's **`keydown`** event and reads the properties from the event passed to the listener.

```javascript
document.addEventListener("keydown", (event) => {
  console.log({
    key: event.key,
    keyCode: event.keyCode,
    code: event.code,
  });
});
```

### One press, three perspectives

Typical results on a US QWERTY keyboard:

| Key pressed | `event.key` | `event.keyCode`* | `event.code` |
| :--- | :--- | :---: | :--- |
| A | `"a"` | `65` | `"KeyA"` |
| Shift + A | `"A"` | `65` | `"KeyA"` |
| Enter | `"Enter"` | `13` | `"Enter"` |
| Space | `" "` | `32` | `"Space"` |
| Left arrow | `"ArrowLeft"` | `37` | `"ArrowLeft"` |

*Numeric values are illustrative legacy results and can vary by browser, platform, and input method. For Shift + A, the row describes the A key's event while Shift is held.

**Why the values differ:** `key` reflects the keyboard layout and modifiers such as Shift. `code` describes a physical key position, so the same position can produce a different character on another layout.

> **Legacy property:** `event.keyCode` is deprecated. It is included for learning and comparison. Use `event.key` or `event.code` when building new keyboard interactions. See [MDN's keyCode documentation](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode).

## 🧰 Built With

| Technology | Purpose |
| :--- | :--- |
| **HTML** | Page structure and event value displays |
| **CSS** | Layout, typography, colors, and visual feedback |
| **JavaScript** | Keyboard event handling and display updates |

## 🚀 Getting Started

Once the app has been implemented:

1. Download or clone the project.
2. Open `index.html` in a desktop browser.
3. Click the page to give it focus, then press a key.

The planned app uses plain HTML, CSS, and JavaScript, with no build step required.

### Suggested project structure

```text
keyscope/
├── index.html     # App markup
├── style.css      # App styling
├── script.js      # Keyboard event handling
├── README.md      # Project documentation
└── LICENSE.md     # License notice and official terms
```

## 🧭 Browser Notes

- The page must have focus to receive keyboard events.
- Some shortcuts and hardware keys are handled by the browser or operating system and may never reach the page.
- Holding a key can produce repeated `keydown` events.
- Keyboard layouts, input methods, and virtual keyboards can affect the reported values.
- Space is a literal space in `event.key`; showing a friendly “Space” label can make it easier to read.

## 🗺️ Development Checklist

- [ ] Create the HTML layout and initial “Press any key” message.
- [ ] Style the three event value displays.
- [ ] Listen for `keydown` and update all three values.
- [ ] Add a readable label for the Space key.
- [ ] Check letters, numbers, arrows, modifiers, and repeated key presses.
- [ ] Check keyboard focus, readable contrast, and narrow screen layouts.

## 📚 Learn More

- [MDN: KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
- [MDN: KeyboardEvent.keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)
- [MDN: KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)
- [MDN: keydown event](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)

## 🤝 Contributing

Ideas, bug reports, and improvements are welcome. When reporting unexpected output, include the key pressed, keyboard layout, operating system, browser, and the values shown.

## 📜 License & Attribution

This project's original material is licensed under the **Creative Commons Attribution 4.0 International License (CC BY 4.0)**, unless a file states otherwise. Third-party material retains its own license.

You may share and adapt the licensed material, including commercially, under the license's terms. Give appropriate credit, link to the license, and indicate whether you made changes. Do not imply endorsement by the original creators.

**Suggested attribution:**

> “KeyScope” by the KeyScope contributors, licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/. Changes: describe any modifications, or state “none.”

When sharing the project, include its original repository or source link alongside that credit. Replace the contributor credit with your preferred author name before publishing if desired.

See [LICENSE.md](LICENSE.md) and the [official CC BY 4.0 legal terms](https://creativecommons.org/licenses/by/4.0/legalcode).

---

<div align="center">

**⌨️ Every key has a story. See what yours sends.**

</div>
