<script setup lang="ts">
defineProps<{
  data: {
    comment: string;
    mark: string;
    name: string;
  };
}>();
</script>

<template>
  <svg-icon name="quotes" class="comments__quotes" />
  <p class="comments__desc">{{ data.comment }}</p>
  <div class="comments__mark">
    <svg-icon
      name="star"
      v-for="int of +data.mark"
      :key="int"
      class="comments__mark w-5 h-5"
    />
  </div>
  <p class="comments__name upper">{{ data.name }}</p>
</template>

<style lang="scss" scoped>
.comments__mark {
  display: flex;
  gap: 0.2rem;
}
.comments__quotes {
  top: 10%;
  left: -2%;
  transform: translate(-30%, -50%);
  position: absolute;
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
  @media (min-width: 769px) {
    left: 0;
    top: 25%;
    transform: translate(-50%, -50%);
  }
}
.comments__mark {
  fill: var(--main-bg);
  stroke: var(--accent-color);
}
</style>
