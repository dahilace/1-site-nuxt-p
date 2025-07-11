<script setup lang="ts">
import type { NavItem } from '~/assets/types/types';

const navStore = useModalStore();

defineProps<{
  data?: NavItem[];
}>();
</script>

<template>
  <ul class="dropdown">
    <li class="dropdown__item" v-for="item in data" :key="item.path">
      <router-link
        @click="navStore.closeNav()"
        class="link dropdown__link"
        :to="item.path"
        >{{ item.title }}</router-link
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.dropdown {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.8rem;
  position: absolute;
  top: 100%;
  left: -1px;
  z-index: 1000;
  text-transform: uppercase;
  background-color: var(--alt-bg);
  border-radius: 0 0 4px 4px;
  border: 1px solid cadetblue;
}
.dropdown__link {
  padding: 0.25rem;
}
</style>
