<script setup lang="ts">
import { newsList } from '~/components/sections/news/newsData';
</script>

<template>
  <section-base name="news-list">
    <ul class="flex flex-col gap-2">
      <ticket-news
        v-for="news in newsList"
        :key="news.id"
        :data="news"
      ></ticket-news>
    </ul>
  </section-base>
</template>

<style lang="scss" scoped></style>
