import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B0EM_VqR.mjs';
import { manifest } from './manifest_DSKBUzup.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/en/blog.astro.mjs');
const _page7 = () => import('./pages/en/blog/_---slug_.astro.mjs');
const _page8 = () => import('./pages/en/contact.astro.mjs');
const _page9 = () => import('./pages/en/projects/_slug_.astro.mjs');
const _page10 = () => import('./pages/en/projects.astro.mjs');
const _page11 = () => import('./pages/en/tips.astro.mjs');
const _page12 = () => import('./pages/en/tips/_---slug_.astro.mjs');
const _page13 = () => import('./pages/en.astro.mjs');
const _page14 = () => import('./pages/projects/_slug_.astro.mjs');
const _page15 = () => import('./pages/projects.astro.mjs');
const _page16 = () => import('./pages/tips.astro.mjs');
const _page17 = () => import('./pages/tips/_---slug_.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/en/blog/index.astro", _page6],
    ["src/pages/en/blog/[...slug].astro", _page7],
    ["src/pages/en/contact.astro", _page8],
    ["src/pages/en/projects/[slug].astro", _page9],
    ["src/pages/en/projects/index.astro", _page10],
    ["src/pages/en/tips/index.astro", _page11],
    ["src/pages/en/tips/[...slug].astro", _page12],
    ["src/pages/en/index.astro", _page13],
    ["src/pages/projects/[slug].astro", _page14],
    ["src/pages/projects/index.astro", _page15],
    ["src/pages/tips/index.astro", _page16],
    ["src/pages/tips/[...slug].astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "60ea90c1-3309-4148-84d9-eda6fe4154ed",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
