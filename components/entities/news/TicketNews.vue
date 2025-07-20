<script setup lang="ts">
import type { CardNews } from '~/assets/types/types';

defineProps<{
  data: CardNews;
}>();
</script>

<template>
  <article class="news__ticket">
    <img class="news__img" :src="data.imgUrl" alt="news-img" loading="lazy" />
    <div class="news__info">
      <div class="news__details">
        <button type="button" class="news__tag link marked" @click.prevent>
          {{ data.tag }}
        </button>
        <time :datetime="data.date.formatIso()" class="news__date">{{
          data.date.base
        }}</time>
      </div>
      <h3 class="news__title marked upper">{{ data.title }}</h3>
      <p class="news__desc line-clamp-2">
        {{ data.brief || data.desc }}
      </p>
      <nuxt-link class="news__link marked link" :to="`news/${data.id}`"
        >Читать далее</nuxt-link
      >
    </div>
  </article>
</template>

<style lang="scss" scoped>
.news__ticket {
  justify-content: center;
  display: flex;
  gap: 1rem;
  width: 100%;
  max-height: 12rem;
}
.news__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 40rem;
  width: 100%;
}
.news__details {
  display: flex;
  justify-content: space-between;
}
.news__img {
  max-width: 15rem;
  aspect-ratio: 3/2;
}
.news__tag {
  align-self: start;
}
.news__link {
  align-self: flex-end;
}
</style>
