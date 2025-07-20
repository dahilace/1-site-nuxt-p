<script setup lang="ts">
defineProps<{
  src: string;
}>();
</script>

<template>
  <section-base name="video">
    <my-youtube-video :src="src" />
  </section-base>
  <!-- allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" -->
</template>

<style lang="scss" scoped>
:deep(.video__inner) {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
