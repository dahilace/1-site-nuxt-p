import { defineStore } from "#imports";

export const useLessonsStore = defineStore('lessons', {
  state: () => ({
    openIndex: 0 as number
  }),
  actions: {
    toggle(index: number) {
      this.openIndex = index
    }
  }
})
