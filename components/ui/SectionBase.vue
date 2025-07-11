<script setup lang="ts">
defineProps<{
  title: string
  name: string
  link?: string
  route?: string
  classHeading: string
  noDecor?: boolean
  noMargin?: boolean
}>()
</script>

<template>
  <section class="section-padding" :class="name">
    <div class="container">
      <div class="section__inner" :class="`${name}__inner`">
        <my-heading v-if="title" :title :link :route :classHeading :noDecor :noMargin />
        <slot />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
