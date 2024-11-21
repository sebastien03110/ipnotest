/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BIY1ushQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CyycP6z_.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_BJ3lZAfS.mjs';
import { g as getCollection } from '../chunks/_astro_content_Cm79B6y4.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const articles = await getCollection("articles");
  articles.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Veille IPNOT - L'expertise notariale au service de votre patrimoine" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center max-w-4xl mx-auto mb-16"> <h1 class="text-5xl font-bold text-gray-900 mb-6 font-serif">
Veille IPNOT
</h1> <p class="text-xl text-gray-600 leading-relaxed">
Découvrez nos analyses approfondies et conseils d'experts pour une gestion optimale de votre patrimoine.
</p> </section> <div class="max-w-7xl mx-auto"> ${articles.length > 0 ? renderTemplate`<section class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "title": article.data.title, "description": article.data.description, "category": article.data.category, "date": article.data.date, "slug": article.slug, "source": article.data.source })}`)} </section>` : renderTemplate`<div class="text-center py-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg"> <p class="text-xl text-primary-800">Aucun article disponible pour le moment.</p> </div>`} </div> ` })}`;
}, "C:/Users/remys/Desktop/IP Not/project/src/pages/index.astro", void 0);

const $$file = "C:/Users/remys/Desktop/IP Not/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
