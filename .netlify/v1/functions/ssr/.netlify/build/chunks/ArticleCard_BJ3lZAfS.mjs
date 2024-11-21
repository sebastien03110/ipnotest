import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BIY1ushQ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://veille-ipnot.netlify.app");
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { title, description, category, date, slug, source } = Astro2.props;
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<article class="group bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20"> <div class="p-6"> <div class="flex items-center justify-between mb-4"> <div class="flex items-center gap-4"> <span class="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-full font-medium"> ${category} </span> <time${addAttribute(date, "datetime")} class="text-sm text-primary-600">${formattedDate}</time> </div> <form${addAttribute(`/api/delete/${slug}`, "action")} method="POST" onsubmit="return confirm('Voulez-vous vraiment supprimer cet article ?')"> <button type="submit" class="text-red-500 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50" title="Supprimer l'article"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path> </svg> </button> </form> </div> <h2 class="text-2xl font-serif font-semibold mb-3 text-primary-900"> ${source ? renderTemplate`<a${addAttribute(source, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-primary-700 transition-colors"> ${title} </a>` : renderTemplate`<a${addAttribute(`/articles/${slug}`, "href")} class="hover:text-primary-700 transition-colors"> ${title} </a>`} </h2> <p class="text-primary-800 line-clamp-3 mb-4">${description}</p> <div class="pt-4 border-t border-primary-100"> ${source ? renderTemplate`<a${addAttribute(source, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium transition-all hover:translate-x-1">
Lire l'article original
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a>` : renderTemplate`<a${addAttribute(`/articles/${slug}`, "href")} class="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium transition-all hover:translate-x-1">
Lire l'article
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a>`} </div> </div> </article>`;
}, "C:/Users/remys/Desktop/IP Not/project/src/components/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
