export default defineNuxtPlugin(() => {
  const theme = useThemeStore()
  theme.initTheme()
})