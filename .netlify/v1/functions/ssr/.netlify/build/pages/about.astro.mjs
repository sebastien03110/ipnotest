/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BIY1ushQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CyycP6z_.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xC0 propos - NotaPatrimoine", "description": "D\xE9couvrez notre mission d'accompagnement des notaires dans la gestion patrimoniale" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose lg:prose-xl mx-auto"> <h1>Notre Mission</h1> <p class="lead">
NotaPatrimoine est né de la volonté d'accompagner les notaires dans leur pratique quotidienne 
      de la gestion patrimoniale et de partager les meilleures pratiques du secteur.
</p> <h2>Notre Expertise</h2> <p>
Nous réunissons une équipe d'experts en droit notarial, fiscalité et gestion de patrimoine 
      pour vous apporter une information fiable, actualisée et pertinente.
</p> <h2>Notre Engagement</h2> <ul> <li>Une information claire et précise</li> <li>Des analyses approfondies des évolutions juridiques et fiscales</li> <li>Des outils pratiques pour optimiser votre pratique professionnelle</li> <li>Une veille juridique constante</li> </ul> <h2>Nos Services</h2> <p>
Au-delà de notre blog, nous proposons :
</p> <ul> <li>Des formations spécialisées</li> <li>Des webinaires thématiques</li> <li>Une newsletter mensuelle</li> <li>Un accès à notre base documentaire</li> </ul> </article> ` })}`;
}, "C:/Users/remys/Desktop/IP Not/project/src/pages/about.astro", void 0);

const $$file = "C:/Users/remys/Desktop/IP Not/project/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
