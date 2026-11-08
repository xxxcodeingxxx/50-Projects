<div align="center">

# 😂 Dad Joke Generator
### Fresh jokes. Familiar groans.

A random dad joke generator built with **HTML, CSS, and JavaScript**, powered by **icanhazdadjoke**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-22c55e?style=for-the-badge)

**[Overview](#-overview) · [Getting Started](#-getting-started) · [API](#-api-integration) · [License](#-license)**

</div>

---

## 👋 Overview

Some jokes make you laugh. Others make you shake your head. This project aims for both.

**Dad Joke Generator** will fetch a random joke from the [icanhazdadjoke API](https://icanhazdadjoke.com/api) and display it in a custom browser interface. One button, one joke, and plenty of opportunities to say, “That was terrible. Give me another.”

> 🚧 **Status: In development.** The features and structure below describe the planned build.

## ✨ Planned Features

- 🎲 **Random jokes** fetched from icanhazdadjoke.
- 👆 **Another-joke button** for your next dose of dad humor.
- 🎨 **Custom design** created with HTML and CSS.
- 📱 **Responsive layout** for phones, tablets, and desktops.
- ⏳ **Loading feedback** while a joke is on its way.
- 🛟 **Friendly error messages** when a request fails.
- ⌨️ **Accessible controls** with keyboard support and clear focus styles.

## 🛠️ Built With

| Technology | Role |
| :--- | :--- |
| **HTML** | Page structure, joke display, and button |
| **CSS** | Styling, layout, and responsive design |
| **JavaScript** | API requests, interface updates, and interactions |
| **icanhazdadjoke API** | Random dad jokes |

## 🚀 Getting Started

Once the project files are implemented:

1. Download or clone the repository.
2. Open the project folder in your editor.
3. Serve the folder with your preferred local development server, such as your editor’s Live Server extension.
4. Open the local address provided by the server.
5. Select **Get a Dad Joke** to request a joke.

An internet connection is needed to retrieve jokes. The API requires **no authentication or API key**. See the [official API documentation](https://icanhazdadjoke.com/api).

### Suggested Folder Structure

```text
dad-joke-generator/
├── index.html          # Page structure
├── css/
│   └── style.css       # Styling and responsive layout
├── js/
│   └── script.js       # Fetch requests and interactions
├── assets/
│   └── preview.png     # Optional screenshot
└── README.md
```

## 🔌 API Integration

The project will request a random joke from:

```http
GET https://icanhazdadjoke.com/
Accept: application/json
```

The JSON response includes a joke ID, the joke text, and a status value. The `Accept` header requests JSON instead of the default HTML response.

### Example Request

This helper retrieves a joke and returns its text. Connect it to the page’s button and joke display during implementation.

```javascript
async function fetchDadJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Unable to load a joke. Please try again.');
  }

  const data = await response.json();

  if (typeof data.joke !== 'string' || !data.joke.trim()) {
    throw new Error('No joke was returned. Please try again.');
  }

  return data.joke;
}
```

When connecting this helper to the interface:

- Show a loading message and disable the button while a request is pending.
- Put returned joke text into the display using `textContent`.
- Catch errors and show a helpful retry message.
- Restore the button when the request finishes.

**API courtesy:** The provider asks clients to identify their application with a custom `User-Agent`. Browser control of that header is restricted and varies; if you add a server-side integration, configure it there with your project name and a contact or repository URL.

**[Explore the official API documentation →](https://icanhazdadjoke.com/api)**

## 🎨 Make It Your Own

**Give it a personality.** Change the colors, fonts, button text, and layout in your HTML and CSS.

**Add a little motion.** Introduce a subtle joke transition and respect reduced-motion preferences.

**Keep building.** Future additions could include a copy-joke button, saved favorites, or a joke history. These are ideas for later development.

## ✅ Build Checklist

- [ ] Create the page layout and joke display.
- [ ] Style the interface for desktop and mobile.
- [ ] Connect the random-joke API request.
- [ ] Add loading and error states.
- [ ] Prevent overlapping requests from repeated clicks.
- [ ] Make the button accessible by keyboard.
- [ ] Announce updated jokes with an appropriate live region.
- [ ] Test successful requests, failed requests, and offline behavior.
- [ ] Add a screenshot and live demo link.
- [ ] Complete the creator attribution before publishing.

## 📸 Preview

*A screenshot and live demo link will be added when the first version is ready.*

<!-- Uncomment and update when available:
![Dad Joke Generator preview](assets/preview.png)

[Try the live demo](YOUR_DEMO_URL)
-->

## 🤝 Contributing

Ideas and improvements are welcome. For bug reports, include what happened, what you expected, and the browser you used. For feature suggestions, describe how the feature would improve the experience.

## 🙌 Credits

Jokes are provided by **[icanhazdadjoke](https://icanhazdadjoke.com/)**, a service by **[C653 Labs](https://c653labs.com/)**. This project is an independent implementation.

## 📄 License

Original project materials are licensed under the **Creative Commons Attribution 4.0 International License (CC BY 4.0)**, except where otherwise noted.

You may share and adapt those materials, including commercially, provided you give appropriate credit, link to the license, and indicate whether changes were made.

**[Read the full CC BY 4.0 license →](https://creativecommons.org/licenses/by/4.0/)**

### Attribution

Before publishing, replace the bracketed fields below with the project’s actual creator and repository URL. People reusing the original project materials may use this credit:

> Dad Joke Generator by [Creator Name] ([Project URL]), licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/. Changes: [describe changes, or state “none”].

The project’s license applies to its original materials. Jokes supplied by icanhazdadjoke and any other third-party assets remain subject to their respective rights and terms; they are not relicensed by this README.

---

<div align="center">

**Built with HTML, CSS, JavaScript, and questionable punchlines.** 🥁

</div>
