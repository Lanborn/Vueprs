const moment = require('moment');
const navConf = require('./nav.js');
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
        ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_2884024_avp2ex4xpj5.css'}]
    ],
    themeConfig: {
        type: 'blog',
        mode: 'dark',
        logo: '/logo.png',
        author:"Lanborn",
        authorAvatar:"/logo.png",
        nav: navConf,
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
        ],
        valineConfig: {
          appId: 'cSTJqlT7PCzCo2B7f97KRpQ0-gzGzoHsz',// your appId
          appKey: 'dkXLrN8217L29nNVIYdvMHRT', // your appKey
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
        ],
        [
          "@vuepress-reco/vuepress-plugin-bgm-player",{
            audios: [
              // 本地文件示例
              // {
              //   name: '장가갈 수 있을까',
              //   artist: '咖啡少年',
              //   url: '/bgm/1.mp3',
              //   cover: '/bgm/1.jpg'
              // },
              // 网络文件示例
              {
                name: '강남역 4번 출구',
                artist: 'Plastic / Fallin` Dild',
                url: 'https://assets.smallsunnyfox.com/music/2.mp3',
                cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
              },
              {
                name: '用胳膊当枕头',
                artist: '최낙타',
                url: 'https://assets.smallsunnyfox.com/music/3.mp3',
                cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
              }
            ]  
          }
        ],
        [
          "vuepress-plugin-cursor-effects",
          {
            size: 2,                    // size of the particle, default: 2
            shape: 'circle',  // shape of the particle, default: 'star'
            zIndex: 999999999           // z-index property of the canvas, default: 999999999
          }
        ],
    ],
}