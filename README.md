# Octagon Solutions — Website

The bilingual (Portuguese-BR / English) marketing site for **Octagon Solutions** —
a Brazilian strategy, legal and institutional-relations consultancy that enables
companies to sell to the Brazilian government.

Built as a **plain static site**: semantic HTML5 + modern CSS + vanilla JavaScript.
**No framework, no build step.** Layout follows the approved standalone design.
Deploys to **Firebase Hosting**.

---

## File structure

```
/index.html          → the whole single page (all sections)
/css/styles.css       → styles, with brand colour/type tokens at the top
/js/main.js           → language toggle, sticky header, mobile menu, scroll-reveal
/js/i18n.js           → the PT/EN dictionary (every visible string)
/assets/              → logo.svg + favicon.ico
/404.html             → branded not-found page
/firebase.json        → Firebase Hosting config
/.firebaserc          → Firebase project id
/Design/              → brand source files (not deployed)
/README.md            → this file
```

---

## 1. Preview locally

Run a tiny local server from the project folder (so paths resolve correctly).
Pick whichever you have:

```bash
# Python 3 (already on macOS)
python3 -m http.server 8080

# …or Node
npx serve .

# …or the Firebase emulator (closest to production)
firebase emulators:start --only hosting
```

Then open **http://localhost:8080** (or the port the tool prints). Opening
`index.html` by double-clicking also works for a quick look.

**Quick checks while previewing**
- Click **PT | EN** in the header — every string switches and your choice is
  remembered on reload (stored in `localStorage`). First-time visitors with an
  English browser see English automatically; everyone else gets Portuguese.
- Resize the window to 375 / 768 / 1440px — no horizontal scrolling.
- Sections fade/slide in as you scroll (disabled automatically if the OS is set
  to "reduce motion").

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
#    If your project id is different, edit .firebaserc or run: firebase use --add

# 4. Deploy
firebase deploy --only hosting
```

The CLI prints your live **Hosting URL** when it finishes.

> A GitHub Action in `.github/workflows/` also deploys automatically on every
> push to `main`.

---

## 3. What to change later

- **Logo vector** — the real brand mark (from `Design/Group 54.svg`, construction
  lines removed) lives in `assets/logo.svg` and is inlined in `index.html`
  (header, hero, founder, footer) and `404.html`. To swap it, search for the
  `<path d="M2430.68` mark and replace those blocks. To refresh the favicon from a
  new `logo.svg`: `rsvg-convert -w 32 -h 32 assets/logo.svg -o /tmp/f32.png &&
  rsvg-convert -w 16 -h 16 assets/logo.svg -o /tmp/f16.png && magick /tmp/f32.png
  /tmp/f16.png assets/favicon.ico` (needs `librsvg` + ImageMagick).
- **Fonts** — Google Fonts **Archivo** (headings) + **Cormorant** (institutional
  details). To swap, change the `<link>` in `index.html` and the `--sans` /
  `--serif` variables at the top of `css/styles.css`.
- **Custom domain** — point `octagon.solutions` at Firebase Hosting via
  Firebase Console → Hosting → *Add custom domain*.
- **Analytics** — the page includes a Google tag (`G-JXZ45PVSKP`). Remove the
  `gtag` block in `<head>` of `index.html` if you don't want analytics.

> **Note:** this build intentionally has **no PWA** (no service worker / manifest)
> and **no SEO structured data** (no JSON-LD / Open Graph), to match the approved
> design. If you later want installability/offline or richer search/social
> previews, those can be re-added.

---

## Editing copy

All visible text lives in **`js/i18n.js`** as a `{ pt: {...}, en: {...} }` dictionary.
Each text node in `index.html` has a `data-i18n="some.key"` attribute pointing at it.
To change wording, edit the value in `i18n.js` for **both** languages — keep them in
sync so the toggle never shows a gap.
