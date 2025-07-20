// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore

export default defineNuxtConfig({
  // srcDir: '0_app',
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: {
    dirs: [
      { path: 'nuxt/dist/app/components', pathPrefix: false },
      { path: '~/components/shell/', pathPrefix: false },
      { path: '~/components/special/', pathPrefix: false },
      { path: '~/components/nav/', pathPrefix: false },
      { path: '~/components/ui/', pathPrefix: false },
      { path: '~/components/sections/', pathPrefix: false },
      { path: '~/components/entities/', pathPrefix: false },
    ],
  },
  css: ['~/assets/styles/index.scss'],
  modules: ['@nuxtjs/svg-sprite', '@pinia/nuxt', '@nuxtjs/tailwindcss', 'vue-yandex-maps/nuxt'],
  svgSprite: {
    // input: 'assets/sprites/svg',
    // output: '0_app/assets/sprites/gen',
  },
  yandexMaps: {
    apikey: process.env.YANDEX_MAP,
    lang: 'ru_RU',
  },
  app: {
    head: {
      script: [
        {
          innerHTML:
            `(function() {
              try {
                const theme = localStorage.getItem('mosbox-theme') || 'system'
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                const isDark = theme === 'dark' || (theme === 'system' && prefersDark)
                document.documentElement.classList.add(isDark ? 'dark' : 'light')
                localStorage.setItem('mosbox-theme', isDark ? 'dark' : 'light')
              } catch(e) {}
            })()`,
          tagPosition: 'head',
        }
      ]
    }
  },
})