import { defineStore } from "#imports";
import type { Theme } from "~/assets/types/theme.type";

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'system' as Theme
  }),

  actions: {
    initTheme() {
      if (import.meta.client) {
        this.theme = localStorage.getItem('mosbox-theme') as Theme
      }
    },
    toggleTheme() {
      document.documentElement.classList.remove('light', 'dark')
      const newTheme = this.theme === 'dark' ? 'light' : 'dark'
      this.theme = newTheme
      localStorage.setItem('mosbox-theme', newTheme)
      document.documentElement.classList.add(newTheme)
    }
  }
})
