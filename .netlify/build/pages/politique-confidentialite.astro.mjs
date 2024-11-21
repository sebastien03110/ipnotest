/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BIY1ushQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CyycP6z_.mjs';
export { renderers } from '../renderers.mjs';

const $$PolitiqueConfidentialite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Politique de confidentialit\xE9 - NotaPatrimoine", "description": "Politique de confidentialit\xE9 et protection des donn\xE9es personnelles sur NotaPatrimoine" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose lg:prose-xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg"> <h1 class="font-playfair">Politique de confidentialité</h1> <h2>1. Collecte des données</h2> <p>
Nous collectons les données personnelles suivantes :
</p> <ul> <li>Nom et prénom</li> <li>Adresse email</li> <li>Données de connexion et de navigation</li> </ul> <h2>2. Utilisation des données</h2> <p>
Les données collectées sont utilisées pour :
</p> <ul> <li>Personnaliser votre expérience</li> <li>Améliorer notre site</li> <li>Vous envoyer des newsletters si vous y avez consenti</li> </ul> <h2>3. Protection des données</h2> <p>
Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles
      contre tout accès, modification, divulgation ou destruction non autorisée.
</p> <h2>4. Vos droits</h2> <p>
Conformément au RGPD, vous disposez des droits suivants :
</p> <ul> <li>Droit d'accès à vos données</li> <li>Droit de rectification</li> <li>Droit à l'effacement</li> <li>Droit à la limitation du traitement</li> <li>Droit à la portabilité des données</li> </ul> </article> ` })}`;
}, "C:/Users/remys/Desktop/IP Not/project/src/pages/politique-confidentialite.astro", void 0);

const $$file = "C:/Users/remys/Desktop/IP Not/project/src/pages/politique-confidentialite.astro";
const $$url = "/politique-confidentialite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PolitiqueConfidentialite,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
