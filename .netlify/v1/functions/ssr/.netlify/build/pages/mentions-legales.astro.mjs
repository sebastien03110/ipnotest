/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BIY1ushQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CyycP6z_.mjs';
export { renderers } from '../renderers.mjs';

const $$MentionsLegales = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mentions l\xE9gales - NotaPatrimoine", "description": "Mentions l\xE9gales et conditions d'utilisation du site NotaPatrimoine" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose lg:prose-xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg"> <h1 class="font-playfair">Mentions légales</h1> <h2>1. Édition du site</h2> <p>
Le site NotaPatrimoine est édité par [Nom de la société], société [forme juridique] au capital de [montant] euros,
      dont le siège social est situé [adresse].
</p> <h2>2. Hébergement</h2> <p>
Le site NotaPatrimoine est hébergé par [Nom de l'hébergeur], [adresse de l'hébergeur].
</p> <h2>3. Propriété intellectuelle</h2> <p>
L'ensemble du contenu de ce site est protégé par le droit d'auteur. Toute reproduction, même partielle,
      est soumise à autorisation préalable.
</p> <h2>4. Protection des données personnelles</h2> <p>
Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès,
      de rectification et de suppression de vos données personnelles.
</p> <h2>5. Cookies</h2> <p>
Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer sur ce site,
      vous acceptez leur utilisation.
</p> </article> ` })}`;
}, "C:/Users/remys/Desktop/IP Not/project/src/pages/mentions-legales.astro", void 0);

const $$file = "C:/Users/remys/Desktop/IP Not/project/src/pages/mentions-legales.astro";
const $$url = "/mentions-legales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MentionsLegales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
