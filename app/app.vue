<script setup lang="ts">
// useHead({
//   script: [
//     { src: "/scripts/three.core.min.js" },
//     { src: "/scripts/glitchGL.min.js" }
//   ]
// })
</script>

<template>
  <div flex justify-center min-h-dvh bg="neutral-100 dark:neutral-900" text="neutral-600 dark:neutral-300">
    <div w="full">
      <nav>
        <AppNavTheme />
      </nav>
      <div prose="~ neutral dark:invert">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "InterX";
  src: url("/fonts/InterVariable.woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SpaceMonoX";
  src: url("/fonts/SpaceMono-Regular.ttf");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
</style>
