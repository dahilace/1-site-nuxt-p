<script setup lang="ts">
import { aboutSplideOptions } from '~/config/splide/about/splide.config';
import { imgArray } from './aboutImgData';

import { Splide, SplideSlide } from '@splidejs/vue-splide';

defineOptions({
  title: 'О нас',
});
</script>

<template>
  <section-base :title="$options.title" name="about">
    <div class="about__content">
      <div class="about__info">
        <p class="about__text">
          <span class="marked upper">Клуб Moscowboxing</span> — ваша школа бокса
          в Москве с 2009 года. Мы официально аккредитованы
          <a
            class="about__link link marked underline"
            href="https://mos-boxing.ru/karta-bokserskih-zalov#!/tab/195318089-2"
            >Федерацией бокса Москвы</a
          >, а наши воспитанники регулярно попадают в сборные команды.
        </p>
        <p>
          Наша миссия — формирование сильного характера и здорового поколения.
        </p>
      </div>

      <splide :options="aboutSplideOptions">
        <splide-slide class="card" v-for="(card, i) in imgArray" :key="i">
          <card-photo :data="card" />
          <!-- <my-card :cardType="1" :data="card" /> -->
          <!-- <img class="about__img" :src="card.imgUrl" alt="gallery-img" loading="lazy" /> -->
        </splide-slide>
      </splide>

      <div class="about__info-block">
        <p class="about__text">
          Сеть залов по всей <span class="marked">Москве</span> — каждый из них
          оснащён профессиональным инвентарём: ринги, маты, зеркала, отягощения
          — чтобы тренировки были не только интенсивными, но и комфортными.
        </p>
        <p class="about__text">
          Команда тренеров — мастера спорта, КМС, победители российских и
          международных турниров, обладающие многолетним опытом. Они проводят и
          групповые, и индивидуальные занятия, адаптированные под новичков,
          женщин, детей и профессионалов.
        </p>
      </div>

      <!-- <p class="slogan">
            <span>Терпение.</span>
            <span>Труд.</span>
            <span>Победа.</span>
          </p> -->
    </div>
  </section-base>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins' as mixins;
.card {
  @include mixins.card-shadow;
}
.about__content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.about__info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.about__info-block {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
  // flex-wrap: wrap;
}
.about__text {
  max-width: 40rem;
  text-wrap: pretty;
}
.about__link {
  display: inline;
}
.about__img {
  aspect-ratio: 4/3;
  object-fit: cover;
}
.slogan {
  font-family: 'Arials', sans-serif;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
}
.slogan span {
  display: block;
  color: var(--accent-color); /* золотой акцент */
  text-shadow: 0 0 10px var(--alt-bg);
}
.splide__slide {
  &::before {
    position: absolute;
    content: '';
    inset: 0;
    background-color: var(--overlay-image-op);
    width: 100%;
    height: 100%;
    z-index: 1011;
  }
}
</style>
