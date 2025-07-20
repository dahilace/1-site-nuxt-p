<script setup lang="ts">
import { newsList } from './newsData';
import { newsSplideOptions } from '~/config/splide/news/splide.config';

import { Splide, SplideSlide } from '@splidejs/vue-splide';

defineOptions({
  title: 'новости клуба',
});
</script>

<template>
  <section-base :title="$options.title" name="news" link="news">
    <splide :options="newsSplideOptions">
      <splide-slide v-for="article in newsList" :key="article.id">
        <card-news :data="article" />
      </splide-slide>
    </splide>
  </section-base>
</template>

<style lang="scss" scoped>
.news__list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
:deep(.news__card) {
  margin-inline: auto;
}
</style>
