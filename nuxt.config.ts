// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  dir: {
    public: 'src/public'
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/src/public/logo.jpg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    }
  },
  // Add Tailwind module and a global CSS file so utility classes are available
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css']
})
