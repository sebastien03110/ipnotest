import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
   output: 'static', // Obligatoire pour GitHub Pages
  base: '/nom-repo/', // Remplace "nom-repo" par le nom de ton dépôt GitHub
  site: 'https://nom-utilisateur.github.io/nom-repo', // Remplace par ton URL GitHub Pages
});