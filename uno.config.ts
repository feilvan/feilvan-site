import {
  defineConfig,
  presetWind4,
  presetAttributify,
  presetTypography,
  presetWebFonts,
} from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: "none",
      themeKey: "font",
      fonts: {
        sans: "InterX",
        mono: "SpaceMonoX",
      },
    }),
  ],
});
