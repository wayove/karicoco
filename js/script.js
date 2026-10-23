(() => {
  "use strict";

  /* ---------- Footer copyright year ---------- */
  const copyYear = document.getElementById("copyYear");
  if (copyYear) copyYear.textContent = String(new Date().getFullYear());

  /* ---------- Sticky header ---------- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  const closeNav = () => {
    mainNav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Plain nav links close the mobile panel. The "The Range" dropdown toggle
  // is handled separately below since on mobile it expands a submenu
  // in-place instead of navigating straight away.
  mainNav.querySelectorAll(".nav-link:not(#rangeDropdownToggle)").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
  mainNav.querySelectorAll(".nav-dropdown-menu a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  /* ---------- "The Range" dropdown ----------
     Desktop: CSS handles open-on-hover. We still support click/keyboard.
     Mobile (<960px): tapping the label expands the submenu in place
     rather than navigating immediately, since there's no hover there. */
  const rangeDropdown = document.getElementById("rangeDropdown");
  const rangeDropdownToggle = document.getElementById("rangeDropdownToggle");
  const isMobileNav = () => window.matchMedia("(max-width: 959px)").matches;

  if (rangeDropdown && rangeDropdownToggle) {
    rangeDropdownToggle.addEventListener("click", (e) => {
      if (isMobileNav()) {
        e.preventDefault();
        rangeDropdown.classList.toggle("is-open");
      }
    });
  }

  /* ---------- Hero video: respect reduced-motion preference ---------- */
  const heroVideo = document.getElementById("heroVideo");
  if (heroVideo && window.matchMedia) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncHeroVideo = () => {
      if (reduceMotion.matches) {
        heroVideo.pause(); // poster frame stays visible
      } else {
        const playing = heroVideo.play();
        if (playing && playing.catch) playing.catch(() => {});
      }
    };
    syncHeroVideo();
    if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", syncHeroVideo);
  }

  /* ---------- Product gallery: thumbnails swap the main image ---------- */
  const galleryMain = document.getElementById("galleryMain");
  const thumbs = document.querySelectorAll(".product-thumb");
  if (galleryMain && thumbs.length) {
    thumbs.forEach((btn) => {
      btn.addEventListener("click", () => {
        galleryMain.src = btn.getAttribute("data-src");
        galleryMain.alt = btn.getAttribute("data-alt") || galleryMain.alt;
        thumbs.forEach((b) => b.classList.toggle("is-active", b === btn));
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window) {
    revealEls.forEach((el) => {
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) el.style.setProperty("--reveal-delay", delay);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));

    // Safety net: guarantee visibility even if IO never fires for a element
    window.setTimeout(() => {
      revealEls.forEach((el) => el.classList.add("in-view"));
    }, 2500);
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  /* ---------- Partner form: reveal "Distribute" fields conditionally ---------- */
  const intentGroup = document.getElementById("pf-intent-group");
  const distributeFields = document.getElementById("pf-distribute-fields");

  if (intentGroup && distributeFields) {
    const syncDistributeFields = () => {
      const checked = intentGroup.querySelector('input[name="intent"]:checked');
      distributeFields.classList.toggle("is-visible", !!checked && checked.value === "distribute");
    };
    intentGroup.querySelectorAll('input[name="intent"]').forEach((radio) => {
      radio.addEventListener("change", syncDistributeFields);
    });
    syncDistributeFields();
  }

  /* ---------- Contact / Partner forms ----------
     No backend is wired up yet (see the note printed on each form).
     This just gives a real success state client-side so the form feels
     complete; swap the handler for a real submit once a backend exists. */
  const wireForm = (formId, successId) => {
    const form = document.getElementById(formId);
    const success = document.getElementById(successId);
    if (!form || !success) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      success.classList.add("is-visible");
      form.reset();
      success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  };
  wireForm("contactForm", "contactFormSuccess");
  wireForm("partnerForm", "partnerFormSuccess");
})();
