<script setup lang="ts">
import type { CardText } from '~/assets/types/types';

const props = defineProps<{
  data: CardText;
  list?: boolean;
}>();

const wrapperTag = props.list ? 'li' : 'div';
</script>

<template>
  <component :is="wrapperTag" class="card">
    <p class="card__title marked">{{ data.title }}</p>
    <p v-for="(descItem, i) in data.desc" :key="i">{{ descItem }}</p>
  </component>
</template>

<style lang="scss" scoped></style>
