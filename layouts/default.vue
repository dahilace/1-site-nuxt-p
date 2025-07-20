<script setup lang="ts">
// import AppHeader from '~/widgets/shell/header/ui/AppHeader.vue';
// import AppFooter from '~/widgets/shell/footer/ui/AppFooter.vue';
</script>

<template>
  <div class="wrapper" @click="console.log('clicked')">
    <app-header />
    <main>
      <slot />
    </main>
    <app-footer />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
