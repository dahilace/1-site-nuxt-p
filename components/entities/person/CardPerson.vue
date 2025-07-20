<script setup lang="ts">
import type { CoachInfo, PersonInfo } from '~/assets/types/types';

defineProps<{
  data: (PersonInfo & { socials: Record<string, string> }) | CoachInfo;
  type: 'coach' | 'sporsmen';
}>();
</script>

<template>
  <article class="person__card">
    <img class="person__img" :src="data.imgUrl" alt="person-img" />
    <p class="person__title">{{ data.name }}</p>
    <!-- <p v-for="desc in data.desc" class="data__desc line-clamp-4">{{ desc }}</p> -->
    <p class="person__desc line-clamp-4">{{ data.desc[0] }}</p>
    <div class="person__actions">
      <my-social
        v-if="data.socials"
        class="data__socials"
        :mode="'personal'"
        :person-socials="data.socials"
      />
      <my-button
        mode="link"
        class="person__btn btn--blank"
        :to="`${type}/${data.id}`"
        >Подробнее</my-button
      >
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/mixins' as mixins;
:deep(.link) {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.person__img {
  border-radius: 16px 4px;
  max-width: 12rem;
  aspect-ratio: 1/1;
}
.person__card {
  margin-inline: auto;
  padding: 1.5rem;
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  @include mixins.card-shadow;
  border-radius: 8px 2px;
  background-color: var(--alt-bg);
}
.person__actions {
  margin-top: auto;
}
.person__btn {
  align-self: start;
  margin-top: 0.5rem;
}
</style>
