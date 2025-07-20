<script setup lang="ts">
import { directionsData } from './directionsData';

defineOptions({
  title: 'Наши направления',
});
</script>

<template>
  <section-base :title="$options.title" name="directions">
    <ul class="directions__list">
      <card-link
        v-for="(card, i) in directionsData"
        :data="card"
        :key="i"
        noDecor
      />
    </ul>
  </section-base>
</template>

<style lang="scss" scoped>
.directions__list {
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(11rem, 20rem));
    gap: 1.5rem;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, minmax(11rem, 20rem));
  }
}
</style>
