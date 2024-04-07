<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - feilvan` : 'feilvan'
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ]
})
</script>

<style>
body {
  @apply m-0 bg-white text-zinc-900;
  font-family: Geist, system-ui, sans-serif;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.dark body {
  @apply bg-zinc-900 text-white;
}

#__nuxt {
  @apply flex flex-col w-full;
  min-height: 100svh;
}

.page-enter-active,
.page-leave-active {
  position: absolute;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  top: 0;
  transition: all 0.4s cubic-bezier(0, 1, .4, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.page-enter-from {
  transform: translateY(20px);
}

.page-leave-to {
  transform: translateY(-20px);
}
</style>