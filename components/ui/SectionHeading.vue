<script setup lang="ts">
defineProps<{
  link?: string;
  route?: string;
  title: string;
  classHeading: string;
  noDecor?: boolean;
  noMargin?: boolean;
}>();
</script>

<template>
  <div
    class="section__heading"
    :class="[classHeading, { 'section__heading--margin': !noMargin }]"
  >
    <p v-if="route" class="section__route">{{ route }}</p>
    <div class="section__heading-block">
      <div class="section__title-block">
        <svg-icon name="decor" />
        <h2 class="section__title">
          {{ title }}
        </h2>
      </div>
      <router-link class="section__link link underline" v-if="link" :to="link"
        ><span>Все</span> <span class="lower">{{ title }}</span></router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section__heading {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
}
.section__heading--margin {
  margin-bottom: 5rem;
}
.section__heading-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.section__title-block {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.section__title {
  white-space: wrap;
  font-family: 'Noto Sans';
  font-size: 1.6rem;
  text-transform: uppercase;
  // margin-bottom: 4rem;
}
.section__link {
  text-transform: capitalize;
}
.section__route {
  margin-top: 1rem;
}

.icon {
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
}
</style>
