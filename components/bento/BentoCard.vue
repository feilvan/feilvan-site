<template>
  <div :class="'overflow-hidden transition ' + props.class">
    <slot />
    <div v-if="!$slots.default" class="relative h-full w-full">
      <!-- <img v-if="props.image" :src="props.image" class="absolute h-full w-full object-cover" /> -->
      <NuxtPicture v-if="props.image" :src="props.image"
        :img-attrs="{ class: 'absolute h-full w-full object-cover' }" />
      <div class="relative h-full w-full">
        <div
          class="absolute h-full w-full bg-gradient-to-br from-white/80 dark:from-zinc-900/80 from-10% to-transparent to-50% backdrop-blur"
          style="mask: linear-gradient(135deg, black 10%, transparent 50%);" />
        <div
          class="absolute h-full w-full bg-gradient-to-t from-white/80 dark:from-zinc-900/80 to-transparent to-70% backdrop-blur"
          style="mask: linear-gradient(transparent 20%, black 80%);" />
        <div v-if="props.protected" class="absolute h-full w-full flex justify-center items-center">
          <UIcon name="i-heroicons-lock-closed" class="size-16" />
        </div>
        <div class="flex flex-col absolute justify-between h-full w-full p-4">
          <div class="flex justify-between">
            <div class="flex gap-2">
              <UIcon v-for="icon in $props.icons" :key="icon" :name="icon" class="size-8" />
            </div>
            <div v-if="props.url">
              <UButton v-if="!props.internal" color="gray" variant="solid" icon="i-heroicons-arrow-top-right-on-square"
                :to="props.url" target="_blank" rel="noreferrer noopener" :label="getDomain(props.url)" />
              <UButton v-if="props.internal" color="gray" variant="solid" icon="i-heroicons-arrow-right"
                :to="props.url" />
            </div>
          </div>
          <div>
            <div class="font-semibold text-xl">{{ props.title }}</div>
            <div class="line-clamp-3 text-sm">{{ props.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  icons: {
    type: Array as PropType<string[]>,
    default: []
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  internal: {
    type: Boolean,
    default: false
  },
  image: {
    type: String,
    default: ''
  },
  protected: {
    type: Boolean,
    default: false
  }
})
</script>

<style></style>