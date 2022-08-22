---
title: 缪莎Nginx反向代理Vue项目的404
date: 2021-12-30 21:13:43
tags:
 - Vue
 - Nginx
 - Vue-Router
categories:
 - 前端学习
 - Vue
---

## 起因
在路由配置中使用了history模式，此时需要解决刷新页面404的问题
  history: createWebHashHistory()
```
	最简单粗暴：
		mode: 'hash'
		当然影响url的美观，没关系接下来只需要去Nginx.conf中加上下面命令即可
```


## Nginx反向代理解决路由刷新404

``` shell
location / {
	root	/usr/local/docker/web/gzfsweb/;
	# Vue工程用的路由是history模式
	try_files $uri $uri/ /index.html;
	index index.html index.htm;
}
```

