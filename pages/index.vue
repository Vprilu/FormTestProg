<script setup lang="ts">
  useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    keywords: 'keywords1, keywords2',
  })
</script>

<template>
  <div>
    <div
      class="block h-10 w-10 bg-[url('/favicon.png')] bg-cover bg-center"></div>
    <h1 class="text-c_blue font-mont text-center text-xl font-bold">
      Hello World!
    </h1>
    <NuxtImg src="/favicon.png"></NuxtImg>
  </div>
</template>
<style></style>
