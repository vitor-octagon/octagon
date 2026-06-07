/* =============================================================================
   service-worker.js — Octagon Solutions PWA
   -----------------------------------------------------------------------------
   Strategy:
     • Pre-cache the app shell on install so the site works offline.
     • Page navigations (HTML): NETWORK-FIRST — always try the network so visitors
       get fresh content after a deploy; fall back to the cached page when offline.
     • Static assets (css/js/img/fonts): CACHE-FIRST — fast, and refreshed in the
       background so the next load picks up changes (stale-while-revalidate).
   Bump CACHE_VERSION whenever you change cached assets to invalidate old caches.
   ========================================================================== */

const CACHE_VERSION = "octagon-v2";

// The app shell: everything needed to render the page offline.
const APP_SHELL = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/main.js",
  "./js/i18n.js",
  "./manifest.json",
  "./assets/logo.svg",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/favicon.ico",
  "./assets/apple-touch-icon.png",
];

// Install: pre-cache the shell.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// Activate: drop old caches.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch router.
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle same-origin GET; let the browser deal with the rest.
  if (request.method !== "GET") return;
  if (new URL(request.url).origin !== self.location.origin) return;

  // Page navigations → network-first (fresh content), cached fallback offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((c) => c || caches.match("./index.html")))
    );
    return;
  }

  // Static assets → cache-first, refreshed in the background.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => undefined);
      return cached || network;
    })
  );
});
