import type {AstroUserConfig} from "astro";

const config: AstroUserConfig = {
  buildOptions: {
    site: "https://astro-template-bronze.netlify.app/",
    sitemap: true,
  },
  renderers: [
    // Enable the Preact renderer to support Preact JSX components.
    "@astrojs/renderer-preact",
    // Enable the React renderer, for the Algolia search component
    "@astrojs/renderer-react",
    "@astrojs/renderer-vue",
  ],
};

export default config;
