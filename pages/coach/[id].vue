<script setup lang="ts">
import { coachInfoArray } from '~/components/sections/coach/coachData';
const route = useRoute();
const id = route.params.id;
const coach = coachInfoArray.data.find((el) => el.id === id);
console.log(coach);
</script>

<template>
  <section-base name="coach-item" :title="coach?.name">
    <my-social mode="personal" :personSocials="coach?.socials"></my-social>
    <p v-for="spec in coach?.specs">
      {{ spec }}
    </p>
    <img
      :src="coach?.imgUrl"
      :alt="coach?.name"
      class="aspect-square coach-item__img"
    />
    <p v-for="descParagraph in coach?.desc">
      {{ descParagraph }}
    </p>
  </section-base>
</template>

<style lang="scss" scoped>
.coach-item__img {
  max-width: 15rem;
}
</style>
