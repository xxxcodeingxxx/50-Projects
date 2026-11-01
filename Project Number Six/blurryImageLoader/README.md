<div align="center">

# ◌ Blurry Image Loader

### From a little mystery to the full picture.

A visual loading experience built with **HTML, CSS, and JavaScript**: a blurred image, a centered counter, and a clear reveal at **100%**.

![HTML](https://img.shields.io/badge/HTML-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Style-663399?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interaction-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Planned-06B6D4?style=for-the-badge)
![License](https://img.shields.io/badge/License-CC_BY_4.0-22C55E?style=for-the-badge)

[Overview](#overview) · [The Experience](#the-experience) · [Getting Started](#getting-started) · [Customization](#customization) · [License](#license)

---

**Blur. Count. Reveal.**

</div>

## Overview

**Blurry Image Loader** is a planned front-end project that transforms an image loading screen into a simple visual reveal.

The image begins blurred, with a percentage counter positioned in the center of the screen. As progress moves from **0% to 100%**, the blur decreases. When the image is ready and the reveal reaches completion, the picture becomes fully clear and the counter fades away.

> **Project status:** Planned build. This README describes the intended behavior; implementation files are not included yet.

## The Experience

```text
       0%                 50%                100%
   Heavy blur        Partial clarity       Clear image
       └──────────────────┴──────────────────┘
                 One smooth reveal
```

| Stage | Image | Counter |
| --- | --- | --- |
| **Start** | Strong blur conceals the details. | **0%**, centered and readable. |
| **Progress** | Blur gradually decreases. | Advances toward **100%**. |
| **Complete** | Loaded image is fully clear. | Reaches **100%**, then fades out. |
| **Error** | A fallback background remains visible. | A helpful message replaces the counter. |

## Planned Features

- 🖼️ **Full-screen image** with responsive, cover-style framing.
- 🔢 **Centered counter** progressing from 0% to 100%.
- 🌫️ **Blur-to-clear transition** synchronized with the reveal progress.
- ✨ **Counter fade-out** after completion.
- 📱 **Responsive presentation** for phones, tablets, and desktops.
- ♿ **Reduced-motion support** and readable loading feedback.
- 🛟 **Image error handling** so a failed request does not leave a permanent loader.

## Understanding the Counter

The initial implementation can use a **timed reveal counter**, with the image's load event controlling when completion is allowed. The counter should remain below 100% until the image has loaded successfully; if it loads early, the reveal can continue smoothly to its finish.

This approach represents **visual reveal progress**, not measured download progress. A standard image load event indicates completion but does not provide intermediate download percentages. Actual byte-based progress would require a separate loading approach and server support.

## Built With

| Technology | Purpose |
| --- | --- |
| **HTML** | Image container, percentage text, and loading status. |
| **CSS** | Full-screen layout, blur filter, typography, and opacity. |
| **JavaScript** | Progress updates, load/error handling, and completion behavior. |

## Suggested Project Structure

```text
blurry-image-loader/
├── index.html          # Image and centered loading counter
├── style.css           # Layout, blur, and transitions
├── script.js           # Progress and image-loading logic
├── assets/
│   └── background.jpg  # Your chosen image
├── LICENSE.md
└── README.md
```

## Getting Started

Once the implementation files are created:

1. Download or clone the project.
2. Place your chosen image in the `assets` folder.
3. Point the image source in `index.html` to that file.
4. Open `index.html` in a modern browser to preview the effect.
5. Reload the page to experience the reveal again.

If the implementation uses JavaScript modules or fetches image data, run it through a local development server and document any additional requirements.

## Customization

Make the reveal fit your own design:

| Setting | What it changes |
| --- | --- |
| **Image source** | The photograph or artwork being revealed. |
| **Starting blur** | How much detail is hidden at the beginning. |
| **Reveal duration** | How quickly the visual counter advances. |
| **Counter style** | Font, size, color, and contrast. |
| **Fade duration** | How quickly the counter disappears after 100%. |
| **Image position** | Which part of the image stays visible on smaller screens. |

### Reveal Logic

The intended relationship between progress and styling is:

```js
// Illustrative math; connect this to the loader during implementation.
const progress = Math.min(100, Math.max(0, percentage));
const blur = maximumBlur * (1 - progress / 100);
```

At **0%**, the image receives the maximum blur. At **50%**, half remains. At **100%**, the blur reaches zero. Keep the counter visible long enough to show 100% before fading it out.

## Build Checklist

- [ ] Start the counter at 0% and apply the initial blur.
- [ ] Center the counter on both axes.
- [ ] Update the counter and blur together without exceeding 100%.
- [ ] Wait for successful image loading before completing the reveal.
- [ ] Handle images that are already cached.
- [ ] Show 100% before fading out the counter.
- [ ] Show a useful fallback if the image fails to load.
- [ ] Keep the counter readable over light and dark image areas.
- [ ] Prevent blurred image edges from exposing gaps around the screen.
- [ ] Respect reduced-motion preferences with a shortened or static reveal.
- [ ] Provide accessible status updates without announcing every percentage.
- [ ] Check slow loading, narrow screens, and repeated page reloads.

## Image Credits

Use an image you created or have permission to use. Add its creator, source link, and license here when selecting the final asset. External images retain their own license terms.

## License

Unless otherwise noted, the original code, documentation, and assets in **Blurry Image Loader** are licensed under the **Creative Commons Attribution 4.0 International License (CC BY 4.0)**.

You may share and adapt the material, including commercially, under the license terms. Give appropriate credit, link to the license, and indicate whether changes were made. Third-party materials remain subject to their respective licenses.

See the [license notice](LICENSE.md), [license summary](https://creativecommons.org/licenses/by/4.0/), and [full legal terms](https://creativecommons.org/licenses/by/4.0/legalcode.en).

---

<div align="center">

**Every detail comes into focus.**

HTML · CSS · JavaScript

</div>
