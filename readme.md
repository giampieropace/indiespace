# NoBS - No Build Steps

This is an experiment aimed at building a website without build steps, SSG, or complex workflows.

The idea is simple: drop static `.html` and `.md` files into a folder and have them served as-is — no bundlers, no frameworks, no `npm run build`. Everything is rendered client-side at zero cost.

## How it works

- **Plain HTML pages** — the site is just a collection of `.html` files served directly by the web server.
- **[HTMX](https://htmx.org/)** — loads reusable components (header, footer) and site data dynamically without a SPA framework.
- **[md-block](https://md-block.vercel.app/)** — renders markdown content (`.md` files) directly in the browser with no preprocessing.
- **[Pico CSS](https://picocss.com/)** — lightweight, classless CSS for sensible default styling.
- **JSON Feed** — a `feed.json` file acts as the content index so the homepage can list and link to all posts.

## Folder structure

```
├── index.html          # Homepage
├── 404.html            # Custom 404 page
├── feed.json           # JSON Feed listing all posts
├── components/         # Reusable HTML snippets
│   ├── header.html
│   └── footer.html
├── posts/              # Content (markdown + HTML)
│   └── 2026-05-20_markdown-syntax/
│       └── index-html
│       └── content.md
├── data/
│   └── sitedata.json   # Site-wide configuration
├── assets/
│   ├── css/            # Stylesheets (Pico + custom)
│   └── js/             # HTMX, md-block, main.js, etc.
│   └── img/            # Site-wide used images
└── archetypes/         # Post templates ready to copy/paste
    └── _blog-post/
        └── index.html
        └── content.md
    └── _single-page/
        └── index.html
        └── content.md
```

## Running locally

Serve the root directory with [**VSCode live server extension**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or any static file server:

```bash
php -S localhost:8000
# or
python3 -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

No build step. No configuration. Just serve and go.
