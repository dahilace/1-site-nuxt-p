<script setup lang="ts">
const theme = useThemeStore();
</script>

<template>
  <button @click="theme.toggleTheme" type="button" class="theme-change">
    <svg-icon name="theme" />
  </button>
</template>

<style lang="scss" scoped>
.icons {
  width: 2rem;
  aspect-ratio: 1/1;
  fill: var(--main-color);
}
.theme-change {
  &:focus {
  }
}
</style>
