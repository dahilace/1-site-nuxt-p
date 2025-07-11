import { defineStore } from "#imports";

export const useDropdownMenuStore = defineStore('dropdownMenu', {
  state: () => ({
    openIndex: null as number | null,
  }),
  actions: {
    toggle(index: number | null) {
      this.openIndex = this.openIndex === index ? null : index
    },
    close() {
      this.openIndex = null
    }
  }
})
