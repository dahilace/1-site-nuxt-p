<script setup lang="ts">
import { coachInfoArray } from '~/components/sections/coach/coachData';
defineOptions({
  title: 'Тренеры',
  type: 'coach',
});
</script>

<template>
  <section-base name="coach-page" :title="$options.title">
    <ul class="coach-page__list grid gap-3">
      <card-person
        v-for="(coach, i) in coachInfoArray.data"
        :type="$options.type"
        :key="i"
        :data="coach"
      ></card-person>
    </ul>
  </section-base>
</template>

<style lang="scss" scoped>
.coach-page__list {
  grid-template-columns: repeat((auto-fit, minmax(16rem, 1fr)));
  justify-content: center;
  justify-items: center;
  align-items: center;
}
</style>
