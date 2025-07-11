<script setup lang="ts">
import { headerNavData } from './headerNavData';
const navStore = useModalStore();
const dropdownStore = useDropdownMenuStore();

// const hiddenOnScroll = ref(false);
// let lastScrollY = window.scrollY;

// const handleScroll = function () {
//   if (window.innerWidth >= 769) {
//     const currentScrollY = window.scrollY;
//     hiddenOnScroll.value = currentScrollY > lastScrollY && currentScrollY > 100;
//     lastScrollY = currentScrollY;
//   } else {
//     hiddenOnScroll.value = false;
//   }

//   // закрытие dropdown при скролле
//   dropdownStore.close();
// };

// onMounted(() => {
//   window.addEventListener('scroll', handleScroll);
// });
// onBeforeUnmount(() => {
//   window.removeEventListener('scroll', handleScroll);
// });
</script>

<template>
  <!-- <header class="header" :class="[hiddenOnScroll ? 'translate-top' : '']"> -->
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__row header__row--mobile">
          <router-link to="/">
            <p class="header__title">БОКСЕРСКИЙ КЛУБ MOSCOWBOXING</p>
            <div class="header__decor-box">
              <svg-icon class="icons-decor" name="decor" />
              <svg-icon class="icons-decor" name="decor" />
            </div>
          </router-link>

          <router-link class="header__logo" to="/">
            <my-logo />
            <span class="marked logo__name">MOSCOWBOXING</span>
          </router-link>

          <div class="header__block">
            <div class="header__contact">
              <my-button mode="link" to="/price" class="btn--blank"
                >Купить абонемент</my-button
              >
              <a class="link header__link" href="tel:+74952013438"
                >+ 7 (495) 201 34 38</a
              >
            </div>
            <div class="header__mobile-block">
              <a class="header__mobile-link" href="tel:+74952013438">
                <svg-icon name="phone" class="icons-phone" />
              </a>
              <my-theme-change />
              <mobile-menu class="mobile-menu"></mobile-menu>
            </div>
          </div>
        </div>
        <my-nav-list
          :nav-items="headerNavData"
          class="header__nav"
          :class="navStore.isNavOpen ? 'header__nav--shown' : ''"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: auto;
  padding-block: 5px 0;
  position: fixed;
  transition: all 0.3s linear;
  width: 100%;
  z-index: 600;
  background-color: var(--alt-bg);
  box-shadow: 0px 0px 1px 0px var(--main-color);
  .mobile-menu {
    display: block;
  }
  .logo__name {
    display: inline;
    font-size: 1rem;
  }
  :deep(.nav__list) {
    flex-direction: column;
    height: 50%;
    justify-content: space-evenly;
    font-size: 1.25rem;
  }
  @media (min-width: 769px) and (min-height: 450px) {
    height: var(--header-height);
    padding-block: 5px 15px;
    .logo__name {
      display: none;
    }
    .mobile-menu {
      display: none;
    }
  }
}
.header__mobile-block {
  z-index: 500;
  display: flex;
  align-items: center;
  gap: 1rem;
  .header__theme-change {
    order: -1;
    @media (min-width: 769px) and (min-height: 450px) {
      order: 0;
    }
  }
  @media (max-width: 400px) {
    gap: 0.5rem;
  }
}
.header__mobile-link {
  z-index: 500;
}
.header__title {
  margin-bottom: 0.1rem;
  margin-top: 0.8rem;
  font-size: 1rem;
  line-height: 1.2rem;
  p {
    display: inline;
  }
}
.header__row {
  margin-bottom: 0.6rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  &--mobile {
    z-index: 1000;
  }
}
.header__block {
  display: flex;
  gap: 0.5rem;
}
.header__nav {
  .nav-list {
    justify-content: center;
    gap: 1.25rem;
  }
}
.header__link {
  padding: 0.5rem;
  display: none;
}
.header__decor-box {
  border-right: 2px solid var(--main-color);
  border-left: 2px solid var(--main-color);
  display: inline-flex;
  justify-content: start;
  & svg:last-child {
    margin-left: -2px;
  }
}

.header__decor-box,
.header__contact,
.header__title {
  display: none;
}
.header__row {
  margin-bottom: 0;
  align-items: center;
  justify-content: end;
  gap: 0;
  flex-direction: row-reverse;
}
.header__nav {
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--alt-bg);
  top: 0;
  transform: translateY(-100%);
  transition: transform 0.3s linear, background-color 0.3s linear;
  &--shown {
    transform: translateY(0);
  }
}
.header__logo {
  z-index: 500;
  display: flex;
  top: 1rem;
  left: 1rem;
  gap: 0.5rem;
  position: absolute;
  filter: drop-shadow(0px 0px 2px var(--accent-color));
  @media (max-width: 400px) {
    flex-direction: column-reverse;
  }
}

@media (min-width: 1000px) {
  .header__link {
    display: block;
  }
  .header__mobile-link {
    display: none;
  }
}
@media (min-width: 769px) and (min-height: 450px) {
  .header {
    :deep(.nav__list) {
      flex-direction: row;
      height: unset;
      justify-content: inherit;
      font-size: 0.9rem;
    }
  }
  .header__inner {
    display: flex;
    flex-direction: column;
  }
  .header__contact,
  .header__title {
    display: flex;
  }
  .header__decor-box {
    display: inline-flex;
  }
  .header__row {
    margin-bottom: 0.6rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 0.5rem;
    &--mobile {
      z-index: 1000;
    }
  }
  .header__logo {
    position: unset;
  }
  .header__nav {
    position: unset;
    transform: none;
    min-height: unset;
  }
  .header__contact {
    display: flex;
    flex-wrap: wrap;
    white-space: nowrap;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
