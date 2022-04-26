module.exports = [
    { text: 'Home', link: '/',icon:'reco-home' },
    { text: 'Project',
      items: [
        { text: 'Vue仿简易版网易云', link: 'http://NetMusical.lanboc.cn', icon:'iconfont icon-wangyiyunyinle'},
        { text: '打字练习网站', link: 'http://typing.lanboc.cn', icon:'iconfont icon-vue'},
        { text: 'WebSocket仿简易聊天室', link: 'http://Chat.lanboc.cn', icon:'iconfont icon-project'}
      ],
      icon: 'iconfont icon-project'
    },
    { text: 'Tools', 
      items: [
        { text: '规范你的git commit', link: 'https://zhuanlan.zhihu.com/p/182553920', icon:'reco-zhihu'},
        { text: '快速生成代码片段', link: 'https://snippet-generator.app/', icon:'iconfont icon-project'},
        { text: '《Spring.js》(滑稽)',link: 'https://nestjs.com/', icon:'reco-nest', icon:'iconfont icon-project'},
        {
          text: '博客指南',
          items: [
          {text: 'CSDN', link: 'https://blog.csdn.net/',icon: 'reco-csdn'},
          {text: 'bilibili', link: 'https://www.bilibili.com/',icon: 'reco-bilibili'},
          {text: '博客园',link:"https://www.cnblogs.com/",icon: 'reco-bokeyuan'},
          ]
        }
      ],icon: 'iconfont icon-tools'},
    { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
    { text: 'About', link: '/about/', icon: 'reco-message'},
    { text: 'Github', link: 'https://github.com/Lanborn', target:'_self',icon:'reco-github' },
]