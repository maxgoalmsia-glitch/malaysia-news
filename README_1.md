# Maxgoalasia

A production-ready, static **Malaysian sports news portal**. Built with pure **HTML + CSS + Vanilla JavaScript** — no frameworks, no build step. Ready to deploy directly to **GitHub Pages**.

The site is intentionally a clean, legitimate sports news portal covering football, basketball, badminton, motorsports and local Malaysian sport. It contains **no gambling, betting, casino, crypto, financial-investment, or affiliate content**.

## Structure

```
white-landing-v1/
├── index.html          Home
├── about.html          About the portal
├── contact.html        Contact form + details
├── privacy.html        Privacy Policy
├── terms.html          Terms of Service
├── disclaimer.html     Disclaimer
├── 404.html            Friendly not-found page
├── assets/             (reserved for extra assets)
├── css/
│   ├── style.css       Readable source stylesheet (edit this)
│   └── style.min.css   Minified stylesheet (served by the pages)
├── js/
│   ├── script.js       Readable source script (edit this)
│   └── script.min.js   Minified script (served by the pages)
├── images/             Logo, favicon, PWA/apple icons and section images
├── .nojekyll           Tells GitHub Pages to serve files as-is
├── robots.txt
├── sitemap.xml
├── manifest.json       PWA web app manifest (relative paths)
└── README.md
```

> The HTML pages load `css/style.min.css` and `js/script.min.js`. Edit the readable
> `style.css` / `script.js` sources, then regenerate the minified versions before deploying.

## Deploy to GitHub Pages

1. Create a new GitHub repository and upload the **contents** of `white-landing-v1/` to the repository root (so `index.html` is at the top level).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then **Save**.
4. Your site publishes at `https://<username>.github.io/<repo>/` within a minute or two.

### Using a custom domain (optional)
Add a file named `CNAME` containing your domain (e.g. `maxgoalasia.org`) and configure DNS. Then update the absolute URLs referenced below.

## Before going live — replace placeholders

Search and replace these across the HTML, `sitemap.xml` and `robots.txt`:

- `https://maxgoalasia.org` → your real domain (used in canonical, Open Graph, Twitter, structured data, sitemap).
- Contact details in `contact.html` (address, email, phone) — currently placeholders.
- The images in `/images/` are lightweight generated placeholders. Swap them for your own royalty-free photos (e.g. from Unsplash or Pexels) keeping the same filenames, or update the `src` / CSS references.

## Features

- **SEO**: unique meta title & description per page, canonical tags, Open Graph, Twitter Cards, JSON-LD structured data, `robots.txt`, `sitemap.xml`.
- **Performance**: minifiable single CSS file, deferred JS, `loading="lazy"` on non-critical images, system-safe Inter font stack. Targets Lighthouse 95+.
- **Accessibility**: semantic HTML5 landmarks, skip link, ARIA labels, keyboard-navigable menu, visible focus styles, descriptive alt text, `prefers-reduced-motion` support.
- **Responsive**: mobile-first, max width 1200px, sticky header, animated hamburger menu, rounded cards with smooth hover.

## Tech notes

The contact and newsletter forms are **front-end only** (no backend). They validate input and show a confirmation message. To collect real submissions, connect a form endpoint (e.g. Formspree, Basin, or your own API) in `js/script.js`.

## License

You own the content and generated assets in this project. Replace placeholder imagery with assets you are licensed to use before publishing.
