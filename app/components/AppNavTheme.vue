<script setup lang="ts">
import { ToggleGroup } from "@ark-ui/vue/toggle-group";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "lucide-vue-next";

const theme = useTheme();
const themeValue = theme.theme.value;
const prefersDark = ref(true);

function setAuto() {
  themeValue.isAuto = true;
  themeValue.theme = prefersDark ? "dark" : "light";
}
function setDark() {
  themeValue.isAuto = false;
  themeValue.theme = "dark";
}
function setLight() {
  themeValue.isAuto = false;
  themeValue.theme = "light";
}

if (import.meta.client) {
  const body = document.body;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const themeKey = "feilvan:theme";
  const saved = localStorage.getItem(themeKey);

  if (saved === "auto") setAuto();
  else if (saved === "dark") setDark();
  else if (saved === "light") setLight();
  else localStorage.setItem(themeKey, "auto");

  prefersDark.value = media.matches;
  body.classList.add("font-sans");
  body.classList.toggle("auto", themeValue.isAuto);
  body.classList.toggle("dark", themeValue.theme === "dark");

  media.onchange = () => {
    prefersDark.value = media.matches;
    if (themeValue.isAuto.valueOf()) {
      if (media.matches) themeValue.theme = "dark";
      else themeValue.theme = "light";
      body.classList.toggle("dark", themeValue.theme === "dark");
    }
  };

  watch(themeValue, (curr, prev) => {
    localStorage.setItem(themeKey, curr.isAuto ? "auto" : curr.theme);
    body.classList.toggle("auto", curr.isAuto);
    body.classList.toggle("dark", curr.theme === "dark");
  });
}
</script>

<template>
  <!-- <button v-on:click="setAuto">Auto</button>
  <button v-on:click="setDark">Dark</button>
  <button v-on:click="setLight">Light</button> -->

  <div flex m-4 p-2 rounded text-xs bg-white text-black>
    <div flex-1>FEILVAN</div>
    <div flex-1 flex justify-center font-mono whitespace-pre><span text-neutral>UTC+7</span> 25 APR 26 24.00</div>
    <div flex-1 flex justify-end>
      <div>
        Available for work
      </div>
    </div>
    <!-- <ToggleGroup.Root :defaultValue="['left']">
      <ToggleGroup.Item value="left">
        <AlignLeftIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="center">
        <AlignCenterIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="right">
        <AlignRightIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="justify">
        <AlignJustifyIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root> -->
  </div>
</template>

<style scoped>
[data-part="root"] {
  @apply inline-flex gap1 border border-solid border-neutral-700 rounded-lg p1;

  &[data-orientation="vertical"] {
    @apply flex-col;
  }
}

[data-part="item"] {
  @apply inline-flex items-center content-center;
  @apply gap2 w-6 aspect-square rounded-md;
  @apply border-none select-none bg-transparent text-gray transition;

  & svg {
    @apply w-3 aspect-square;
  }

  &:hover:not(:disabled, [data-disabled]) {
    background: var(--demo-neutral-subtle);
  }

  &[data-state="on"] {
    @apply bg-neutral-700 background: var(--demo-neutral-subtle);
    color: var(--demo-neutral-fg);
    box-shadow: var(--demo-shadow-xs);
  }

  &:focus-visible {
    outline: 2px solid var(--demo-coral-focus-ring);
    outline-offset: -1px;
    z-index: 1;
  }

  &:is(:disabled, [data-disabled]) {
    @apply opacity-50 cursor-not-allowed;
  }
}
</style>
