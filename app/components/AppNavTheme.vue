<script setup lang="ts">
const theme = useTheme();
const themeValue = theme.theme.value;
const prefersDark = ref(true);

function setAuto() {
  themeValue.isAuto = true;
  themeValue.theme = prefersDark.value ? "dark" : "light";
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

const cycleTheme = () => {
  console.log(themeValue)
  if (themeValue.isAuto) setDark()
  else {
    if (themeValue.theme === "dark") setLight()
    else setAuto()
  }
}

</script>

<template>
  <div flex items-center m-4 p-1 rounded text-xs bg-white text-black>
    <div flex flex-1 gap2>
      <div>FEILVAN</div>
      <div text-neutral-400>Available for work</div>
    </div>
    <div class="hidden sm:flex" flex-1 justify-center font-mono font-900 whitespace-pre><span
        text-neutral-400>UTC+7</span>
      25 APR
      26
      24.00
    </div>
    <div flex flex-1 justify-end>
      <div>
        <button @click="cycleTheme" font-mono font-900 border border-neutral px2 rounded>☀
          <span v-if="themeValue.isAuto">AUTO</span>
          <span v-if="!themeValue.isAuto && themeValue.theme === 'dark'">DARK</span>
          <span v-if="!themeValue.isAuto && themeValue.theme === 'light'">LIGHT</span>
          ></button>
      </div>
    </div>
  </div>
</template>
