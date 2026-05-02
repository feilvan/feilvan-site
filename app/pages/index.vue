<script setup lang="ts">
const { instance } = useGlitchGL('.glitchGL', {
  intensity: 1.0,
  effects: {
    pixelation: { enabled: true, pixelSize: 8 },
    glitch: { enabled: true, rgbShift: 0.02 },
    crt: { enabled: false, flicker: true },
  },
})
</script>

<template>
  <div>
    <h1 class="glitchGL">AAA</h1>
  </div>
</template>
