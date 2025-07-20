<script setup lang="ts">
import type { CardTicket } from '~/assets/types/types';

defineProps<{
  data: CardTicket;
  isMarked: boolean;
}>();
</script>

<template>
  <div
    class="ticket"
    :class="{
      'ticket--marked': isMarked,
    }"
  >
    <p class="ticket__title marked">{{ data.title }}</p>
    <p class="ticket__desc">{{ data.desc }}</p>
    <div class="ticket__numbers">
      <p class="ticket__time">{{ data.time || '1 час 30 минут' }}</p>
      <p class="ticket__price">{{ data.price }} ₽</p>
    </div>
    <p class="ticket__add" v-if="data.additional">
      + {{ data.additional.title }} в подарок
    </p>
    <my-button class="ticket__btn" mode="link">Купить</my-button>
  </div>
</template>

<style lang="scss" scoped>
.ticket {
  padding: 0.5rem 1rem;
  max-width: 20rem;
  margin-inline: auto;
  overflow: hidden;
  position: relative;
  border: 2px solid var(--accent-color);
  background-color: var(--alt-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-block: 2rem;
  border-radius: 4px;
  gap: 2rem;
  &--marked {
    &::after {
      top: 0.75rem;
      right: -1.5rem;
      font-size: 0.6rem;
      position: absolute;
      content: 'Выгодно';
      background-color: var(--accent-color);
      padding: 0.25rem 1.5rem;
      rotate: 45deg;
      color: var(--btn-color);
    }
  }
  &:has(.ticket__btn:hover) {
    border: 2px solid var(--link-hover);
    &::after {
      background-color: var(--link-hover);
    }
    .ticket__add {
      background-color: var(--link-hover);
    }
    .ticket__title {
      color: var(--link-hover);
    }
  }
}
.ticket__title {
  text-transform: uppercase;
}
.ticket__desc {
  width: 100%;
  text-transform: lowercase;
  text-wrap: balance;
  max-width: 10rem;
  text-align: center;
  &::first-letter {
    text-transform: uppercase;
  }
}
.ticket__numbers {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.ticket__add {
  bottom: 0;
  position: absolute;
  text-align: center;
  width: 100%;
  padding: 0.25rem;
  background-color: var(--accent-color);
  color: var(--btn-color);
  white-space: nowrap;
}
</style>
