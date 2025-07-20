<script setup lang="ts"></script>

<template>
  <section
    class="hero section-padding section-padding--double"
    :style="{ backgroundImage: 'url(/images/hero-bg.jpg)' }"
  >
    <!-- <section
    class="hero section-padding section-padding--double"
    :style="{ backgroundImage: url('/images/hero-bg.jpg') }"
  > -->
    <div class="container">
      <div class="hero__inner">
        <div class="hero__general">
          <div class="hero__info">
            <h1 class="hero__title">
              ДОБРО ПОЖАЛОВАТЬ В ШКОЛУ БОКСА В МОСКВЕ
              <span class="brand">MOSCOWBOXING!</span>
            </h1>
            <p class="hero__subtitle">
              <!-- «Здесь закаляется характер, развивается сила и рождается уверенность в себе. -->
              Тренировки для начинающих и опытных. Мы научим тебя побеждать — в
              ринге и в жизни.
            </p>
          </div>
          <!-- <div class="hero__contact">
            <p class="subtitle hero__subtitle">БУТОВО</p>
            <a class="link hero__link" href="tel:+74951049628">+7 (495) 104-96-28</a>
            <address>м.Скобелевская, ул. Изюмская, 22к3</address>
          </div> -->
          <div class="hero__btn-box">
            <my-button
              class="hero__btn btn--mwidth"
              mode="modal"
              :modalMode="'training'"
              >Онлайн запись</my-button
            >
            <my-button class="hero__btn btn--mwidth" mode="link"
              >Посмотреть залы</my-button
            >
          </div>
        </div>
        <my-social mode="global" class="hero__social" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  color: var(--white);
  display: flex;
  height: calc(100vh - var(--header-height));
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 55% 50%;
  // background-image: url('images/hero-bg.jpg');
  @media (max-height: 450px) {
    padding: 2rem 0;
  }
  &::before {
    content: '';
    position: absolute;
    display: block;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: var(--overlay-image);
    // background-image:
    //   linear-gradient(rgba(26, 26, 26, 0.45), rgba(196, 196, 196, 0.75)),
    //   linear-gradient(rgba(196, 196, 196, 0.75), rgba(26, 26, 26, 0.45));
    // background-blend-mode: multiply;
  }
  &__inner {
    display: flex;
    position: relative;
    top: 0;
    padding-inline: var(--container-padding);
    width: 100%;
    max-width: calc(var(--container-width) + var(--container-padding) * 2);
    justify-content: center;
    z-index: 10;
    @media (min-height: 450px) {
      flex-direction: column;
    }
  }
  &__general {
    display: flex;
    gap: 1rem;
    align-self: flex-start;
    @media (min-height: 450px) {
      // gap: unset;
      justify-content: space-evenly;
      flex-direction: column;
    }
  }
  .container {
    padding-block: 4.6rem;
    display: flex;
    min-height: 100%;
  }
}
.hero__title {
  // padding-top: 4.6rem;
  margin-bottom: 2rem;
  max-width: 27rem;
  font-size: 2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  text-shadow: 1px 1px var(--main-bg);
  span {
    color: var(--accent-color);
  }
}
.hero__subtitle {
  text-wrap: pretty;
  font-size: 1rem;
  max-width: 21rem;
}
// .hero__title:not(.marked),
// .hero__subtitle:not(.marked) {
//   text-shadow: 1px 1px var(--accent-color);
// }
.hero__info {
  align-self: start;
  padding: 1.5rem 1rem;
  border-radius: 4px;
  background-color: var(--overlay-text);
  @media (max-width: 400px) {
    padding: 1rem 0.5rem;
  }
}
.hero__contact {
  max-width: 11rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.hero__btn-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (min-height: 450px) {
    margin-top: 3rem;
    justify-content: start;
    gap: 1rem;
  }
}
.hero__btn {
  align-self: start;
  display: inline;
}

.hero__social {
  margin-block: 3rem;
  align-self: flex-start;
  gap: 0.25rem;
  @media (max-height: 450px) {
    :deep(.socials__list) {
      display: block;
    }
  }
}
.hero__link {
  color: var(--white);
}

@media (min-width: 769px) {
  .hero {
    margin-bottom: 2.5rem;
  }
}
</style>
