// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore

export default defineNuxtConfig({
  // srcDir: '0_app',
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: [
    { path: '~/components/shell/', pathPrefix: false },
    { path: '~/components/special/', pathPrefix: false },
    { path: '~/components/nav/', pathPrefix: false },
    { path: '~/components/ui/', pathPrefix: false },
  ],
  css: ['~/assets/styles/index.scss'],
  modules: ['@nuxtjs/svg-sprite', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/tailwindcss'],
  svgSprite: {
    // input: 'assets/sprites/svg',
    // output: '0_app/assets/sprites/gen',
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
  }
})