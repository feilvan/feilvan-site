// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image'],
  css: ["~/assets/css/tailwind.css"],
  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: ""
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "in-out"
    }
  },
  tailwindcss: {
    config: {
      theme: {
        aspectRatio: {
          auto: 'auto',
          square: '1 / 1',
          video: '16 / 9',
          1: '1',
          2: '2',
          3: '3',
          4: '4',
          5: '5',
          6: '6',
          7: '7',
          8: '8',
          9: '9',
          10: '10',
          11: '11',
          12: '12',
          13: '13',
          14: '14',
          15: '15',
          16: '16',
        },
      }
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  ui: {
    icons: ['heroicons', 'fa6-brands']
  }
})
