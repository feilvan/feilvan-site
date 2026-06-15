<script setup lang="ts">
const theme = ref("SHIS")
onBeforeMount(() => {
  theme.value = "cdass"
})
</script>

<template>
  <div bg-red text-white>This is da ref: {{ theme }}</div>
</template>