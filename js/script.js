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

  mainNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = ["home", "products", "about", "contact", "franchise"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = Array.from(mainNav.querySelectorAll(".nav-link"));

  const setActive = () => {
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0];
    let bestTop = -Infinity;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      if (top <= scrollPos && top > bestTop) {
        bestTop = top;
        current = sec;
      }
    });

    // Guard for short trailing sections (e.g. the footer/"Contact Us"):
    // if it's shorter than the lookahead above, scrollPos can never reach
    // its offsetTop even at the very bottom of the page. When the user has
    // scrolled all the way down, force whichever section is physically last.
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) {
      current = sections.reduce((last, sec) => (sec.offsetTop > last.offsetTop ? sec : last), sections[0]);
    }

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
    });
  };
  setActive();
  window.addEventListener("scroll", setActive, { passive: true });

  /* ---------- Best Sellers grid: feature card spans however many
     .bs-card items sit beside it, so adding a 4th/5th product later
     needs no CSS changes — just drop in another .bs-card. ---------- */
  const bsGrid = document.querySelector(".bestsellers-grid");
  if (bsGrid) {
    const sideCount = bsGrid.querySelectorAll(".bs-card").length;
    bsGrid.style.setProperty("--bs-rows", String(Math.max(sideCount, 1)));
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
})();
