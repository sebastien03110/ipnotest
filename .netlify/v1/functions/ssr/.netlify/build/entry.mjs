import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest__haWhc23.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/articles/_slug_.astro.mjs');
const _page4 = () => import('./pages/api/delete/_slug_.astro.mjs');
const _page5 = () => import('./pages/api/delete-article.astro.mjs');
const _page6 = () => import('./pages/api/submit-url.astro.mjs');
const _page7 = () => import('./pages/api/update.astro.mjs');
const _page8 = () => import('./pages/api/update-articles.astro.mjs');
const _page9 = () => import('./pages/api/update-articles.astro2.mjs');
const _page10 = () => import('./pages/articles/_slug_.astro.mjs');
const _page11 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page12 = () => import('./pages/categories/_category_.astro.mjs');
const _page13 = () => import('./pages/mentions-legales.astro.mjs');
const _page14 = () => import('./pages/politique-confidentialite.astro.mjs');
const _page15 = () => import('./pages/search.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/articles/[slug].ts", _page3],
    ["src/pages/api/delete/[slug].ts", _page4],
    ["src/pages/api/delete-article.ts", _page5],
    ["src/pages/api/submit-url.ts", _page6],
    ["src/pages/api/update.ts", _page7],
    ["src/pages/api/update-articles.js", _page8],
    ["src/pages/api/update-articles.ts", _page9],
    ["src/pages/articles/[slug].astro", _page10],
    ["src/pages/articles/[...slug].astro", _page11],
    ["src/pages/categories/[category].astro", _page12],
    ["src/pages/mentions-legales.astro", _page13],
    ["src/pages/politique-confidentialite.astro", _page14],
    ["src/pages/search.astro", _page15],
    ["src/pages/index.astro", _page16]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d7f3144d-6f25-40d3-b40e-f9b7476b8561"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
