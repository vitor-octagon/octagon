# Octagon Solutions — Website

The bilingual (Portuguese-BR / English) marketing site for **Octagon Solutions** —
a Brazilian strategy, legal and institutional-relations consultancy that enables
companies to sell to the Brazilian government.

Built as a **plain static site**: semantic HTML5 + modern CSS + vanilla JavaScript.
**No framework, no build step.** It's also a **PWA** (installable, works offline) and
is configured to deploy to **Firebase Hosting**.

---

## File structure

```
/index.html          → the whole single page (all sections)
/css/styles.css       → styles, with brand colour/type tokens at the top
/js/main.js           → nav, smooth scroll, language toggle, service-worker registration
/js/i18n.js           → the PT/EN dictionary (every visible string)
/assets/              → logo.svg, PWA icons, favicon, og-image (+ the *-source.svg used to generate them)
/manifest.json        → PWA manifest
/service-worker.js    → offline caching
/404.html             → branded not-found page
/firebase.json        → Firebase Hosting config
/.firebaserc          → Firebase project id
/README.md            → this file
```

---

## 1. Preview locally

Because the PWA service worker needs a real HTTP origin (not `file://`), run a tiny
local server from the project folder. Pick whichever you have:

```bash
# Python 3 (already on macOS)
python3 -m http.server 8080

# …or Node
npx serve .

# …or the Firebase emulator (closest to production)
firebase emulators:start --only hosting
```

Then open **http://localhost:8080** (or the port the tool prints).

> Opening `index.html` directly by double-clicking also works for a quick look —
> only the offline/PWA features need the local server.

**Quick checks while previewing**
- Click **PT | EN** in the header — every string should switch and your choice is
  remembered on reload (stored in `localStorage`).
- Resize the window to 375 / 768 / 1440px — no horizontal scrolling.
- DevTools → Application → Service Workers shows it registered; toggle "Offline"
  and reload to confirm the page still loads.

---

## 2. Deploy to Firebase Hosting

You only need to do the install + login once.

```bash
# 1. Install the Firebase CLI (once)
npm install -g firebase-tools

# 2. Log in (opens a browser)
firebase login

# 3. (First time only) link this folder to your Firebase project.
#    .firebaserc already points to the project id "octagon8888".
#    If your project id is different, either edit .firebaserc or run:
#    firebase use --add

# 4. Deploy
firebase deploy --only hosting
```

The CLI prints your live **Hosting URL** when it finishes.

> A GitHub Action is already set up in `.github/workflows/` to deploy automatically
> on every push to `main`.

---

## 3. What to change later

- **Logo vector** — the real brand mark from `Design/Group 54.svg` is already in
  place: cleaned up (construction lines removed) in `assets/logo.svg` and inlined
  in `index.html` (header, hero, founder, footer) and `404.html`. To swap it again,
  search for the `<path d="M2430.68` mark and replace those blocks, then regenerate
  the icons/og-image with the commands in *"Regenerating icons"* below.
- **Fonts** — currently Google Fonts **Archivo** (headings) + **Cormorant**
  (institutional details). To swap, change the `<link>` in `index.html` and the
  `--font-sans` / `--font-serif` variables at the top of `css/styles.css`.
- **Custom domain** — point `octagon.solutions` at Firebase Hosting via
  Firebase Console → Hosting → *Add custom domain*.
- **Contact form (optional)** — there's a commented placeholder near the bottom of
  the contact section in `index.html`. To implement it properly, add a Firebase
  Cloud Function that validates input **server-side** and emails it. Keep any
  secret keys in `functions/.env` (never in frontend code).
- **Analytics** — the page includes a Google tag (`G-JXZ45PVSKP`) carried over from
  the previous build. Remove the `gtag` block in `<head>` of `index.html` if you
  don't want analytics.

### Regenerating icons (optional)

The PWA icons, favicon and social image were generated from SVG sources with
[`librsvg`](https://wiki.gnome.org/Projects/LibRsvg) and ImageMagick:

```bash
cd assets
rsvg-convert -w 192 -h 192 icon-source.svg -o icon-192.png
rsvg-convert -w 512 -h 512 icon-source.svg -o icon-512.png
rsvg-convert -w 180 -h 180 icon-source.svg -o apple-touch-icon.png
rsvg-convert -w 32  -h 32  logo.svg        -o favicon-32.png
rsvg-convert -w 16  -h 16  logo.svg        -o favicon-16.png
magick favicon-32.png favicon-16.png favicon.ico
rsvg-convert -w 1200 -h 630 og-source.svg  -o og-image.png
```

---

## Editing copy

All visible text lives in **`js/i18n.js`** as a `{ pt: {...}, en: {...} }` dictionary.
Each text node in `index.html` has a `data-i18n="some.key"` attribute pointing at it.
To change wording, edit the value in `i18n.js` for **both** languages — keep them in
sync so the toggle never shows a gap.
