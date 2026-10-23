import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';
import rehypeMermaid from 'rehype-mermaid';

import vercel from '@astrojs/vercel';

// Use different strategies based on environment
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

// Use 'pre-built' on Vercel/production to avoid Playwright, 'inline-svg' locally
const mermaidStrategy = isProduction || isVercel ? 'pre-built' : 'inline-svg';

console.log(`Using Mermaid strategy: ${mermaidStrategy}`);

// https://astro.build/config
export default defineConfig({
  site: 'https://nicholashong.dev',
  // Projects taken off the site (still on GitHub) send old links to the project list.
  redirects: {
    '/projects/sgx-multifactor-fyp': '/projects/sgx-multifactor',
    '/en/projects/sgx-multifactor-fyp': '/en/projects/sgx-multifactor',
    '/projects/macro-var-research-lab': '/projects/macro-var',
    '/en/projects/macro-var-research-lab': '/en/projects/macro-var',
    '/projects/nkdsge-dsge': '/projects',
    '/en/projects/nkdsge-dsge': '/en/projects',
    '/projects/quant-macro-engine': '/projects',
    '/en/projects/quant-macro-engine': '/en/projects',
    '/projects/global-rates-rv': '/projects',
    '/en/projects/global-rates-rv': '/en/projects',
    '/projects/alpha-research-lab': '/projects',
    '/en/projects/alpha-research-lab': '/en/projects',
    '/projects/financial-ml-lab': '/projects',
    '/en/projects/financial-ml-lab': '/en/projects',
  },
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkReadingTime],
      rehypePlugins: [
        [
          rehypeMermaid,
          {
            strategy:
              process.env.NODE_ENV === 'production'
                ? 'pre-mermaid'
                : 'inline-svg',
          },
        ],
      ],
      syntaxHighlight: {
        type: 'shiki',
        excludeLangs: ['mermaid'],
      },
    }),
  ],

  i18n: {
    locales: ['en'], // Only English enabled
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});