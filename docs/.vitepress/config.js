import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/AINews/',
  title: "Lenard的博客",
  description: "个人笔记博客，记录学习与思考",
  // 页面头部元信息
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/AINews/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/AINews/favicon.ico' }]
  ],

  themeConfig: {
    // 本地搜索（导航栏内联搜索框使用，需先启用 local 提供方才有索引）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' }
        }
      }
    },
    siteTitle: "Lenard · 个人博客",
    // 显示文章最后更新时间（git 自动，按最后提交时间）
    lastUpdated: true,
    lastUpdatedText: '最后更新于',
    // 界面文案本地化（中文）
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    darkModeSwitchTitle: '切换到深色',
    lightModeSwitchTitle: '切换到浅色',
    outline: { level: [2,4], label: '本章目录' },
    // 底部分页文案
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    sidebar: [
      {
        text: '📖 AI 实时资讯',
        items: [
          {
            text: '2026年10月',
            collapsed: false,
            items: [
              { text: '17-DeepSeek 再度宕机近5小时', link: '/20261015-DeepSeek' },
              { text: '08-OpenAI 遭遇营收预算滑铁卢？', link: '/20261008-OpenAI' }

            ]
          }
        ]
      }
    ],
    nav: [
      { text: '笔记合集', link: 'https://superlenard.github.io/myBlog/' },
    ],
    // GitHub 右上角链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/superLenard' }
    ],
  }
})