const moment = require('moment');
const navConf = require('./nav.js');
module.exports = {
  // base: "/Vueprs/",
  theme: "reco",
  title: "独自在秋雨后踏碎落叶",
  description: "直到风林寂静，游走世界尽头",
  head: [
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }],
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['meta', {
      name: 'author',
      content: 'lanborn'
    }],
    ['meta', {
      name: 'keywords',
      contene: 'Vuepress介绍说明,lanboc.cn,blog.lanboc.cn'
    }],
  ],
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4']
  },
  themeConfig: {
    type: 'blog',
    mode: 'dark',
    logo: '/logo.png',
    author: "Lanborn",
    authorAvatar: "/logo.png",
    nav: navConf,
    subSidebar: 'auto',
    sidebarDepth: "1",
    record: "赣ICP备2021010390号",
    recordLink: "https://beian.miit.gov.cn/",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    startYear: '2021',
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认文案 “标签”
      }
    },
    // 友情链接
    friendLink: [{
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
      },
      {
        title: '被删的前端游乐场',
        desc: 'Just playing around',
        logo: "https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/chunzhu.jpg",
        link: 'https://godbasin.github.io/front-end-playground/'
      }
    ],
    valineConfig: {
      appId: 'cSTJqlT7PCzCo2B7f97KRpQ0-gzGzoHsz', // your appId
      appKey: 'dkXLrN8217L29nNVIYdvMHRT', // your appKey
      recordIP: true,
      placeholder: '填写邮箱地址可以及时收到回复噢...',
      visitor: true,
    }
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
          'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku'
        ],
        clean: false,
        messages: {
          welcome: '欢迎来到我的博客',
          home: '落叶的一生，难道只是为了归根吗？',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '结束也是一种开始'
        },
        messageStyle: {
          right: '68px',
          bottom: '290px'
        },
        width: 250,
        height: 320
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [{
            name: '斑驳陆离之林，恍若隔世',
            artist: 'Robyn',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          },
          {
            name: '恍惚交错的记忆',
            artist: '余日秋山',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          }
        ]
      }
    ],
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 2,
        shape: 'circle',
        zIndex: 999999999
      }
    ],
  ],
}