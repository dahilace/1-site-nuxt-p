<script setup lang="ts">
defineProps<{
  src: string;
}>();
</script>

<template>
  <div class="video-wrapper">
    <iframe
      class="video"
      :src
      title="YouTube video player"
      frameborder="0"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style lang="scss" scoped>
.video {
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 400px;
  aspect-ratio: 2/1;
}
.video-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
