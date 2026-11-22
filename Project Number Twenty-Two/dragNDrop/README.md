<div align="center">

<img src="./icons/favicon.svg" width="104" height="104" alt="A cyan tile moving toward a violet drop target">

# Drag & Drop

**Pick up a tile. Move it. Make it land.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-663399?style=flat-square&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-in%20development-7C3AED?style=flat-square)

[The project](#the-project) · [Run locally](#run-locally) · [Add the favicon](#add-the-favicon) · [Credits](#credits)

</div>

---

## The project

A vanilla HTML, CSS, and JavaScript playground for moving tiles between drop zones. The interaction is designed around three moments: picking up a tile, seeing where it can land, and dropping it into place.

| Interaction | Planned behavior                                                             |
| ----------- | ---------------------------------------------------------------------------- |
| **Pick up** | Grab a tile and give it a distinct dragging state.                           |
| **Move**    | Highlight a valid drop zone as the tile passes over it.                      |
| **Drop**    | Place the tile in the target zone and clear the highlight.                   |
| **Cancel**  | Return the tile to its original position if the drop is invalid or canceled. |

## Run locally

Once the project files are in place, open `index.html` in a browser. During development, use your editor’s local server if you load JavaScript modules.

| File         | Role                                             |
| ------------ | ------------------------------------------------ |
| `index.html` | Tiles, drop zones, and page structure            |
| `style.css`  | Layout, focus styles, and drag-and-drop feedback |
| `script.js`  | Drag state, drop validation, and tile movement   |

## Add the favicon

Keep both favicon files next to `index.html` and add these lines inside the page’s `<head>`.

```html
<link rel="icon" href="./favicon.ico" sizes="any" />
<link rel="icon" href="./favicon.svg" type="image/svg+xml" />
```

## Credits

Project by **John Downs**.

**Drag & Drop favicon and README** · [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

Suggested attribution for reuse: “Drag & Drop favicon” from John Downs’s Drag & Drop project, licensed under CC BY 4.0. Link to the source repository and indicate any changes. The Creative Commons notice covers the README and favicon artwork. Application code licensing is separate.
