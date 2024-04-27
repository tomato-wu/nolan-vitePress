import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "nolan 的技术博客",
  description: "欢迎来到我的技术博客！这里是我分享前端开发知识和经验的地方，涵盖React，js，ts，webpack，vite，node.js等技术栈。你将找到前端工程化的实践、面试准备的精选题目，以及我对前端开发的见解和经验。希望这个博客能帮助你在前端道路上不断进步，共同成长。",
  base: '/nolan-vitePress/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logoNolan.svg',
    siteTitle: 'Nolan 的技术博客',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'React', link: '/ReactDocs/react-docs' },
      { text: 'Vue', link: '/markdown-examples' },
      { text: 'JS', link: '/markdown-examples' },
      { text: 'TS', link: '/markdown-examples' },
      { text: '前端工程化', link: '/markdown-examples' },
      { text: 'docker', link: '/markdown-examples' },
      { text: '自动化测试', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'React技术之旅',
        items: [
          { text: '使用教程', link: '/ReactDocs/react-docs' },
          { text: 'zustand状态管理', link: '/ReactDocs/zustand-docs' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tomato-wu?tab=repositories' }
    ]
  }
})
