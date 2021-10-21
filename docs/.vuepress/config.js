const moment = require('moment');
module.exports = {
    base: "/Vueprs/",
    theme: "reco",
    title: "独自在秋雨后踏碎落叶",
    description: "直到风林寂静，游走世界尽头",
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content: 'lanborn'}],
        ['meta', { name: 'keywords', contene:'Vuepress介绍说明'}],
    ],
    themeConfig: {
        type: 'blog',
        logo: '/logo.png',
        author:"Lanborn",
        authorAvatar:"/logo.png",
        nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'Base-MD', link: '/base-md/',
            items: [
                { text: 'JavaScript' ,link: '/base-md/JavaScript/'},
                { text: 'Vue-base', link: '/base-md/Vue/'},
            ]
        },
        { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
        { text: 'About', link: '/about/'},
        { text: 'External', link: 'https://Lanborn.github.io', target:'_self' },
      ],
        subSidebar: 'auto',
        sidebarDepth: "1",
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '更新时间',
        blogConfig: {
          category: {
            location: 2,     // 在导航栏菜单中所占的位置，默认2
            text: 'Category' // 默认文案 “分类”
          },
          tag: {
            location: 3,     // 在导航栏菜单中所占的位置，默认3
            text: 'Tag'      // 默认文案 “标签”
          }
        },
        // 友情链接
        friendLink: [
          {
            title: '午后南杂',
            desc: 'Enjoy when you can, and endure when you must.',
            logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/reco.png',
            link: 'https://www.recoluan.com'
          },
          {
            title: 'vuepress-theme-reco',
            desc: 'A simple and beautiful vuepress Blog & Doc theme.',
            logo: "https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png",
            link: 'https://vuepress-theme-reco.recoluan.com'
          }
        ]
    },
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp, lang) => {
              moment.locale(lang)
              return moment(timestamp).format("LLLL")
            }
          },
        ],
        [
          'permalink-pinyin',
          {
            lowercase: true,
            separator: '-'
          },
        ],
        [
          '@vuepress-reco/vuepress-plugin-kan-ban-niang',
          {
            theme: [
              'whiteCat'
            ],
            clean: false,
            messages: { 
              welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。' 
            },
            messageStyle: { right: '68px', bottom: '290px' },
            width: 250,
            height: 320
          }
        ]
    ],
}