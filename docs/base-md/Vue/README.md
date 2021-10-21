---
title: Vue初体验(适合三件套食用)
date: 2021-10-16 17:00:00
tags:
 - Vue
 - 前端
categories:
 - 前端学习
---
## Vue的初体验

因为在系统学习Vue之前需要学习许多的前提，比如Webpack,CSS3,HTML5,预编译等等，所以可以先体验下Vue的一些基础的功能(但也有前提三件套的基础加dom元素操作)
因为只有自己用原生js操纵过dom元素之后才能体会到Vue的魅力。

### Vue的cli部分

定义： 简单点说就是一个帮你创建项目基本结构的工具，里面整合了很多东西(用得上的，用不上的)
官方文档：https://cli.vuejs.org/zh/

1. 官方的脚手架
2. 民间大神的脚手架
3. 自己搭建(大厂工程师必备)

以上难度依次递增，或许在这讲有些不合题意了...但是先了解一下总是好的

### 导入Vue的两种方式
1. 通过npm、vue-cli安装Vue
2. 通过cdn来安装
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

### vue的基础结构

在页面中要操纵一个dom元素，我们通常是用id选择器或是类选择器
不同于原生js的是，vue是通过实例化一个vue对象来关联一个Dom元素
example:
```
div id = "app"
    {{ message }}
div

// js:实例化一个Vue对象
    var app = new Vue({
        el : "#app",
        data : {
            message : 'Hello Vue',
        },
        methods:{

        }
    })
```
- 注意：
在调用data当中的数据的时候，要先声明data中的变量，或者初始化。如果给app中DATA的一个没有定义的变量赋值则不会触发视图更新

如果你在后面的工作中知道需要一个值需要一个property，可以在data对象中初始化一些值
```
data: {
  newTodoText: ' ',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```
还有一种情况也不会更新视图
使用Object.freeze(), 会阻止修改现有的propety，也意味着响应系统无法再追踪变化

### el的挂载范围

el 不能绑定html 和 Body

