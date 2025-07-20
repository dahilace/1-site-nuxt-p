<script setup lang="ts">
import type { NavItem } from '~/assets/types/types';

const menuStore = useDropdownMenuStore();
const props = defineProps<{ navItems: NavItem[] }>();
const nav = reactive(props.navItems);
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <my-nav-item
        v-for="(item, index) of nav"
        :data="item"
        :key="index"
        :index
        @click.stop="item.dropdown && menuStore.toggle(index)"
      />
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav__list {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.9rem;
  line-height: 21px;
  z-index: 200;
}
.nav__item {
  position: relative;
}
</style>
