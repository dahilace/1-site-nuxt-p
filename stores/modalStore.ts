import { defineStore } from "#imports";

import type { ModalMode } from "~/assets/types/modalMode";

const allowedModes: (ModalMode)[] = ['comment', 'training', null]

export const useModalStore = defineStore('modal', {
  state: () => ({
    isModalOpen: false,
    isNavOpen: false,
    modalMode: null as ModalMode
  }),
  actions: {
    openModalMode(rawMode: unknown) {
      if (!allowedModes.includes(rawMode as ModalMode)) {
        console.warn(`[ModalStore] Неверный mode:`, rawMode)
        return
      }

      const mode = rawMode as ModalMode

      if (mode === null) return

      this.isModalOpen = true
      this.modalMode = mode
    },
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      this.modalMode = null
    },
    openNav() {
      this.isNavOpen = true
    },
    closeNav() {
      this.isNavOpen = false
    }
  }
})
