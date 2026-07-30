(() => {
  "use strict";

  /* =====================================================================
     KARICOCO — Language translations (English / French / Portuguese)
     Every key referenced by a data-i18n / data-i18n-alt / data-i18n-aria
     attribute in index.php has an entry in each of the three languages
     below. To add a new string: add the attribute in the HTML, then add
     the matching key to all three objects here.
     ===================================================================== */

  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.products": "Products",
      "nav.contact": "Contact Us",
      "nav.franchise": "Franchise Enquiry",
      "nav.toggle": "Toggle menu",

      "hero.title": "Escape to the Exotic.<br>Nourish Your Skin with Karicoco.",
      "hero.subtitle": "Where tropical botanicals meet modern skincare science. Crafted for radiant, hydrated, summer-ready skin every day.",
      "hero.cta": "The Exotica Range",
      "hero.imgAlt": "Karicoco tanning oil on tropical beach",

      "escape.imgAlt": "Karicoco product lineup on the sand",
      "escape.title": "A Tropical Escape,<br>Bottled.",
      "escape.p1": "Karicoco blends the purity of coconut, the softness of natural botanicals, and the indulgence of island living.",
      "escape.p2": "Every product is thoughtfully crafted to hydrate, soothe, and elevate your everyday ritual.",
      "escape.cta": "Read Our Story",

      "range.heading": "Our Exotica Range",
      "range.card1.title": "Exotica Body Cleanser",
      "range.card1.desc": "A refreshing coconut-infused cleanse.",
      "range.card1.imgAlt": "Exotica Body Cleanser lineup",
      "range.card2.title": "Exotica Body Lotion",
      "range.card2.desc": "Silky hydration with a lightweight tropical finish.",
      "range.card2.imgAlt": "Exotica Body Lotion lineup",
      "range.card3.title": "Exotica Hand &amp; Foot Cream",
      "range.card3.desc": "Deep nourishment for soft, smooth skin.",
      "range.card3.imgAlt": "Exotica Hand & Foot Cream lineup",
      "range.card4.title": "Exotica Hair Nourish Oil &amp; Shampoo",
      "range.card4.desc": "Strength, shine, and tropical softness.",
      "range.card4.imgAlt": "Exotica Hair Nourish Oil & Shampoo lineup",
      "range.cta": "See All Products",

      "why.heading": "Why Karicoco",
      "why.item1.imgAlt": "Coconut",
      "why.item1.title": "Tropical Goodness",
      "why.item1.desc": "Derived from coconut and exotic ingredients.",
      "why.item2.imgAlt": "Water droplets",
      "why.item2.title": "Lightweight Hydration",
      "why.item2.desc": "Soft, breathable moisture your skin loves.",
      "why.item3.imgAlt": "Green leaves",
      "why.item3.title": "Clean Formulas",
      "why.item3.desc": "Derived from coconut and exotic ingredients.",
      "why.item4.imgAlt": "Tropical flower",
      "why.item4.title": "Tropical Goodness",
      "why.item4.desc": "Derived from coconut and exotic ingredients.",

      "ticker.text": "Nature&rsquo;s Best in Every Drop&nbsp;&nbsp;•&nbsp;&nbsp;",

      "ingredients.item1.imgAlt": "Coconut Extract",
      "ingredients.item1.text": "Cools and soothes<br>the skin",
      "ingredients.item2.imgAlt": "Shea Butter",
      "ingredients.item2.text": "Long-lasting<br>moisture",
      "ingredients.item3.imgAlt": "Tropical Fragrance",
      "ingredients.item3.text": "Uplifting, refreshing,<br>indulgent",

      "effect.heading": "The Karicoco Effect",
      "effect.review1.imgAlt": "Karicoco customer",
      "effect.review1.text": "&ldquo;Smells heavenly. Leaves my skin hydrated and glowing.&rdquo;",
      "effect.review1.starsAria": "5 out of 5 stars",
      "effect.review2.imgAlt": "Karicoco customer",
      "effect.review2.text": "&ldquo;The texture is luxurious. Feels like a mini vacation.&rdquo;",
      "effect.review2.starsAria": "5 out of 5 stars",
      "effect.review3.imgAlt": "Karicoco customer",
      "effect.review3.text": "&ldquo;My favourite daily ritual now!&rdquo;",
      "effect.review3.starsAria": "5 out of 5 stars",

      "bestsellers.heading": "Best Sellers",
      "bestsellers.feature.imgAlt": "Applying Karicoco sunscreen spray",
      "bestsellers.feature.title": "Sunscreen Spray",
      "bestsellers.feature.desc": "High protection, light weight sunscreen",
      "bestsellers.card1.imgAlt": "Karicoco tanning oil",
      "bestsellers.card1.title": "Tanning Oil",
      "bestsellers.card1.desc": "With carrot, coconut &amp; shea oils",
      "bestsellers.card2.imgAlt": "Karicoco pomade",
      "bestsellers.card2.title": "Pomade",
      "bestsellers.card2.desc": "With monoi, coconut oil &amp; shea butter",
      "bestsellers.cta": "Product Range",

      "finalcta.heading": "Ready for Your Tropical Glow?",
      "finalcta.cta": "Franchise Enquiry",

      "footer.country": "C&ocirc;te d&rsquo;Ivoire",

      "meta.title": "Karicoco | Escape to the Exotic",
      "meta.description": "Where tropical botanicals meet modern skincare science. Crafted for radiant, hydrated, summer-ready skin every day."
    },

    fr: {
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.products": "Produits",
      "nav.contact": "Contact",
      "nav.franchise": "Devenir franchisé",
      "nav.toggle": "Ouvrir le menu",

      "hero.title": "Évadez-vous vers l&rsquo;Exotisme.<br>Nourrissez votre peau avec Karicoco.",
      "hero.subtitle": "Là où les plantes tropicales rencontrent la science moderne du soin. Conçu pour une peau éclatante, hydratée et prête pour l&rsquo;été, chaque jour.",
      "hero.cta": "La Gamme Exotica",
      "hero.imgAlt": "Huile bronzante Karicoco sur une plage tropicale",

      "escape.imgAlt": "Gamme de produits Karicoco posée sur le sable",
      "escape.title": "Une Évasion Tropicale,<br>en Flacon.",
      "escape.p1": "Karicoco allie la pureté du coco, la douceur des plantes naturelles et la volupté de la vie insulaire.",
      "escape.p2": "Chaque produit est conçu avec soin pour hydrater, apaiser et sublimer votre rituel quotidien.",
      "escape.cta": "Découvrir notre histoire",

      "range.heading": "Notre Gamme Exotica",
      "range.card1.title": "Nettoyant Corps Exotica",
      "range.card1.desc": "Une sensation de fraîcheur infusée de coco.",
      "range.card1.imgAlt": "Gamme du Nettoyant Corps Exotica",
      "range.card2.title": "Lait Corps Exotica",
      "range.card2.desc": "Une hydratation soyeuse à la texture tropicale légère.",
      "range.card2.imgAlt": "Gamme du Lait Corps Exotica",
      "range.card3.title": "Crème Mains &amp; Pieds Exotica",
      "range.card3.desc": "Une nourriture intense pour une peau douce et lisse.",
      "range.card3.imgAlt": "Gamme de la Crème Mains & Pieds Exotica",
      "range.card4.title": "Huile &amp; Shampooing Nourrissant Exotica",
      "range.card4.desc": "Force, brillance et douceur tropicale.",
      "range.card4.imgAlt": "Gamme de l&rsquo;Huile & Shampooing Nourrissant Exotica",
      "range.cta": "Voir tous les produits",

      "why.heading": "Pourquoi Karicoco",
      "why.item1.imgAlt": "Noix de coco",
      "why.item1.title": "Bienfaits Tropicaux",
      "why.item1.desc": "Issus du coco et d&rsquo;ingrédients exotiques.",
      "why.item2.imgAlt": "Gouttes d&rsquo;eau",
      "why.item2.title": "Hydratation Légère",
      "why.item2.desc": "Une hydratation douce et respirante que votre peau adore.",
      "why.item3.imgAlt": "Feuilles vertes",
      "why.item3.title": "Formules Propres",
      "why.item3.desc": "Issus du coco et d&rsquo;ingrédients exotiques.",
      "why.item4.imgAlt": "Fleur tropicale",
      "why.item4.title": "Bienfaits Tropicaux",
      "why.item4.desc": "Issus du coco et d&rsquo;ingrédients exotiques.",

      "ticker.text": "Le Meilleur de la Nature à Chaque Goutte&nbsp;&nbsp;•&nbsp;&nbsp;",

      "ingredients.item1.imgAlt": "Extrait de coco",
      "ingredients.item1.text": "Rafraîchit et apaise<br>la peau",
      "ingredients.item2.imgAlt": "Beurre de karité",
      "ingredients.item2.text": "Hydratation<br>longue durée",
      "ingredients.item3.imgAlt": "Parfum tropical",
      "ingredients.item3.text": "Envoûtant, frais<br>et gourmand",

      "effect.heading": "L&rsquo;Effet Karicoco",
      "effect.review1.imgAlt": "Cliente Karicoco",
      "effect.review1.text": "&laquo; Une odeur divine. Ma peau est hydratée et éclatante. &raquo;",
      "effect.review1.starsAria": "5 étoiles sur 5",
      "effect.review2.imgAlt": "Cliente Karicoco",
      "effect.review2.text": "&laquo; La texture est somptueuse. On se croirait en mini-vacances. &raquo;",
      "effect.review2.starsAria": "5 étoiles sur 5",
      "effect.review3.imgAlt": "Cliente Karicoco",
      "effect.review3.text": "&laquo; Devenu mon rituel quotidien préféré ! &raquo;",
      "effect.review3.starsAria": "5 étoiles sur 5",

      "bestsellers.heading": "Meilleures Ventes",
      "bestsellers.feature.imgAlt": "Application du spray solaire Karicoco",
      "bestsellers.feature.title": "Spray Solaire",
      "bestsellers.feature.desc": "Haute protection, texture légère",
      "bestsellers.card1.imgAlt": "Huile bronzante Karicoco",
      "bestsellers.card1.title": "Huile Bronzante",
      "bestsellers.card1.desc": "À la carotte, au coco et au karité",
      "bestsellers.card2.imgAlt": "Pommade Karicoco",
      "bestsellers.card2.title": "Pommade",
      "bestsellers.card2.desc": "Au monoï, à l&rsquo;huile de coco et au karité",
      "bestsellers.cta": "Voir la gamme",

      "finalcta.heading": "Prêt(e) pour votre éclat tropical\u00A0?",
      "finalcta.cta": "Devenir franchisé",

      "footer.country": "C&ocirc;te d&rsquo;Ivoire",

      "meta.title": "Karicoco | Évadez-vous vers l&rsquo;Exotisme",
      "meta.description": "Là où les plantes tropicales rencontrent la science moderne du soin. Conçu pour une peau éclatante, hydratée et prête pour l&rsquo;été, chaque jour."
    },

    pt: {
      "nav.home": "Início",
      "nav.about": "Sobre Nós",
      "nav.products": "Produtos",
      "nav.contact": "Contato",
      "nav.franchise": "Franquia",
      "nav.toggle": "Abrir menu",

      "hero.title": "Escape para o Exótico.<br>Nutra sua pele com a Karicoco.",
      "hero.subtitle": "Onde os botânicos tropicais encontram a ciência moderna da pele. Feito para uma pele radiante, hidratada e pronta para o verão, todos os dias.",
      "hero.cta": "Linha Exotica",
      "hero.imgAlt": "Óleo bronzeador Karicoco em uma praia tropical",

      "escape.imgAlt": "Linha de produtos Karicoco na areia",
      "escape.title": "Um Escape Tropical,<br>em Frasco.",
      "escape.p1": "A Karicoco combina a pureza do coco, a suavidade dos botânicos naturais e o requinte da vida insular.",
      "escape.p2": "Cada produto é cuidadosamente elaborado para hidratar, suavizar e elevar o seu ritual diário.",
      "escape.cta": "Conheça Nossa História",

      "range.heading": "Nossa Linha Exotica",
      "range.card1.title": "Sabonete Corporal Exotica",
      "range.card1.desc": "Uma limpeza refrescante com coco.",
      "range.card1.imgAlt": "Linha do Sabonete Corporal Exotica",
      "range.card2.title": "Loção Corporal Exotica",
      "range.card2.desc": "Hidratação sedosa com toque tropical leve.",
      "range.card2.imgAlt": "Linha da Loção Corporal Exotica",
      "range.card3.title": "Creme para Mãos &amp; Pés Exotica",
      "range.card3.desc": "Nutrição profunda para uma pele macia e lisa.",
      "range.card3.imgAlt": "Linha do Creme para Mãos & Pés Exotica",
      "range.card4.title": "Óleo &amp; Shampoo Nutritivo Exotica",
      "range.card4.desc": "Força, brilho e maciez tropical.",
      "range.card4.imgAlt": "Linha do Óleo & Shampoo Nutritivo Exotica",
      "range.cta": "Ver Todos os Produtos",

      "why.heading": "Por Que Karicoco",
      "why.item1.imgAlt": "Coco",
      "why.item1.title": "Bondade Tropical",
      "why.item1.desc": "Derivado do coco e de ingredientes exóticos.",
      "why.item2.imgAlt": "Gotas de água",
      "why.item2.title": "Hidratação Leve",
      "why.item2.desc": "Hidratação suave e respirável que sua pele vai adorar.",
      "why.item3.imgAlt": "Folhas verdes",
      "why.item3.title": "Fórmulas Limpas",
      "why.item3.desc": "Derivado do coco e de ingredientes exóticos.",
      "why.item4.imgAlt": "Flor tropical",
      "why.item4.title": "Bondade Tropical",
      "why.item4.desc": "Derivado do coco e de ingredientes exóticos.",

      "ticker.text": "O Melhor da Natureza em Cada Gota&nbsp;&nbsp;•&nbsp;&nbsp;",

      "ingredients.item1.imgAlt": "Extrato de Coco",
      "ingredients.item1.text": "Refresca e acalma<br>a pele",
      "ingredients.item2.imgAlt": "Manteiga de Karité",
      "ingredients.item2.text": "Hidratação<br>duradoura",
      "ingredients.item3.imgAlt": "Fragrância Tropical",
      "ingredients.item3.text": "Envolvente, refrescante<br>e indulgente",

      "effect.heading": "O Efeito Karicoco",
      "effect.review1.imgAlt": "Cliente Karicoco",
      "effect.review1.text": "&ldquo;Um perfume divino. Minha pele fica hidratada e radiante.&rdquo;",
      "effect.review1.starsAria": "5 de 5 estrelas",
      "effect.review2.imgAlt": "Cliente Karicoco",
      "effect.review2.text": "&ldquo;A textura é luxuosa. Parece uma mini-férias.&rdquo;",
      "effect.review2.starsAria": "5 de 5 estrelas",
      "effect.review3.imgAlt": "Cliente Karicoco",
      "effect.review3.text": "&ldquo;Virou meu ritual diário favorito!&rdquo;",
      "effect.review3.starsAria": "5 de 5 estrelas",

      "bestsellers.heading": "Mais Vendidos",
      "bestsellers.feature.imgAlt": "Aplicando o spray solar Karicoco",
      "bestsellers.feature.title": "Spray Solar",
      "bestsellers.feature.desc": "Alta proteção, textura leve",
      "bestsellers.card1.imgAlt": "Óleo bronzeador Karicoco",
      "bestsellers.card1.title": "Óleo Bronzeador",
      "bestsellers.card1.desc": "Com cenoura, coco e manteiga de karité",
      "bestsellers.card2.imgAlt": "Pomada Karicoco",
      "bestsellers.card2.title": "Pomada",
      "bestsellers.card2.desc": "Com monoi, óleo de coco e manteiga de karité",
      "bestsellers.cta": "Ver Linha de Produtos",

      "finalcta.heading": "Pronta para o Seu Brilho Tropical?",
      "finalcta.cta": "Franquia",

      "footer.country": "Costa do Marfim",

      "meta.title": "Karicoco | Escape para o Exótico",
      "meta.description": "Onde os botânicos tropicais encontram a ciência moderna da pele. Feito para uma pele radiante, hidratada e pronta para o verão, todos os dias."
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

    const title = dict["meta.title"] ?? fallback["meta.title"];
    if (title) document.title = title;

    const metaDesc = document.getElementById("metaDescription");
    const desc = dict["meta.description"] ?? fallback["meta.description"];
    if (metaDesc && desc) metaDesc.setAttribute("content", desc);

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

    // Close when clicking anywhere outside the switcher.
    document.addEventListener("click", (e) => {
      if (langSwitch && !langSwitch.contains(e.target)) closeMenu();
    });

    // Close on Escape, and return focus to the toggle for keyboard users.
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMenu();
        if (langToggle) langToggle.focus();
      }
    });
  });
})();
