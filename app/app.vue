<template>
  <div flex justify-center min-h-dvh bg="neutral-100 dark:neutral-900" text="neutral-600 dark:neutral-300">
    <div grow>
      <nav>
        <AppNavTheme />
      </nav>
      <div>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "Geist";
  src: url("/fonts/Geist.woff2") format(woff2);
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Doto";
  src: url("/fonts/Doto-VariableFont_ROND,wght.ttf");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
</style>
