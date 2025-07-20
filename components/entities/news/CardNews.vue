<script setup lang="ts">
import type { CardNews } from '~/assets/types/types';

defineProps<{
  data: CardNews;
}>();
</script>

<template>
  <nuxt-link class="news__link" :to="`news/${data.id}`">
    <article class="news__card">
      <img class="news__img" :src="data.imgUrl" alt="news-img" loading="lazy" />
      <div class="news__info">
        <time :datetime="data.date.formatIso()" class="news__date">{{
          data.date.base
        }}</time>
        <h3 class="news__title marked upper">{{ data.title }}</h3>
        <p class="news__desc line-clamp-4">
          {{ data.brief || data.desc }}
        </p>
      </div>
      <svg-icon name="bookmark" class="news__icon w-5 h-5" />
    </article>
  </nuxt-link>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins' as mixins;
.news__card {
  position: relative;
  padding-bottom: 1rem;
  overflow: hidden;
  height: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  @include mixins.card-shadow;
  &:hover {
    .news__icon {
      fill: var(--main-color);
    }
  }
}
.news__info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.5rem;
  height: 100%;
}
.news__img {
  aspect-ratio: 4/3;
  object-fit: cover;
  object-position: 50%;
  max-width: 20rem;
  filter: brightness(90%);
}
.news__link {
  display: block;
  text-wrap: wrap;
  min-height: 20rem;
  height: 100%;
  transition: box-shadow 0.2s linear, color 0.2s linear;
  // padding: 1rem;
  // align-self: end;
}
.news__date {
  font-size: 0.6rem;
}
.news__link:hover {
  @include mixins.card-shadow-hover;
  .news__title {
    color: var(--link-hover);
  }
  .news__icon {
    color: var(--main-color);
  }
  .news__img {
    filter: brightness(100%);
  }
}
.news__icon {
  transition: color 0.2s linear;
  position: absolute;
  bottom: 4px;
  right: 4px;
  fill: var(--alt-bg);
}
</style>
