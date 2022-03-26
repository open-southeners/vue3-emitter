import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Vue 3 Emitter',
  description: 'A very simple mitt wrapper for Vue 3',

  plugins: [
    [
      '@vuepress/search', {
        searchMaxSuggestions: 10
      }
    ]
  ],

  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',

    repo: 'open-southeners/vue3-emitter',

    navbar: [
      {
        text: 'Home',
        link: '/README.md',
      },
      {
        text: 'Guide',
        children: [
          {
            text: 'Installation',
            link: '/guide/README.md'
          },
          '/guide/usage.md',
          '/guide/components.md',
          '/guide/typescript.md',
          '/guide/upgrading.md',
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          children: [
            {
              text: 'Installation',
              link: '/guide/README.md'
            },
            {
              text: 'Usage',
              link: '/guide/usage.md'
            },
            {
              text: 'Components',
              link: '/guide/components.md'
            },
          ]
        },
        {
          text: 'Advanced topics',
          children: [
            {
              text: 'TypeScript',
              link: '/guide/typescript.md'
            },
          ]
        },
        {
          text: 'Upgrading',
          link: '/guide/upgrading.md'
        },
      ],
    },
  },
})
