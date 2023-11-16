import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// import vercel from "@astrojs/vercel/serverless";
import vercel from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
  redirects: {
    "/tags": "/tags/astro",
  },
});
