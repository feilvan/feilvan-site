<template>
  <ULink to="/">
    <UCard :class="props.class" :ui="uiBody">
      <div>asd</div>
      <template #footer>
        <span class="text-lg font-semibold">{{ props.title }}</span>
        <span>{{ props.description }}</span>
      </template>
    </UCard>
  </ULink>
</template>

<script lang="ts" setup>
const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
})

const uiBody = {
  "base": "overflow-hidden",
  body: {
    "padding": "p-0 h-24 bg-zinc-900 dark:bg-white",
  },
  footer: {
    "base": "flex flex-col gap-2"
  }
}
</script>

<style></style>