<template>
  <div class="p-4 flex flex-col">
    <div class="flex-grow flex flex-col py-12">
      <div class="flex items-center gap-2">
        <span class="font-semibold text-2xl">Fuad Elhasan Irfani</span>
        <span class="">@feilvan</span>
      </div>
      <span>Frontend Developer & Digital Artist</span>
      <div class="mt-2 space-x-1">
        <UButton v-for="s in sns" :key="s.to" color="gray" variant="ghost" :icon="s.icon" :to="s.to" target="_blank"
          rel="noreferrer noopener" />
        <UButton color="gray" variant="ghost" :icon="'i-heroicons-envelope'" to="mailto:hello@feilvan.art"
          label="hello@feilvan.art" />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
      <BentoCard v-for="post in posts" :key="post.id" class="h-96 bg-zinc-50 dark:bg-zinc-800" :title="post.title"
        :description="post.description" :icons="post.icons" :url="post.url" :internal="post.internal" :image="post.img"
        :protected="post.protected" />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>
