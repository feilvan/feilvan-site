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
  <div mx4 flex flex-col>
    <div flex justify-center gap4 font-mono font-900>
      <div bg-neutral-700>ABOUT</div>
      <div>CERTIFICATE</div>
      <div>WORKS</div>
    </div>
    <div font-mono font-900 text-2xl tracking-tighter>feilvan</div>
    <div>Frontend Developer & Digital Artist</div>
  </div>
</template>
