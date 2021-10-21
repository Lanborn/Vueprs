module.exports = [
    { text: 'Home', link: '/',icon:'reco-home' },
    { text: 'Guide', link: '/guide/' },
    { text: 'Tools', 
      items: [
        { text:'iconfont(非常好用的图标库)',link: 'https://www.iconfont.cn/'},
        {
          text: '博客指南',
          items: [
          {text: 'CSDN', link: 'https://blog.csdn.net/',icon: 'reco-csdn'},
          {text: 'bilibili', link: 'https://www.bilibili.com/',icon: 'reco-bilibili'},
          {text: '博客园',link:"https://www.cnblogs.com/",icon: 'reco-bokeyuan'},
          ]
        }
      ],icon: 'reco-tools'},
    { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
    { text: 'About', link: '/about/', icon: 'reco-message'},
    { text: 'Github', link: 'https://github.com/Lanborn', target:'_self',icon:'reco-github' },
]