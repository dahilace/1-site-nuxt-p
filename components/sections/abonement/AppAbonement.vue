<script setup lang="ts">
import { abonementSplideOptions } from '~/config/splide/abonement/splide.config';
import { abonementInfo } from './abonementData';

import { Splide, SplideSlide } from '@splidejs/vue-splide';

const refLists = ref(abonementInfo);
const currentListIndex = ref(0);

defineOptions({
  title: 'абонементы',
});
</script>

<template>
  <section-base :title="$options.title" name="abonement" link="abonements">
    <div class="abonement__btn-box btn-box">
      <my-button
        mode="btn"
        type="button"
        @click="currentListIndex = i"
        :class="{ 'btn--active': currentListIndex === i }"
        v-for="(info, i) in refLists"
        :key="i"
        >{{ info.type }}
      </my-button>
    </div>

    <!-- <transition name="fade" mode="out-in"> -->
    <div class="splide-wrapper">
      <splide
        class="abonement__splide"
        :options="abonementSplideOptions"
        :key="currentListIndex"
      >
        <splide-slide
          class="card"
          v-for="(card, i) in refLists[currentListIndex].data"
          :key="i"
        >
          <card-abonement :data="card" :isMarked="card.isMarked" />
        </splide-slide>
      </splide>
    </div>
    <!-- </transition> -->
    <p class="abonement__info">
      *Данные предложения действительны только для новых клиентов
    </p>
  </section-base>
</template>

<style lang="scss" scoped>
.splide-wrapper {
  display: flex;
  align-items: center;
  height: 20rem;
  overflow: hidden;
}
.abonement__inner {
  margin-inline: auto;
}
.abonement__splide {
  gap: 1rem;
}
.btn {
  display: inline-flex;
}
.abonement__btn-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}
</style>
