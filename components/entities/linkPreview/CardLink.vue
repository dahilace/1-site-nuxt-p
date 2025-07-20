<script setup lang="ts">
import type { CardInfo } from '~/assets/types/types';
const loaded = ref(true);
defineProps<{
  data: CardInfo;
  noDecor?: boolean;
}>();
</script>

<template>
  <li class="card">
    <div class="card__desc">{{ data.desc }}</div>
    <img
      class="card__img"
      :src="data.imgUrl"
      :class="{ 'img-loaded': loaded, 'img-error': !loaded }"
      alt="card-image"
      @load="loaded = true"
      @error="loaded = false"
    />
    <article v-if="data.title || data.desc" class="card__info">
      <h3 class="card__name" v-if="data.title">{{ data.title }}</h3>
      <!-- <p class="card__link-desc"></p> -->
      <router-link :to="data.router" class="card__link"></router-link>
    </article>
    <svg-icon name="decor" v-if="!noDecor" class="card__decor" />
  </li>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins' as mixins;
.card {
  position: relative;
  overflow: hidden;
  max-width: 20rem;
  width: 100%;
  // @include mixins.link-shadow;
  transition: transform 0.3s linear, box-shadow 0.3s linear;
  &::after {
    content: '';
    inset: 0;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-image);
    z-index: 1;
  }
  &:hover,
  &:focus {
    // @include mixins.none-shadow;
    .card__desc {
      transform: translateY(-1%);
    }
  }
}
.card__desc {
  z-index: 51;
  background-color: var(--accent-color);
  position: absolute;
  width: 100%;
  height: 102%;
  inset: 0;
  transform: translateY(100%);
  transition: transform 0.2s linear;
  pointer-events: none;
}
.card__decor {
  position: absolute;
  top: 50%;
  left: calc(var(--decor-width) / -2);
  transform: translateY(var(--decor--height-transform)) rotate(90deg);
}
.card__info {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding-top: 1.25rem;
  padding-inline: 2rem;
  z-index: 10;
  top: 0;
  position: absolute;
  justify-content: space-evenly;
}
.card__name {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-shadow: 1px 1px var(--alt-bg);
}

.card__img {
  width: 100%;
  height: 100%;
  aspect-ratio: 3/2;
  opacity: 0.75;
  z-index: -1;
}
.card__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}
</style>
