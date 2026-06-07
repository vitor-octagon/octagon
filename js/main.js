/* =============================================================================
   main.js — behaviour for the Octagon Solutions site
   -----------------------------------------------------------------------------
   Responsibilities:
     • Bilingual toggle (PT default / EN) using the I18N dictionary
     • Persist language choice in localStorage; honour browser language on first visit
     • Build localised, pre-filled WhatsApp + email links
     • Sticky-header condense on scroll
     • Mobile nav open/close
     • Register the service worker (PWA / offline)
   No framework, no build step. Runs after DOM parse (script is `defer`red).
   ========================================================================== */

(function () {
  "use strict";

  /* ----- Constants (no magic values scattered in logic) ----- */
  const STORAGE_KEY = "octagon-lang";
  const DEFAULT_LANG = "pt";
  const SUPPORTED = ["pt", "en"];
  const WHATSAPP_NUMBER = "553298071878"; // international format, no symbols
  const CONTACT_EMAIL = "vitor@octagon.solutions";
  const SCROLL_CONDENSE_AT = 24; // px scrolled before the header condenses

  /* Guard: the dictionary must be loaded (i18n.js runs first). */
  const dict = window.I18N;
  if (!dict) {
    console.error("I18N dictionary not found — check that js/i18n.js loads before js/main.js");
    return;
  }

  /* ---------------------------------------------------------------------------
     LANGUAGE
  --------------------------------------------------------------------------- */

  // Decide the initial language: stored choice → browser language → default.
  function resolveInitialLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;

    const browser = (navigator.language || "").toLowerCase();
    if (browser.startsWith("en")) return "en";

    return DEFAULT_LANG;
  }

  // Apply a language across the whole document.
  function applyLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    const strings = dict[lang];

    // 1. Swap every element carrying a data-i18n key.
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = strings[key];
      if (value === undefined) return; // missing key: leave existing text

      const attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, value); // e.g. meta description, aria-label
      } else {
        el.textContent = value;
      }
    });

    // 2. Update <html lang> for accessibility + SEO (BCP-47 tags).
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

    // 3. Reflect the active option in the toggle UI.
    document.querySelectorAll(".lang-opt").forEach((opt) => {
      opt.classList.toggle("is-active", opt.getAttribute("data-lang") === lang);
    });

    // 4. Rebuild the localised contact links.
    updateContactLinks(strings);

    // 5. Persist the choice.
    localStorage.setItem(STORAGE_KEY, lang);
  }

  // Build WhatsApp + mailto links with a friendly, language-specific message.
  function updateContactLinks(strings) {
    const waText = encodeURIComponent(strings["wa.message"] || "");
    const subject = encodeURIComponent(strings["email.subject"] || "");

    document.querySelectorAll("#cta-whatsapp, [data-cta='whatsapp']").forEach((a) => {
      a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;
    });
    document.querySelectorAll("#cta-email, [data-cta='email']").forEach((a) => {
      a.href = `mailto:${CONTACT_EMAIL}?subject=${subject}`;
    });
  }

  /* ---------------------------------------------------------------------------
     HEADER + NAV
  --------------------------------------------------------------------------- */

  function initHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    // Condense the header once the user scrolls a little.
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > SCROLL_CONDENSE_AT);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    const close = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after picking a destination.
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));

    // Close on Escape for keyboard users.
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  function initLangToggle() {
    const toggle = document.getElementById("lang-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const current = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
      applyLanguage(current === "pt" ? "en" : "pt");
    });
  }

  /* ---------------------------------------------------------------------------
     SERVICE WORKER (PWA / offline)
  --------------------------------------------------------------------------- */

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    // Wait for load so the SW install doesn't compete with first paint.
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("service-worker.js")
        .catch((err) => console.warn("Service worker registration failed:", err));
    });
  }

  /* ---------------------------------------------------------------------------
     MISC
  --------------------------------------------------------------------------- */

  function setCopyrightYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------------------------------------------------------------------------
     INIT
  --------------------------------------------------------------------------- */

  applyLanguage(resolveInitialLang());
  initHeader();
  initMobileNav();
  initLangToggle();
  setCopyrightYear();
  registerServiceWorker();
})();
