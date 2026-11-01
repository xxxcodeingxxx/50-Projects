<div align="center">

# ≋ Wave Login

### A simple form with a little motion.

A login form built with **HTML, CSS, and JavaScript**, featuring a wave animation on the **email** and **password** labels.

![HTML](https://img.shields.io/badge/HTML-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Style-663399?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interaction-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Planned-06B6D4?style=for-the-badge)
![License](https://img.shields.io/badge/License-CC_BY_4.0-22C55E?style=for-the-badge)

[Overview](#overview) · [The Wave Effect](#the-wave-effect) · [Getting Started](#getting-started) · [Customization](#customization) · [License](#license)

---

**Focus a field. Watch the label flow.**

</div>

## Overview

**Wave Login** is a simple front-end login form with an animated twist. When the email or password field receives focus, its label rises one letter at a time, creating a wave effect above the input.

The project combines a clean form layout with a small, focused interaction—an opportunity to practice semantic HTML, CSS transitions, and JavaScript DOM manipulation.

> **Project status:** Planned build. This README describes the intended behavior and suggested structure; implementation files are not included here.

## The Wave Effect

```text
       E m a i l
       ↑ ↑ ↑ ↑ ↑
       Letters rise in sequence
   ────────────────────────────
           Email input
```

| Field state | Intended label behavior |
| --- | --- |
| **Empty and unfocused** | The label rests inside the field area. |
| **Focused** | Letters rise with staggered delays. |
| **Contains text** | The label stays raised so the value remains readable. |
| **Cleared and unfocused** | The label returns to its resting position. |
| **Reduced motion enabled** | The label changes position without the wave animation. |

The password label follows the same pattern. Keep populated labels raised even when an email value is invalid or a password does not meet a validation rule.

## Planned Features

- ≋ **Wave-effect labels** for both email and password fields.
- ✨ **Staggered letter transitions** with adjustable timing and easing.
- 🎨 **Centered form card** with a clean, customizable theme.
- 📱 **Responsive sizing** for mobile and desktop screens.
- ⌨️ **Keyboard-friendly inputs** and visible focus states.
- ♿ **Accessible labels** and reduced-motion support.
- 📝 **Basic form feedback** for empty or invalid fields.

## Built With

| Technology | Role |
| --- | --- |
| **HTML** | Form structure, associated labels, email input, and password input. |
| **CSS** | Card styling, input states, transforms, and staggered transitions. |
| **JavaScript** | Preparing label letters, assigning delays, and updating field states. |

The intended core build uses browser-native features without a front-end framework.

## How It Works

1. HTML defines the form with an email field, password field, and submit button.
2. JavaScript wraps each label's visual letters in spans and assigns increasing transition delays.
3. Focusing a field activates the raised-label state.
4. CSS moves each letter upward in sequence to create the wave.
5. The label stays raised while the input contains a value, including values inserted by autofill.

Keep a coherent accessible name for each field when splitting visual text into letters. Each label should remain associated with its input through matching `for` and `id` attributes.

## Suggested Project Structure

```text
wave-login/
├── index.html          # Login form and field labels
├── style.css           # Form layout and wave transitions
├── script.js           # Label preparation and field states
├── LICENSE.md
└── README.md
```

## Getting Started

Once the implementation files have been created:

1. Download or clone the project.
2. Open the project folder in your preferred editor.
3. Open `index.html` in a modern browser.
4. Click or tab into the email and password fields to see the wave effect.
5. Enter text, move between fields, and clear them to check the label states.

Use a local development server if the implementation introduces JavaScript modules or fetched resources.

## Customization

| Setting | What it changes |
| --- | --- |
| **Letter delay** | The interval between each letter's movement. |
| **Wave duration** | How long each letter takes to reach its new position. |
| **Lift distance** | How far the label rises above the input. |
| **Easing** | The feel of the movement, from subtle to springy. |
| **Theme colors** | Background, form card, input borders, labels, and button. |
| **Typography** | Label weight, input size, and heading style. |

### Example Wave Timing

```js
// Illustrative timing for the label letters.
letters.forEach((letter, index) => {
  letter.style.transitionDelay = `${index * 40}ms`;
});
```

Each successive letter starts slightly later than the previous one. Use CSS transforms for the movement and keep the total delay short enough that the form feels responsive.

## Form Scope

This project focuses on the login interface and animation. Real account authentication requires a separate backend or authentication service. Define submission behavior during implementation; a front-end demo should clearly identify simulated results.

Use `type="email"` for the email field, `type="password"` for the password field, and appropriate autocomplete attributes. Keep passwords out of browser storage, console logs, and source files.

## Build Checklist

- [ ] Create properly associated email and password labels.
- [ ] Add staggered letter transitions to both labels.
- [ ] Activate the wave on keyboard focus and pointer interaction.
- [ ] Keep labels raised whenever their fields contain text.
- [ ] Handle autofilled and prefilled values on initial load.
- [ ] Keep invalid values readable beneath raised labels.
- [ ] Provide useful validation feedback without relying on color alone.
- [ ] Respect reduced-motion preferences.
- [ ] Keep labels and inputs usable when JavaScript is unavailable.
- [ ] Check screen-reader names and visible keyboard focus.
- [ ] Test narrow screens and enlarged text.
- [ ] Document whether submission is simulated or connected to authentication.
- [ ] Add a screenshot and live demo link when available.

## Contributing

Suggestions and improvements are welcome. Keep changes focused, explain the behavior they improve, and include steps to check the result. A screenshot or short recording helps demonstrate animation changes.

## License

Unless otherwise noted, the original code, documentation, and assets in **Wave Login** are licensed under the **Creative Commons Attribution 4.0 International License (CC BY 4.0)**.

You may share and adapt the material, including commercially, under the license terms. Give appropriate credit, provide a link to the license, and indicate whether changes were made. Third-party materials remain subject to their respective licenses.

See the [license notice](LICENSE.md), [license summary](https://creativecommons.org/licenses/by/4.0/), and [full legal terms](https://creativecommons.org/licenses/by/4.0/legalcode.en).

---

<div align="center">

**Small details make an interface feel alive.**

HTML · CSS · JavaScript

</div>
