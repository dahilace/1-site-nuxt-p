<script setup lang="ts">
// IMG ONLY
import type { Img } from '~/assets/types/types';
defineProps<{
  data: Img;
}>();
</script>

<template>
  <img alt="gallery-image" class="img-only" :src="data.imgUrl" loading="lazy" />
</template>

<style lang="scss" scoped>
img {
  min-height: 15rem;
  text-align: center;
}
</style>
