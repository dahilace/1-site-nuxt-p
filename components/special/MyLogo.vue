<script setup lang="ts"></script>

<template>
  <div class="logo__box">
    <!-- <img class="logo__img" :src="/images/logo.png" alt="logo" /> -->
    <img class="logo__img" :src="'/images/logo.png'" alt="logo" />
  </div>
</template>

<style lang="scss" scoped>
.logo__img {
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  max-width: 54px;
  max-height: 80px;
  min-width: 40px;
  min-height: 40px;
  @media (min-width: 769px) {
    max-width: 80px;
  }
}
</style>
