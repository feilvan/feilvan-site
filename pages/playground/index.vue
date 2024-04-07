<template>
  <div class="absolute h-full w-full">
    <svg id="thebg" viewBox="0 0 256 256" xmlns='http://www.w3.org/2000/svg'>
      <filter id='noiseFilter'>
        <feTurbulence type='fractalNoise' baseFrequency='0.89' numOctaves='5' stitchTiles='stitch' />
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>
    <div id="svg-background" class="h-full w-full">
    </div>
  </div>
</template>

<script lang="ts" setup>
// https://codepen.io/iceable/pen/yLBrZOd
// https://codepen.io/t_afif/pen/oNdKYge
// https://codepen.io/geoffgraham/pen/zZENbr
// https://speckyboy.com/css-javascript-snippets-noise-effects/
</script>

<style>
svg {
  width: 256px;
  height: 256px;
}

#svg-background {
  width: 100%;
  height: 100%;
  background: url(#thebg);
}
</style>