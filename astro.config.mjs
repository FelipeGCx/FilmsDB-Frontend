import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [vue({ appEntrypoint: "/src/pages/_app" })],
  devToolbar: { enabled: false },
  vite: {
    resolve: {
      alias: {
        "@": join(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import 'src/styles/style.scss';`,
        },
      },
    },
  },
});
