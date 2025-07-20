<script setup lang="ts">
// import MyGallery from '../ui/lists/MyGallery.vue'
// import IconDecor from '../icons/IconDecor.vue'

import { coachInfoArray } from './coachData';
import { coachSplideOptions } from '~/config/splide/coach/splide.config';

import { Splide, SplideSlide } from '@splidejs/vue-splide';

// import MyCard from '../ui/lists/MyCard.vue'

defineOptions({
  title: 'Наши тренеры',
});
</script>

<template>
  <section-base :title="$options.title" name="coach" link="coaches">
    <splide :options="coachSplideOptions">
      <splide-slide v-for="(coach, i) in coachInfoArray.data" :key="i">
        <card-person :data="coach" type="coach" />
      </splide-slide>
    </splide>
  </section-base>
</template>

<style lang="scss" scoped></style>
