/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BIY1ushQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CyycP6z_.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page non trouv\xE9e - Veille IPNOT", "description": "La page que vous recherchez n'existe pas" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-[60vh] text-center"> <h1 class="text-6xl font-bold text-primary-900 mb-4 font-playfair">404</h1> <p class="text-xl text-primary-700 mb-8">La page que vous recherchez n'existe pas</p> <a href="/" class="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg>
Retour à l'accueil
</a> </div> ` })}`;
}, "C:/Users/remys/Desktop/IP Not/project/src/pages/404.astro", void 0);

const $$file = "C:/Users/remys/Desktop/IP Not/project/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
