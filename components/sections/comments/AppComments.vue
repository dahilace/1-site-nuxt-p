<script setup lang="ts">
import { commentSplideOptions } from '~/config/splide/comment/splide.config';
import { comments } from './commentsData';

import { Splide, SplideSlide } from '@splidejs/vue-splide';

defineOptions({
  title: 'отзывы',
});
</script>

<template>
  <section-base :title="$options.title" name="comments" link="comments">
    <splide class="comments__splide" :options="commentSplideOptions">
      <splide-slide
        class="comments__card"
        v-for="(comment, i) in comments"
        :key="i"
      >
        <card-comment :data="comment" />
      </splide-slide>
    </splide>
  </section-base>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins' as mixins;

:deep(.splide__slide) {
  // z-index: 1000 !important;
  // overflow: visible !important;
  cursor: grab;
  align-items: center;
  justify-content: center;
}
.comments__splide {
  padding: 1rem 3rem;
  // margin-inline: auto;
}
.comments__card {
  margin-inline: auto;
  max-width: 42rem;
  position: relative;
  margin-inline: auto;
  padding: 1.5rem 1.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--alt-bg);
  border-radius: 8px;
  @include mixins.card-shadow;

  @media (min-width: 600px) {
    padding: 4.5rem 3rem 2rem;
  }
  @media (min-width: 769px) {
    font-size: 1.25rem;
  }
}
</style>
