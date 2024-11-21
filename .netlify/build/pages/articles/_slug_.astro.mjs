/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BIY1ushQ.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Cm79B6y4.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CyycP6z_.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://veille-ipnot.netlify.app");
async function getStaticPaths() {
  const articles = await getCollection("articles");
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: { article }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { article } = Astro2.props;
  const { Content } = await article.render();
  const formattedDate = new Date(article.data.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": article.data.title, "description": article.data.description, "data-astro-cid-xw3clhsd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose lg:prose-xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg" data-astro-cid-xw3clhsd> <header class="not-prose mb-8" data-astro-cid-xw3clhsd> <div class="flex items-center gap-4 text-sm text-primary-600 mb-4" data-astro-cid-xw3clhsd> <span class="px-3 py-1 bg-primary-100 rounded-full" data-astro-cid-xw3clhsd> ${article.data.category} </span> <time${addAttribute(article.data.date, "datetime")} data-astro-cid-xw3clhsd> ${formattedDate} </time> <span data-astro-cid-xw3clhsd>Par ${article.data.author}</span> </div> <h1 class="text-4xl font-serif font-bold mb-4" data-astro-cid-xw3clhsd>${article.data.title}</h1> <p class="text-xl text-primary-800" data-astro-cid-xw3clhsd>${article.data.description}</p> </header> <div class="article-content" data-astro-cid-xw3clhsd> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-xw3clhsd": true })} </div> ${article.data.source && renderTemplate`<footer class="not-prose mt-8 pt-4 border-t border-primary-100" data-astro-cid-xw3clhsd> <p class="text-sm text-primary-600" data-astro-cid-xw3clhsd>
Source : <a${addAttribute(article.data.source, "href")} target="_blank" rel="noopener noreferrer" class="text-accent-600 hover:text-accent-700" data-astro-cid-xw3clhsd>${article.data.source}</a> </p> </footer>`} </article> ` })} `;
}, "C:/Users/remys/Desktop/IP Not/project/src/pages/articles/[slug].astro", void 0);

const $$file = "C:/Users/remys/Desktop/IP Not/project/src/pages/articles/[slug].astro";
const $$url = "/articles/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
