<script setup lang="ts">
import { footerNavData } from './footerNavList';
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__row">
          <div class="footer__brand">
            <router-link to="/">
              <my-logo />
            </router-link>
            <router-link to="/" class="footer__name">
              <p>БОКСЕРСКИЙ КЛУБ <span class="marked">MOSCOWBOXING</span></p>
              <!-- <icon-decor></icon-decor> -->
            </router-link>
          </div>
          <my-nav-list :nav-items="footerNavData" class="footer__nav" />
        </div>
        <div class="footer__row footer__contact">
          <a
            class="link footer__link marked"
            href="mailto:info@moscowboxing.ru"
          >
            <svg-icon name="mail" class="w-5 h-5" />
            info@moscowboxing.ru
          </a>
          <my-social mode="global" class="footer__social"
            ><p class="footer__call">
              Подписывайтесь на нас в соцсетях
            </p></my-social
          >
        </div>
        <div class="footer__row">
          <!-- <a href="#" rel="nofollow" class="anchor link">
            <icon-arrow-top />
            Наверх</a
          > -->
          <div class="copyright">
            <router-link to="/"
              >2009 -
              {{ new Date().getFullYear() }} ©Moscowboxing.ru</router-link
            >
            <p>Все права защищены</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  z-index: 500;
  padding-block: 3rem 0.5rem;
  background-color: var(--alt-bg);
  margin-top: auto;
  position: relative;
  .copyright {
    flex: 1;
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  .anchor {
    display: flex;
    align-items: center;
  }
}
.footer__inner {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // flex-wrap: wrap;
  width: 100%;
  & > a {
    align-self: flex-end;
  }
}

.footer__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 3rem;
}

.footer__brand {
  display: flex;
  align-items: center;
}
.footer__name {
  max-width: 10rem;
  margin: auto 0.8rem;
  p {
    line-height: 32px;
  }
}
.footer__nav {
  .nav__list {
    justify-content: end;
    // gap: 0.5rem 2.5rem;
    a {
      padding: 0.5rem;
    }
  }
  &:deep(.dropdown) {
    position: unset;
  }
}
.footer__link {
  display: flex;
  align-items: center;
  gap: 0.5rem 1rem;
  svg {
    fill: none;
    stroke: var(--accent-color);
  }

  &:hover,
  &:focus {
    .icon {
      fill: none;
      stroke: var(--link-hover);
    }
  }
}
.social__list {
  gap: 0.5rem;
}
.footer__call {
  display: none;
  @media (min-width: 769px) {
    display: block;
  }
}
</style>
