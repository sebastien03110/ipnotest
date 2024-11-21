import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BIY1ushQ.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Source originale : <a href=\"https://droit-finances.commentcamarche.com/impots/guide-impots/2745-droits-de-succession-bareme-calcul-et-taux/\">https://droit-finances.commentcamarche.com/impots/guide-impots/2745-droits-de-succession-bareme-calcul-et-taux/</a></p>\n<p>Contenu en cours de traitement…</p>";

				const frontmatter = {"title":"Barème droits de succession","description":"Le barème des droits de succession 2024 détaille les taux et abattements selon le lien de parenté.","category":"Succession","date":"2024-11-21","author":"Veille IPNOT","source":"https://droit-finances.commentcamarche.com/impots/guide-impots/2745-droits-de-succession-bareme-calcul-et-taux/"};
				const file = "C:/Users/remys/Desktop/IP Not/project/src/content/articles/bareme-droits-de-succession.md";
				const url = undefined;
				function rawContent() {
					return "\nSource originale : https://droit-finances.commentcamarche.com/impots/guide-impots/2745-droits-de-succession-bareme-calcul-et-taux/\n\nContenu en cours de traitement...";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
