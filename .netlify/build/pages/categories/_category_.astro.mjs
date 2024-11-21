/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BIY1ushQ.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Cm79B6y4.mjs';
import { $ as $$Layout, c as categories, g as getCategoryBySlug } from '../../chunks/Layout_CyycP6z_.mjs';
import { $ as $$ArticleCard } from '../../chunks/ArticleCard_BJ3lZAfS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://veille-ipnot.netlify.app");
function getStaticPaths() {
  return Object.keys(categories).map((slug) => ({
    params: { category: slug }
  }));
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const categoryInfo = getCategoryBySlug(category || "");
  if (!categoryInfo) {
    return Astro2.redirect("/404");
  }
  const allArticles = await getCollection("articles");
  const articles = allArticles.filter(
    (article) => article.data.category === categoryInfo.name
  ).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${categoryInfo.name} - Veille IPNOT`, "description": categoryInfo.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4"> <div class="text-center max-w-4xl mx-auto mb-16"> <h1 class="text-5xl font-bold text-primary-900 mb-6 font-playfair"> ${categoryInfo.name} </h1> <p class="text-xl text-primary-800 leading-relaxed"> ${categoryInfo.description} </p> </div> <div class="max-w-7xl mx-auto"> ${articles.length > 0 ? renderTemplate`<section class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "title": article.data.title, "description": article.data.description, "category": article.data.category, "date": article.data.date, "slug": article.slug, "source": article.data.source })}`)} </section>` : renderTemplate`<div class="text-center py-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg"> <p class="text-xl text-primary-800">Aucun article disponible dans cette catégorie.</p> </div>`} </div> </div> ` })}`;
}, "C:/Users/remys/Desktop/IP Not/project/src/pages/categories/[category].astro", void 0);

const $$file = "C:/Users/remys/Desktop/IP Not/project/src/pages/categories/[category].astro";
const $$url = "/categories/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
