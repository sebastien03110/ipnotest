import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, c as createAstro, h as renderHead, i as renderSlot } from './astro/server_BIY1ushQ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$SearchBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative" x-data="{ isOpen: false, searchQuery: '' }"> <form action="/search" method="get" class="relative" @submit.prevent="window.location.href = \`/search?q=\${searchQuery}\`"> <input type="search" name="q" placeholder="Rechercher..." x-model="searchQuery" @input="isOpen = searchQuery.length > 0" class="w-64 px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 placeholder-primary-400 text-primary-900 transition-all duration-200"> <button type="submit" class="absolute right-3 top-2.5 text-primary-400 hover:text-accent-500 transition-colors" aria-label="Rechercher"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> </form> </div> `;
}, "C:/Users/remys/Desktop/IP Not/project/src/components/SearchBar.astro", void 0);

const categories = {
  fiscalite: {
    name: "Fiscalité",
    slug: "fiscalite",
    description: "Actualités et analyses des évolutions fiscales impactant la gestion de patrimoine"
  },
  succession: {
    name: "Succession",
    slug: "succession",
    description: "Guides et conseils pour la transmission du patrimoine"
  },
  "gestion-patrimoniale": {
    name: "Gestion patrimoniale",
    slug: "gestion-patrimoniale",
    description: "Stratégies et optimisations pour la gestion de patrimoine"
  },
  immobilier: {
    name: "Immobilier",
    slug: "immobilier",
    description: "Expertise immobilière et conseils pour l'investissement"
  }
};
Object.values(categories).map((cat) => ({
  value: cat.name,
  label: cat.name,
  slug: cat.slug
}));
Object.fromEntries(
  Object.entries(categories).map(([slug, info]) => [slug, info])
);
function getCategoryBySlug(slug) {
  return categories[slug];
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const categoryLinks = Object.entries(categories).map(([slug, info]) => ({
    name: info.name,
    href: `/categories/${slug}`,
    slug
  }));
  return renderTemplate`${maybeRenderHead()}<header class="bg-white/95 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50"> <div class="container mx-auto px-4"> <nav class="flex items-center justify-between h-20"> <a href="/" class="flex items-center gap-3 group"> <span class="text-2xl font-playfair font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
Veille IPNOT
</span> </a> <div class="hidden md:flex space-x-8"> ${categoryLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-primary-800 hover:text-primary-600 font-medium transition-colors relative group"> ${link.name} <span class="absolute inset-x-0 -bottom-1 h-0.5 bg-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span> </a>`)} <a href="/about" class="text-primary-800 hover:text-primary-600 font-medium transition-colors relative group">
À propos
<span class="absolute inset-x-0 -bottom-1 h-0.5 bg-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span> </a> </div> <div class="flex items-center gap-4"> ${renderComponent($$result, "SearchBar", $$SearchBar, {})} </div> <button class="md:hidden p-2 hover:bg-primary-50 rounded-lg transition-colors" aria-label="Menu" x-data="{ open: false }" @click="open = !open"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <!-- Menu mobile --> <div x-show="open" x-transition class="absolute top-full right-0 w-64 bg-white shadow-lg rounded-lg mt-2 py-2"> ${categoryLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="block px-4 py-2 text-primary-800 hover:bg-primary-50"> ${link.name} </a>`)} <a href="/about" class="block px-4 py-2 text-primary-800 hover:bg-primary-50">
À propos
</a> </div> </button> </nav> </div> </header>`;
}, "C:/Users/remys/Desktop/IP Not/project/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const categoryLinks = Object.entries(categories).map(([slug, info]) => ({
    name: info.name,
    href: `/categories/${slug}`
  }));
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary-900 text-primary-100 py-12"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <h3 class="text-accent-400 font-playfair font-semibold text-lg mb-4">Veille IPNOT</h3> <p class="text-sm">
L'expertise notariale au service de votre patrimoine. Des conseils et analyses pour les professionnels du notariat.
</p> </div> <div> <h3 class="text-accent-400 font-playfair font-semibold text-lg mb-4">Catégories</h3> <ul class="space-y-2"> ${categoryLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="hover:text-accent-300 transition-colors"> ${link.name} </a> </li>`)} </ul> </div> <div> <h3 class="text-accent-400 font-playfair font-semibold text-lg mb-4">Contact</h3> <ul class="space-y-2"> <li><a href="/about" class="hover:text-accent-300 transition-colors">À propos</a></li> <li><a href="/mentions-legales" class="hover:text-accent-300 transition-colors">Mentions légales</a></li> <li><a href="/politique-confidentialite" class="hover:text-accent-300 transition-colors">Politique de confidentialité</a></li> </ul> </div> </div> <div class="border-t border-primary-800 mt-8 pt-8 text-sm text-center"> <p>&copy; ${currentYear} Veille IPNOT. Tous droits réservés.</p> </div> </div> </footer>`;
}, "C:/Users/remys/Desktop/IP Not/project/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://veille-ipnot.netlify.app");
const $$UpdateButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$UpdateButton;
  const searchParams = Astro2.url.searchParams;
  const error = searchParams.get("error");
  const success = searchParams.get("success");
  let message = "";
  let messageType = "";
  if (error) {
    messageType = "error";
    switch (error) {
      case "missing-fields":
        message = "Veuillez remplir tous les champs";
        break;
      case "processing":
        message = "Erreur lors du traitement de l'article";
        break;
      default:
        message = "Une erreur est survenue";
    }
  } else if (success) {
    messageType = "success";
    message = "Article ajout\xE9 avec succ\xE8s";
  }
  const categoryOptions = Object.values(categories).map((cat) => ({
    value: cat.name,
    label: cat.name
  }));
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-4 right-4 z-50" data-astro-cid-q3kgcr3s> <button id="openModalBtn" class="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2" data-astro-cid-q3kgcr3s> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-q3kgcr3s> <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" data-astro-cid-q3kgcr3s></path> </svg>
Ajouter un article
</button> <!-- Modal --> <div id="addArticleModal" class="fixed inset-0 bg-black/50 hidden" data-astro-cid-q3kgcr3s> <div class="flex items-center justify-center min-h-screen p-4" data-astro-cid-q3kgcr3s> <div class="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full" data-astro-cid-q3kgcr3s> <h3 class="text-2xl font-playfair font-bold text-primary-900 mb-4" data-astro-cid-q3kgcr3s>
Ajouter un article
</h3> <form action="/api/submit-url" method="POST" class="space-y-4" data-astro-cid-q3kgcr3s> <div data-astro-cid-q3kgcr3s> <label for="title" class="block text-sm font-medium text-primary-700 mb-1" data-astro-cid-q3kgcr3s>
Titre de l'article
</label> <input type="text" id="title" name="title" required placeholder="Entrez le titre de l'article" class="w-full px-3 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" data-astro-cid-q3kgcr3s> </div> <div data-astro-cid-q3kgcr3s> <label for="url" class="block text-sm font-medium text-primary-700 mb-1" data-astro-cid-q3kgcr3s>
URL de l'article
</label> <input type="url" id="url" name="url" required placeholder="https://exemple.com/article" class="w-full px-3 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" data-astro-cid-q3kgcr3s> </div> <div data-astro-cid-q3kgcr3s> <label for="category" class="block text-sm font-medium text-primary-700 mb-1" data-astro-cid-q3kgcr3s>
Catégorie
</label> <select id="category" name="category" required class="w-full px-3 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" data-astro-cid-q3kgcr3s> <option value="" data-astro-cid-q3kgcr3s>Sélectionnez une catégorie</option> ${categoryOptions.map((cat) => renderTemplate`<option${addAttribute(cat.value, "value")} data-astro-cid-q3kgcr3s>${cat.label}</option>`)} </select> </div> <div data-astro-cid-q3kgcr3s> <label for="description" class="block text-sm font-medium text-primary-700 mb-1" data-astro-cid-q3kgcr3s>
Description / Synthèse
</label> <textarea id="description" name="description" required rows="4" placeholder="Entrez une brève description ou synthèse de l'article..." class="w-full px-3 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none" data-astro-cid-q3kgcr3s></textarea> <p class="mt-1 text-sm text-primary-500" data-astro-cid-q3kgcr3s>
Cette description apparaîtra comme résumé de l'article
</p> </div> ${message && renderTemplate`<p${addAttribute(`text-sm ${messageType === "error" ? "text-red-600" : "text-green-600"}`, "class")} data-astro-cid-q3kgcr3s> ${message} </p>`} <div class="flex justify-end gap-3 pt-4" data-astro-cid-q3kgcr3s> <button type="button" id="closeModalBtn" class="px-4 py-2 text-primary-700 hover:bg-primary-50 rounded-lg transition-colors" data-astro-cid-q3kgcr3s>
Annuler
</button> <button type="submit" class="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors" data-astro-cid-q3kgcr3s>
Ajouter
</button> </div> </form> </div> </div> </div> </div>  `;
}, "C:/Users/remys/Desktop/IP Not/project/src/components/UpdateButton.astro", void 0);

const $$Astro$1 = createAstro("https://veille-ipnot.netlify.app");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/remys/Desktop/IP Not/project/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://veille-ipnot.netlify.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Blog professionnel d\xE9di\xE9 au notariat et \xE0 la gestion patrimoniale" } = Astro2.props;
  const siteTitle = title.includes("Veille IPNOT") ? title : `${title} - Veille IPNOT`;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${siteTitle}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="min-h-screen bg-gradient"> <div class="fixed inset-0 -z-10 background-pattern"></div> <div class="fixed inset-0 -z-10 bg-gradient-radial"></div> ${renderComponent($$result, "Header", $$Header, {})} <main class="container mx-auto px-4 py-12 relative"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "UpdateButton", $$UpdateButton, {})} </body></html>`;
}, "C:/Users/remys/Desktop/IP Not/project/src/layouts/Layout.astro", void 0);

export { $$Layout as $, categories as c, getCategoryBySlug as g };
