<script setup lang="ts">
// import { RouterLink } from 'vue-router'
import { whySectionInfo } from './whySectionData';
defineOptions({
  title: 'Почему мы?',
});
</script>

<template>
  <section-base :title="$options.title" name="why">
    <ul class="why__list">
      <card-text
        v-for="(itemInfo, i) of whySectionInfo"
        class="why__info"
        :key="i"
        :data="itemInfo"
        :list="true"
      />
    </ul>
  </section-base>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins' as mixins;
.why__list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 0;
  flex-wrap: wrap;
  counter-set: list;
  @media (min-width: 1200px) {
    gap: 1rem;
    flex-direction: row;
  }
}
.why__info {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.5rem;
  max-width: 18rem;
  min-height: 15rem;
  aspect-ratio: 3/2;
  padding: 3rem 2rem;
  border-radius: 4px;
  background-color: var(--alt-bg);
  @include mixins.link-shadow;
  &:first-child {
    align-self: start;
    margin-bottom: -3.5rem;
    @media (min-width: 769px) {
      margin-bottom: -4.5rem;
    }
    @media (min-width: 1000px) {
      margin-bottom: -9.5rem;
    }
    @media (min-width: 1200px) {
      margin-bottom: 7rem;
    }
  }
  &:last-child {
    align-self: end;
    margin-top: -3.5rem;
    @media (min-width: 769px) {
      margin-top: -4.5rem;
    }
    @media (min-width: 1000px) {
      margin-top: -9.5rem;
    }
    @media (min-width: 1200px) {
      margin-top: 7rem;
    }

    // align-self: end;
  }
  &::before {
    top: 0;
    right: 0;
    transform: translateX(-50%);
    position: absolute;
    content: counter(list);
    counter-increment: list 1;
    // transform: translate(-50%);
    color: var(--main-color);
    font-size: 2.5rem;
    border-radius: 50%;

    // background-color: red;
  }
}
.why__link {
  align-self: flex-start;
}
.why__content-title {
  font-size: 1rem;
}
</style>
