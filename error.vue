<!-- pages/[...all].vue -->
<script setup>
const route = useRoute();
defineOptions({
  title: '404 - Страница не найдена',
});

defineProps({
  error: Object,
});
</script>

<template>
  <section-base
    name="not-found"
    class="section-padding--double"
    :title="$options.title"
    :style="{ backgroundImage: 'url(/404.gif)' }"
    noDecor
    noMargin
  >
    <p class="not-found__subtitle">Такой страницы не существует!</p>
    <my-button mode="link" class="not-found__link" :to="'/'"
      >Вернуться на главную</my-button
    >
  </section-base>
</template>

<style lang="scss" scoped>
:deep(.container) {
  display: flex;
}
:deep(.not-found__inner) {
  margin-block: auto;
  display: inline-block;
  padding: 2rem;
  background-color: var(--overlay-text);
  border-radius: 4px;
}
.not-found {
  position: relative;
  display: flex;
  flex: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 55% 95%;
  background-blend-mode: hue;
  background-color: var(--overlay-image);
  // .container {
  //   z-index: 1;
  // }
}
.not-found__title {
  white-space: wrap;
  // margin-bottom: 1rem;
}
.not-found__link {
  display: inline-block;
}
</style>

<!-- <script setup>
defineProps({
  error: Object,
});
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold text-red-600">
      Ошибка {{ error.statusCode }}
    </h1>
    <p class="text-xl mt-4 text-gray-700">
      {{ error.statusMessage || 'Что-то пошло не так' }}
    </p>
    <NuxtLink to="/" class="mt-6 text-blue-600 underline"
      >Вернуться на главную</NuxtLink
    >
  </div>
</template> -->
