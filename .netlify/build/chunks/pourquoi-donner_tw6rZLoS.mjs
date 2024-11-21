import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BIY1ushQ.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Source originale : <a href=\"https://infodon.fr/pourquoi-donner/\">https://infodon.fr/pourquoi-donner/</a></p>\n<p>Contenu en cours de traitement…</p>";

				const frontmatter = {"title":"pourquoi donner ?","description":"Donner soutient des causes essentielles, renforce la solidarité, et favorise un impact durable pour tous.","category":"Fiscalité","date":"2024-11-21","author":"Veille IPNOT","source":"https://infodon.fr/pourquoi-donner/"};
				const file = "C:/Users/remys/Desktop/IP Not/project/src/content/articles/pourquoi-donner.md";
				const url = undefined;
				function rawContent() {
					return "\nSource originale : https://infodon.fr/pourquoi-donner/\n\nContenu en cours de traitement...";
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
