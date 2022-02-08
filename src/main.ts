import { NuxtConfig } from 'nuxt3'

const App: NuxtConfig = {
  srcDir: 'src/',
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#00647d' },
    ],
    link: [
      { rel: 'manifest', href: '/pwa/manifest.json' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/pwa/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/pwa/icons/favicon-16x16.png',
      },
    ],
    title: 'Mateusz Słotwiński',
  },
}

export default App
