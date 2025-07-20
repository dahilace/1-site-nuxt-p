<script setup lang="ts">
// defineProps({
//   type:
// })
defineOptions({
  name: 'my-input',
})
defineProps<{
  mode: 'input' | 'textarea'
}>()
</script>

<template>
  <input v-if="mode === 'input'" class="input" maxlength="42" />
  <textarea v-else placeholder="Ваш отзыв" class="textarea" maxlength="400"></textarea>
</template>

<style lang="scss" scoped>
.input,
.textarea {
  position: relative;
  padding: 0.6rem 1.2rem;
  border: 2px solid var(--main-color);
  &::placeholder {
    color: var(--main-color-op);
  }
  &:placeholder-shown {
    border-color: var(--accent-color);
  }
}

.textarea {
  max-height: 8rem;
  resize: none;
}
.search {
  align-self: start;
}
</style>
