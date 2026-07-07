import { defineConfig } from 'astro/config';

// For GitHub Pages project sites the app lives under /<repo-name>/.
// The deploy workflow sets SITE_URL and BASE_PATH automatically;
// local dev falls back to root.
export default defineConfig({
  site: process.env.SITE_URL || 'https://geospark.co.ke',
  base: process.env.BASE_PATH || '/',
});
