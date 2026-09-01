(() => {
  "use strict";

  /* =====================================================================
     KARICOCO — Language switching (English / French / Portuguese)

     NOTE ON SCOPE: this translates the shared site chrome — nav, footer,
     the language switcher itself. Page-specific content (product copy,
     category pages, About/Partner/Contact body text) is English-only for
     now, following the site's expansion to the new multi-page content —
     translating ~19 pages of new marketing/product copy into French and
     Portuguese is a substantial follow-up pass in its own right, so it's
     intentionally deferred rather than half-done here. Untranslated text
     simply stays in English when FR/PT is selected — nothing breaks.
     ===================================================================== */

  const translations = {
    en: {
      "nav.home": "Home",
      "nav.range": "The Range",
      "nav.about": "About",
      "nav.partner": "Partner With Us",
      "nav.contact": "Contact",
      "nav.toggle": "Toggle menu",
      "footer.brandline": "Complete Natural Skincare",
      "footer.attribution": "A Copaci brand. Made in C&ocirc;te d&rsquo;Ivoire since 1990.",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Use",
      "footer.cookies": "Cookie Policy"
    },
    fr: {
      "nav.home": "Accueil",
      "nav.range": "La Gamme",
      "nav.about": "&Agrave; propos",
      "nav.partner": "Devenir partenaire",
      "nav.contact": "Contact",
      "nav.toggle": "Ouvrir le menu",
      "footer.brandline": "Soins Naturels Complets",
      "footer.attribution": "Une marque Copaci. Fabriqu&eacute; en C&ocirc;te d&rsquo;Ivoire depuis 1990.",
      "footer.privacy": "Politique de confidentialit&eacute;",
      "footer.terms": "Conditions d&rsquo;utilisation",
      "footer.cookies": "Politique de cookies"
    },
    pt: {
      "nav.home": "In&iacute;cio",
      "nav.range": "A Linha",
      "nav.about": "Sobre",
      "nav.partner": "Seja Parceiro",
      "nav.contact": "Contato",
      "nav.toggle": "Abrir menu",
      "footer.brandline": "Cuidados Naturais Completos",
      "footer.attribution": "Uma marca Copaci. Fabricado na Costa do Marfim desde 1990.",
      "footer.privacy": "Pol&iacute;tica de Privacidade",
      "footer.terms": "Termos de Uso",
      "footer.cookies": "Pol&iacute;tica de Cookies"
    }
  };

  const STORAGE_KEY = "karicoco_lang";
  const DEFAULT_LANG = "en";
  const SUPPORTED = ["en", "fr", "pt"];

  function getStoredLang() {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return SUPPORTED.includes(stored) ? stored : null;
    } catch (e) {
      return null; // localStorage can throw in some privacy modes — fail quietly
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore — language switch still works for this session */
    }
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    const fallback = translations[DEFAULT_LANG];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key] ?? fallback[key];
      if (value !== undefined) el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      const value = dict[key] ?? fallback[key];
      if (value !== undefined) el.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const value = dict[key] ?? fallback[key];
      if (value !== undefined) el.setAttribute("aria-label", value);
    });

    const htmlRoot = document.getElementById("htmlRoot");
    if (htmlRoot) htmlRoot.setAttribute("lang", lang);

    document.querySelectorAll(".lang-option").forEach((opt) => {
      opt.classList.toggle("active", opt.getAttribute("data-lang") === lang);
    });

    const langCurrent = document.getElementById("langCurrent");
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();

    storeLang(lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const initialLang = getStoredLang() || DEFAULT_LANG;
    applyLanguage(initialLang);

    const langSwitch = document.getElementById("langSwitch");
    const langToggle = document.getElementById("langToggle");

    const closeMenu = () => {
      if (!langSwitch) return;
      langSwitch.classList.remove("is-open");
      if (langToggle) langToggle.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      if (!langSwitch) return;
      langSwitch.classList.add("is-open");
      if (langToggle) langToggle.setAttribute("aria-expanded", "true");
    };

    if (langToggle && langSwitch) {
      langToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = langSwitch.classList.contains("is-open");
        if (isOpen) closeMenu(); else openMenu();
      });
    }

    document.querySelectorAll(".lang-option").forEach((opt) => {
      opt.addEventListener("click", () => {
        const lang = opt.getAttribute("data-lang");
        if (SUPPORTED.includes(lang)) applyLanguage(lang);
        closeMenu();
      });
    });

    document.addEventListener("click", (e) => {
      if (langSwitch && !langSwitch.contains(e.target)) closeMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMenu();
        if (langToggle) langToggle.focus();
      }
    });
  });
})();
