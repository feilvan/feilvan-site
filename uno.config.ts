import {
  defineConfig,
  presetWind4,
  presetWebFonts,
  presetTypography,
  transformerDirectives,
} from "unocss";
import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";

export default defineConfig({
  presets: [
    presetWind4({
      dark: "media",
    }),
    presetTypography(),
    presetWebFonts({
      provider: "none",
      themeKey: "font",
      fonts: {
        sans: "Geist",
        mono: "Geist Mono",
      },
      processors: createLocalFontProcessor({
        // Directory to cache the fonts
        cacheDir: "node_modules/.cache/unocss/fonts",

        // Directory to save the fonts assets
        fontAssetsDir: "public/fonts",

        // Base URL to serve the fonts from the client
        fontServeBaseUrl: "/fonts",
      }),
    }),
  ],
  transformers: [transformerDirectives()],
});
