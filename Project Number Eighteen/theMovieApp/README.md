<div align="center">

<img src="./icons/favicon.svg" width="96" height="96" alt="CineScope filmstrip and play icon">

# 🎬 CineScope
### Your next movie night starts here.

**Movie titles. Striking posters. Community ratings.**

A movie discovery project powered by **The Movie Database (TMDB)** and built with **HTML, CSS, and JavaScript**.

![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Style-663399?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interaction-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TMDB](https://img.shields.io/badge/TMDB-Movie_Data-01B4E4?style=for-the-badge)

[Overview](#the-premiere) · [Features](#the-feature-list) · [Setup](#lights-camera-setup) · [Credits](#credits--attribution)

</div>

---

## The premiere

CineScope brings movie discovery into a clean, visual browsing experience. Each movie card pairs a cover image with its title and TMDB community rating, making it easy to scan the collection and spot something interesting.

The goal is simple: turn live movie data into a responsive interface using the fundamentals of the web.

> **Project status: planned.** This kit includes documentation, favicon assets, and attribution files. Application HTML, CSS, and JavaScript are still to be created. The features below describe the intended build.

## The feature list

| Feature | Intended experience |
| :--- | :--- |
| 🎞️ Movie collection | Fetch a list of movies from TMDB |
| 🖼️ Cover artwork | Display each movie's poster with a missing-image fallback |
| ✍️ Movie titles | Show readable titles beneath or beside each poster |
| ⭐ Ratings | Display the TMDB community score out of 10 |
| 📱 Responsive cards | Adapt the grid to phones, tablets, and desktops |
| ⏳ Loading feedback | Make it clear when movie data is being fetched |
| 🔄 Error recovery | Explain a failed request and offer a retry |

Search, genre filters, watchlists, trailers, and pagination are optional future additions.

## The stack behind the screen

| Tool | Role |
| :--- | :--- |
| **HTML** | Semantic page layout and movie-card structure |
| **CSS** | Poster grid, colors, typography, and responsive styling |
| **JavaScript** | API requests, data handling, and dynamic card rendering |
| **TMDB API** | Movie metadata, poster paths, and community ratings |

No JavaScript framework is required.

## Lights, camera, setup

### 1. Create the application files

Use this suggested structure. The documentation and `icons/` assets are included; the app files are not.

```text
cinescope/
├── index.html           # To create: page structure
├── style.css            # To create: styles and responsive grid
├── script.js            # To create: API calls and card rendering
├── icons/
│   ├── favicon.svg      # Included: scalable, transparent icon
│   ├── favicon.ico      # Included: 16, 32, and 48 px fallback
│   └── favicon.png      # Included: transparent 256 px preview
├── README.md
├── LICENSE.md
└── ATTRIBUTION.md
```

### 2. Get TMDB API access

Create or sign in to a [TMDB account](https://www.themoviedb.org/), then request API access through your account settings. The API supports an API key or an **API Read Access Token** sent as a Bearer token. See the [official authentication guide](https://developer.themoviedb.org/docs/authentication-application).

TMDB distinguishes noncommercial developer use from commercial use. Review its [API FAQ and licensing requirements](https://developer.themoviedb.org/docs/faq) before launch.

### 3. Connect the assets

Add these lines inside your HTML `<head>`:

```html
<link rel="icon" href="./icons/favicon.ico">
<link rel="icon" href="./icons/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="./style.css">
<script src="./script.js" defer></script>
```

To display the icon inside your README:

```markdown
![CineScope favicon](./icons/favicon.svg)
```

### 4. Fetch a movie collection

The [popular-movies endpoint](https://developer.themoviedb.org/reference/movie-popular-list) is a useful starting point:

```text
GET https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
```

This example illustrates the request; it is not a complete application:

```js
async function fetchPopularMovies(readAccessToken) {
    const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        {
            headers: {
                Authorization: `Bearer ${readAccessToken}`,
                accept: 'application/json'
            }
        }
    )

    if (!response.ok) {
        throw new Error(`Movie request failed: ${response.status}`)
    }

    const data = await response.json()
    return data.results
}
```

**Credential handling:** Any token used in browser JavaScript is visible to visitors. Keep real credentials out of README examples and public commits. For a deployment that needs a private credential, send requests through a server endpoint that stores it outside the browser; a front-end environment variable does not make it private.

### 5. Build each movie card

| TMDB field | Use in the interface |
| :--- | :--- |
| `id` | Stable movie identifier |
| `title` | Movie title |
| `poster_path` | Poster image path, when available |
| `vote_average` | Community rating out of 10 |
| `vote_count` | Determine whether votes are available |

Build poster URLs from the image base URL, supported size, and returned poster path. TMDB's [image guide](https://developer.themoviedb.org/docs/image-basics) explains this structure; configuration data provides available image sizes.

```js
const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null

const rating = movie.vote_count > 0
    ? `${movie.vote_average.toFixed(1)} / 10`
    : 'Not yet rated'
```

When `posterUrl` is missing or an image fails to load, show a local placeholder or a styled “Poster unavailable” panel. Use `textContent` for API-provided text when building cards.

### 6. Preview the app

Once the app files exist, serve the folder with a local development server, such as your editor's Live Server extension, and open the local address. An internet connection and valid TMDB access are needed to load live content.

## A little cinematic style

Use a dark cinema palette, generous poster artwork, and warm accents to make the collection feel inviting.

| Color | Hex | Suggested role |
| :--- | :--- | :--- |
| Midnight | `#0F0B1A` | Page background |
| Screening room | `#1E1630` | Card surfaces |
| Spotlight violet | `#A78BFA` | Controls and highlights |
| Electric purple | `#7C3AED` | Primary accents |
| Soft gold | `#FEF3C7` | Rating highlights |
| Screen white | `#F8FAFC` | Primary text |

The included favicon combines a **filmstrip and play symbol**, with a transparent background and artwork filling the available icon space.

## Quality before the credits

- [ ] Movie titles, posters, and ratings render from a real API response.
- [ ] Scores display as TMDB community ratings out of 10.
- [ ] Movies without votes show “Not yet rated.”
- [ ] Missing or broken posters have a fallback.
- [ ] Loading, failed requests, and empty results have clear messages.
- [ ] The grid works on small and large screens.
- [ ] Buttons have visible keyboard focus and meaningful labels.
- [ ] Posters have useful alt text; ratings are readable without color alone.
- [ ] The app includes TMDB's approved logo and required credit notice.
- [ ] Creator and project URL placeholders are replaced before publication.

## Coming attractions

Possible enhancements after the core cards are working:

- Search movies by title.
- Browse genres or top-rated releases.
- Add movie overviews and release dates.
- Load more pages of results.
- Save a personal watchlist locally.

These are roadmap ideas, not implemented features.

## Credits & attribution

### Project creator

**Created by:** [Your name or organization]  
**Repository / live project:** [Your project URL]

The original README text and supplied favicon artwork are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). See [LICENSE.md](./LICENSE.md) and [ATTRIBUTION.md](./ATTRIBUTION.md) for scope and reusable credits. Replace the creator and project URL placeholders before publishing.

### Movie data and images

Movie metadata and poster images are supplied through [The Movie Database (TMDB)](https://www.themoviedb.org/).

> This product uses the TMDB API but is not endorsed or certified by TMDB.

TMDB requires an approved TMDB logo and the notice above in an About or Credits section of the application. Keep its logo less prominent than the app's own branding and follow its [attribution requirements](https://developer.themoviedb.org/docs/faq) and [approved-logo guidance](https://www.themoviedb.org/about/logos-attribution). The badge above does not replace that logo. An official TMDB logo is not bundled in this kit.

TMDB data, movie posters, third-party marks, and badge graphics are excluded from this project's Creative Commons grant. No application source code is included; choose and document its license when adding it.

---

<div align="center">

**Discover the story before you press play. 🍿**

*Made with HTML, CSS, JavaScript, and a love of movies.*

</div>
