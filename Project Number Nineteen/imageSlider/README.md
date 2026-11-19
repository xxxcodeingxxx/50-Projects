<div align="center">

<img src="favicon.svg" alt="FocalFlow icon" width="88" height="88" />

# FocalFlow

### One image. Two layers. Perfect harmony.

A cinematic image slider with a crisp foreground and a softly blurred echo behind it — built with **HTML, CSS, and JavaScript**.

![HTML5](https://img.shields.io/badge/HTML5-Structure-e34f26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Atmosphere-1572b6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Motion-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
[![Creative Commons](https://img.shields.io/badge/Creative_Commons-BY_4.0-a78bfa?style=for-the-badge&logo=creativecommons&logoColor=white)](https://creativecommons.org/licenses/by/4.0/)

**Sharp at the center · Soft at the edges · In sync throughout**

[The concept](#the-concept) · [Visual blueprint](#visual-blueprint) · [Getting started](#getting-started) · [Credits](#credits--license)

</div>

---

## The concept

Let every photograph set the mood.

FocalFlow pairs a focused image with a matching, slightly blurred background. Both layers share the same image, center point, and visual geometry, so the background feels like an extension of the photograph. When a slide changes, the entire scene changes with it.

> **Project status:** In development. This package contains the README, favicon, and attribution templates. The slider application is still to be built; the behavior below describes its intended design.

## The experience

| Layer | Purpose | Intended treatment |
| :--- | :--- | :--- |
| Foreground | Keep the photograph clear | Sharp, centered, and visually dominant |
| Background | Carry the photograph into the scene | Same image, lightly blurred and gently dimmed |
| Navigation | Move between moments | Previous/next buttons and an active-slide indicator |
| Motion | Make each change feel connected | Coordinated transitions across both layers |
| Layout | Keep the composition consistent | Shared center, dimensions, crop, and focal point |

### Planned finishing touches

- Responsive framing that works from phones to desktops.
- Keyboard navigation with left and right arrow keys.
- Clearly labeled controls and a visible focus state.
- Descriptive alternative text on the foreground image.
- A decorative background that stays hidden from assistive technology.
- Reduced-motion support for viewers who prefer gentler transitions.

## Visual blueprint

**Perfect alignment starts with one coordinate system.**

For literal alignment, place two copies of the image inside the same positioned frame. Give both copies identical dimensions, `object-fit`, and `object-position`. Blur only the rear copy. A small shared inset creates room for the blur to soften the background perimeter without enlarging or shifting that layer.

```html
<div class="slide-frame">
  <img class="slide-image slide-image--backdrop"
       src="images/slide-01.jpg" alt="" aria-hidden="true">
  <img class="slide-image slide-image--foreground"
       src="images/slide-01.jpg" alt="Describe this photograph.">
</div>
```

```css
.slide-frame {
  position: relative;
  isolation: isolate;
  width: min(90vw, 960px);
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 24px;
  background: #101426;
}

.slide-image {
  position: absolute;
  inset: 12px;
  width: calc(100% - 24px);
  height: calc(100% - 24px);
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 16px;
}

.slide-image--backdrop {
  z-index: 0;
  filter: blur(8px) brightness(0.8);
  pointer-events: none;
}

.slide-image--foreground {
  z-index: 1;
}
```

The matching image rectangles stay registered; blur diffuses the rear layer into the surrounding inset. Increasing only the background's scale or changing its crop will make image details diverge. A full-screen background behind a smaller foreground can share a center, but will not have pixel-for-pixel alignment.

**Keep slide changes synchronized:** use one active-slide index for both layers. Preload and decode the next image before revealing it, then transition the foreground and background as one paired slide. This prevents one layer from showing a different photograph during navigation.

## Suggested project structure

```text
focalflow/
├── index.html          # Slider markup and controls — to create
├── style.css           # Shared layout, blur, and transitions — to create
├── script.js           # Active slide and navigation — to create
├── images/             # Your licensed photographs — to add
├── favicon.svg         # Included custom icon
├── README.md           # Included project documentation
├── ATTRIBUTION.md      # Included credit templates
└── LICENSE.md          # Included CC BY 4.0 notice
```

## Getting started

1. Copy the included files into your project folder.
2. Create `index.html`, `style.css`, and `script.js` using the structure above.
3. Add photographs you own or have permission to use, and record their credits in `ATTRIBUTION.md`.
4. Add the favicon inside your HTML `<head>`:

   ```html
   <link rel="icon" type="image/svg+xml" href="favicon.svg">
   <meta name="theme-color" content="#101426">
   ```

5. Open `index.html` in a browser once the application files exist. If your implementation loads data with `fetch()` or uses modules that require a server, preview it through a local development server.

## Make it yours

| Detail | Starting direction |
| :--- | :--- |
| Palette | Midnight navy, electric cyan, and soft violet |
| Blur | Start at `8px`; adjust to suit the photograph |
| Focal point | Change both layers' `object-position` together |
| Framing | Change both image rectangles together |
| Timing | Use one duration and easing for each paired slide |
| Identity | Replace FocalFlow with your own project name if desired |

## Before the first release

- [ ] Both layers show the same slide throughout navigation.
- [ ] Image details line up at mobile, tablet, and desktop sizes.
- [ ] Rapid navigation does not reveal stale images.
- [ ] Every control works with a keyboard and has a useful label.
- [ ] Reduced-motion preferences are respected.
- [ ] Image credits and creator placeholders are complete.
- [ ] Images are appropriately compressed for the web.

## Credits & license

**Creator:** [Your name or organization]  
**Project:** [Your repository or website URL]

Original documentation and the included favicon are offered under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/). See [LICENSE.md](LICENSE.md) and [ATTRIBUTION.md](ATTRIBUTION.md) for scope and credit templates. Third-party photographs keep their own licenses. Application source code is outside this notice; select its license separately when you add it.

---

<div align="center">

**FocalFlow** · A little focus. A little atmosphere. A whole new perspective.

</div>
