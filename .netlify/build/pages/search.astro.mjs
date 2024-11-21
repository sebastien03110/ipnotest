/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BIY1ushQ.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_Cm79B6y4.mjs';
import { $ as $$Layout } from '../chunks/Layout_CyycP6z_.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_BJ3lZAfS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://veille-ipnot.netlify.app");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("q")?.toLowerCase().trim() || "";
  const allArticles = await getCollection("articles");
  function normalizeText(text) {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").trim();
  }
  const searchResults = allArticles.filter((article) => {
    if (!query) return false;
    const normalizedQuery = normalizeText(query);
    const searchTerms = normalizedQuery.split(/\s+/);
    const searchableTexts = [
      article.data.title,
      article.data.description,
      article.data.category,
      article.body
    ].map((text) => normalizeText(text || ""));
    return searchTerms.every(
      (term) => searchableTexts.some((text) => text.includes(term))
    );
  });
  searchResults.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Recherche: ${query}`, "description": `R\xE9sultats de recherche pour "${query}"` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4"> <div class="text-center max-w-4xl mx-auto mb-16"> <h1 class="text-5xl font-bold text-primary-900 mb-6 font-playfair">
Résultats de recherche
</h1> ${query && renderTemplate`<p class="text-xl text-primary-800 leading-relaxed"> ${searchResults.length} résultat${searchResults.length > 1 ? "s" : ""} pour "${query}"
</p>`} </div> <div class="max-w-7xl mx-auto"> ${searchResults.length > 0 ? renderTemplate`<section class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${searchResults.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "title": article.data.title, "description": article.data.description, "category": article.data.category, "date": article.data.date, "slug": article.slug })}`)} </section>` : renderTemplate`<div class="text-center py-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8"> <p class="text-xl text-primary-800 mb-4">
Aucun résultat ne correspond à votre recherche.
</p> <p class="text-primary-600 mb-6">
Suggestions :
</p> <ul class="text-primary-700 space-y-2"> <li>• Vérifiez l'orthographe des mots-clés</li> <li>• Essayez des mots-clés différents ou plus généraux</li> <li>• Utilisez moins de mots-clés</li> </ul> <div class="mt-8"> <a href="/" class="text-accent-600 hover:text-accent-700 font-medium">
Retourner aux articles récents →
</a> </div> </div>`} </div> </div> ` })}`;
}, "C:/Users/remys/Desktop/IP Not/project/src/pages/search.astro", void 0);

const $$file = "C:/Users/remys/Desktop/IP Not/project/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
