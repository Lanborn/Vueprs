const moment = require('moment');
module.exports = {
    base: "/vuepress\_ts/",
    title: "独自在秋雨后踏碎落叶",
    description: "直到风林寂静，游走世界尽头",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content: 'lanborn'}],
        ['meta', { name: 'keywords', contene:'Vuepress介绍说明'}],
    ],
    themeConfig: {
        logo: '/logo.png',
        nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'Base-MD', link: '/base-md/',
            items: [
                { text: 'JavaScript' ,link: '/base-md/JavaScript/'},
                { text: 'Vue-base', link: '/base-md/Vue/'},
            ]
        },
        { text: 'About', link: '/about/'},
        { text: 'External', link: 'https://Lanborn.github.io', target:'_self' },
      ],
        sidebar: 'auto',
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '更新时间',
    },
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp, lang) => {
              moment.locale(lang)
              return moment(timestamp).format("LLLL")
            }
          }
        ],
    ]
}