<script setup lang="ts">
const modal = useModalStore();
const open = (mode: 'comment' | 'training') => {
  modal.openModalMode(mode);
};

defineOptions({
  name: 'my-button',
});

defineProps<{
  mode: 'link' | 'btn' | 'modal';
  modalMode?: 'comment' | 'training';
  type?: 'button' | 'submit';
}>();
</script>

<template>
  <button
    v-if="mode === 'modal' && modalMode"
    class="btn"
    type="button"
    @click.prevent="open(modalMode)"
  >
    <slot />
  </button>

  <button v-else-if="mode === 'btn'" class="btn" :type="type" @click.prevent>
    <slot />
  </button>

  <router-link v-else-if="mode === 'link'" class="btn" to="">
    <slot />
  </router-link>
</template>

<style lang="scss" scoped>
// @use '~/assets/styles/mixins' as mixin;
.btn {
  display: inline-flex;
  justify-content: center;
  padding: 0.8rem 1rem;
  border: 2px solid var(--accent-color);
  background-color: var(--accent-color);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700px;
  line-height: 1;
  border-radius: 4px;
  transition: box-shadow 0.1s linear;
  box-shadow: 0 0 2px var(--accent-color);
  &:not(.btn--active):hover,
  &:not(.btn--active):focus {
    border: 2px solid var(--link-hover);
    background-color: var(--link-hover);
    box-shadow: 0 0 1px var(--accent-color);
  }
  &:not(.btn--blank, .btn--active) {
    color: var(--btn-color);
  }
}
.btn--active {
  border: 2px solid var(--link-hover);
  background-color: var(--btn-color);
  color: var(--accent-color);
}
.btn--blank {
  background-color: transparent;
  text-transform: none;
  box-shadow: 0 0 8px var(--accent-color);
}
.btn--mwidth {
  min-width: 12rem;
}
</style>
