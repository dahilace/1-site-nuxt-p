<script setup lang="ts">
const error = useError();

defineOptions({
  title: '404',
});
</script>

<template>
  <p>Такой страницы не существует</p>
  <!-- <section-base :title="$options.title" name="error">404</section-base> -->
</template>

<style lang="scss" scoped>
main {
  margin-top: 0;
}
</style>
