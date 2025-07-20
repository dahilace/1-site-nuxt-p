<script setup lang="ts">
defineProps<{
  name: string;
  title?: string;
  link?: string;
  route?: string;
  classHeading?: string;
  noDecor?: boolean;
  noMargin?: boolean;
}>();
</script>

<template>
  <section class="section-padding" :class="name">
    <div class="container">
      <div class="section__inner" :class="`${name}__inner`">
        <section-heading
          v-if="title"
          :title
          :link
          :route
          :classHeading="classHeading || ''"
          :noDecor
          :noMargin
        />
        <slot />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
