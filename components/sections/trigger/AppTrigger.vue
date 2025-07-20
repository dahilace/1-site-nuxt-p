<script setup lang="ts">
defineOptions({
  title: 'Обучение боксу в Москве — от нуля до КМС',
});
</script>

<template>
  <section-base name="trigger" :title="$options.title" noDecor>
    <p class="subtitle">
      Тренировки для всех уровней в 7 залах Москвы. Запишитесь на пробное
      занятие!
    </p>
    <my-button mode="modal" modalMode="training" class="trigger__btn"
      >Записаться на пробную тренировку
    </my-button>
    <img class="trigger__img" :src="'/images/trigger/1.jpg'" alt="тренировка" />
  </section-base>
</template>

<style lang="scss" scoped>
.trigger__img {
  max-width: 20rem;
  aspect-ratio: 4/3;
}
</style>
