import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://amymind.com',
  integrations: [tailwind(), sitemap(), icon()],
  i18n: {
    defaultLocale: "en",
    locales: ["zh-cn", "en"],
    fallback: {
      "zh-cn": "en"
    },
    routing: {
      prefixDefaultLocale: false
    }
  }
});