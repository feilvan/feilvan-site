<template>
  <UButton @click="isDark = !isDark" color="gray" variant="ghost"
    :icon="isDark ? 'i-heroicons-moon-solid' : 'i-heroicons-sun-solid'" />
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<style></style>