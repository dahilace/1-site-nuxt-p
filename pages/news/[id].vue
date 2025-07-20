<script setup lang="ts">
const route = useRoute();
const id = route.params.id;

import { newsList } from '~/components/sections/news/newsData';

const { data: news, error } = await useFetch(`/api/news/${id}`);

// if (!news.value) {
//   throw createError({
//     statusCode: 404,
//     statusMessage: 'Новость не найдена',
//   });
// }

if (error.value || !news.value) {
  throw createError({ statusCode: 404, statusMessage: 'Новость не найдена' });
}
</script>

<template>
  <!-- <section-base name="news-item" :title="id.toString()"></section-base> -->
  <div>
    <h1>{{ news.title }}</h1>
    <p>{{ news.desc }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
