/* =============================================================================
   main.js — behaviour for the Octagon Solutions site
   -----------------------------------------------------------------------------
     • Bilingual toggle (PT default / EN), persisted in localStorage,
       honouring navigator.language on first visit
     • Localised, pre-filled WhatsApp + email links
     • Sticky-header condense on scroll
     • Mobile menu open/close
     • Scroll-reveal animations (reduced-motion safe, progressive enhancement)
   No framework, no build step. Runs after DOM parse (script is `defer`red).
   ========================================================================== */

(function () {
  "use strict";

  /* ----- Constants ----- */
  const STORAGE_KEY = "octagon-lang";
  const DEFAULT_LANG = "pt";
  const SUPPORTED = ["pt", "en"];
  const WHATSAPP_NUMBER = "553298071878"; // international format, no symbols
  const CONTACT_EMAIL = "vitor@octagon.solutions";
  const SCROLL_CONDENSE_AT = 36; // px scrolled before the header condenses

  const dict = window.I18N;
  if (!dict) {
    console.error("I18N dictionary not found — check that js/i18n.js loads before js/main.js");
    return;
  }

  /* ---------------------------------------------------------------------------
     LANGUAGE
  --------------------------------------------------------------------------- */

  // stored choice → browser language → default
  function resolveInitialLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    if ((navigator.language || "").toLowerCase().startsWith("en")) return "en";
    return DEFAULT_LANG;
  }

  function applyLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    const strings = dict[lang];

    // 1. Swap every element carrying a data-i18n key.
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = strings[el.getAttribute("data-i18n")];
      if (value === undefined) return;
      const attr = el.getAttribute("data-i18n-attr");
      if (attr) el.setAttribute(attr, value);
      else el.textContent = value;
    });

    // 2. Update <html lang> for accessibility + SEO.
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

    // 3. Highlight the active option in the toggle (gold `.on`).
    document.querySelectorAll(".lang [data-lang]").forEach((opt) => {
      opt.classList.toggle("on", opt.getAttribute("data-lang") === lang);
    });

    // 4. Rebuild the localised contact links.
    updateContactLinks(strings);

    // 5. Persist.
    localStorage.setItem(STORAGE_KEY, lang);
  }

  // WhatsApp + mailto links with a friendly, language-specific message.
  function updateContactLinks(strings) {
    const waText = encodeURIComponent(strings["wa.message"] || "");
    const subject = encodeURIComponent(strings["email.subject"] || "");
    const wa = document.getElementById("cta-whatsapp");
    const email = document.getElementById("cta-email");
    if (wa) wa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;
    if (email) email.href = `mailto:${CONTACT_EMAIL}?subject=${subject}`;
  }

  function initLangToggle() {
    const toggle = document.getElementById("lang");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const current = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
      applyLanguage(current === "pt" ? "en" : "pt");
    });
  }

  /* ---------------------------------------------------------------------------
     HEADER + MOBILE NAV
  --------------------------------------------------------------------------- */

  function initHeader() {
    const header = document.getElementById("header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > SCROLL_CONDENSE_AT);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileNav() {
    const burger = document.getElementById("burger");
    const mobile = document.getElementById("mobile");
    if (!burger || !mobile) return;

    const close = () => {
      mobile.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    };

    burger.addEventListener("click", () => {
      const open = mobile.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    // Close after tapping a link.
    mobile.addEventListener("click", (e) => {
      if (e.target.tagName === "A") close();
    });
    // Close on Escape.
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* ---------------------------------------------------------------------------
     SCROLL REVEAL — progressive enhancement, reduced-motion safe.
     Content is visible by default; we only opt into the hidden start-state
     (body.anim) when motion is allowed, then reveal on scroll / on load.
  --------------------------------------------------------------------------- */

  function initReveal() {
    if (!matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    document.body.classList.add("anim");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) el.classList.add("in"); // already in view
      else io.observe(el);
    });
  }

  /* ---------------------------------------------------------------------------
     MISC
  --------------------------------------------------------------------------- */

  function setCopyrightYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ----- Init ----- */
  applyLanguage(resolveInitialLang());
  initLangToggle();
  initHeader();
  initMobileNav();
  initReveal();
  setCopyrightYear();
})();
