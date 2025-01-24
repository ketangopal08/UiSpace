// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Disable Server-Side Rendering (optional, use SSG if needed)
  target: 'static', // Enable static site generation
  compatibilityDate: '2024-11-01',
  // devtools: { enabled: true },
  head: {
    title: 'Your Default Title', // Default title for all pages
    meta: [
      { name: 'description', content: 'Your site description' },
      // other global meta tags
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      // other global links
    ]
  },
  css: ['~/assets/css/tailwind.css','~/assets/css/custom.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt',
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})