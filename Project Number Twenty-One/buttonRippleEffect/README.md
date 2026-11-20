<div align="center">
  <img src="./icons/favicon.svg" width="104" height="104" alt="Ripple Button emblem">
  <h1>Ripple Button</h1>
  <p><strong>Every ripple starts where you click.</strong></p>
  <p><code>HTML</code> · <code>CSS</code> · <code>JavaScript</code> · <code>CC BY 4.0 artwork</code></p>
</div>

---

Click near a corner and the ripple starts there. Click in the center and it expands evenly. The effect gives immediate visual feedback without moving the button or its label.

## How it works

| Step             | What happens                                                                                                           |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------- |
| Find the origin  | JavaScript subtracts the button’s bounding rectangle from the click coordinates to locate the click inside the button. |
| Size the ripple  | Measure from the origin to the farthest corner so the ripple can reach every edge.                                     |
| Animate and clip | CSS scales and fades the ripple while the button clips it to its edges.                                                |
| Clean up         | Remove the temporary ripple element after the animation finishes.                                                      |

For keyboard activation, use the button’s center as the ripple origin. Use a native `<button>` to retain keyboard activation and focus behavior.

## Try it locally

Once your page is in place, open `index.html` in a browser. Click the center and then a corner to compare the ripple origins.

## Add the favicon

Place both icon files beside `index.html` and add these lines inside `<head>`:

```html
<link rel="icon" href="./favicon.ico" sizes="16x16 32x32 48x48 64x64" />
<link rel="icon" href="./favicon.svg" type="image/svg+xml" sizes="any" />
```

## Creative Commons attribution

The **Ripple Button** README and original favicon artwork are licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/). Suggested credit:

> Ripple Button README and favicon, created for John Downs with OpenAI assistance, licensed under CC BY 4.0.

When reusing, link to the original where available and indicate any changes. Application source code can carry its own license.
