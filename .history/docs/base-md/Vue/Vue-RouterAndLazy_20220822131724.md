---
title: 彻底读懂路由以及懒加载
date: 2021-12-3 20:33:11
tags:
 - Vue
 - 前端
 - Vue-Router
categories:
 - 前端学习
 - Vue
---

## 路由的概念

### 定义

> 路由常见在生活中的就是路由器了，在计网中，架构一个网络，最重要的就是交换机和路由器。

其中路由器主要就是要处理路由映射表的信息

在Cisco的模拟软件中可以很好的模拟一次数据的请求以及路由的映射关系。

#### 路由在web中的发展阶段

- 后端路由阶段
- 前后端分离阶段
- 单页面(SPA)

### 后端路由的劣势

> 早期的开发像JSP、还有PHP等原生开发时候，代码的维护和编写是非常麻烦的。可以说就类似于前后端就一个人。

* 早期的网站开发HTML页面是由服务器渲染，这样虽然有利于SEO，但是，每一次的URL改变，都要发送一次请求给服务器，然后服务器通过正则来对该URL进行匹配，并且交给一个控制器(Controller)处理
* 正如上所说，这样的项目缺点很明显，HTML的代码和数据还有对应的逻辑混合在一起的时候，对于后期的维护和开发都是非常糟糕的

### 为什么需要前后端分离

> 随着AJAX的出现，就出现了前后端分离的开发模式，这时候的页面不再是由远程服务器渲染，而是由静态资源服务器渲染，这些资源由前端三件套，在前端对这些资源进行渲染

* 这时候的后端只需要提供API接口来满足前端页面的交互
* 后端专注于数据，前端专注于页面的交互和可视化，两头任务清晰分明
* 一套API不仅可以适用于网页端还可以使用于移动端

## 路由的两种模式

### URL -> Hash

* URL的hash就是锚点(#)，本质上是改变window.location的href属性
  * 可以通过直接赋值location.hash来改变href，但是页面不发生刷新

```html
<div>
    <a href='#/home'>Home</a>
    <a href='#/about'>About</a>
    <div class="router-view">
        
    </div>
</div>
```

```js
const routerViewEl = document.querySelector(".router-view")

window.addEventListener("hashchange", () => {
    switch(location.hash) {
        case : "#/home":
            routerViewEl.innerHTML = "home";
            break;
        case : '#/about':
            routerViewEl.innerHTML = "about";
            break;
        default : 
            routerViewEl.innerHTML = "default"
    }
})
```

* hash的优势就是兼容性更好，在老版IE中有可以运行，但是缺陷是有一个#，显得路径不真实，而且在移动端会有一定的问题

### H5中的History

* ​	history接口是HTML5新增的，它有六种模式改变URL而不刷新页面

  * replaceState :  替换原来的路径
  * pushState : 使用新的路径
  * popState ： 路径的回退
  * go : 向前或者向后改变路径
  * forward ： 向前改变路径
  * back ：向后改变路径

* 示例代码

  ```js
  const routerViewEl = document.querySelector(".router-view");
  
  const aEls = document.getElementByTagName("a");
  for ( let aEl of aEls ) {
      aEl.addEventListener("click", (e) => {
          e.preventDefault();
          const href = aEl.getAttribute("href")
          console.log(href)
          history.pushState({}, "", href)
          historyChange();
      })
  }
  ```

  ```js
  window.addEventListener("popstate", historyChange);
  window.addEventListener("go", historyChange);
  
  // 因为用const 定义，所以没有作用于提升，需要将其定义在被调用的前面。
  function historyChange() {
      switch(location: pathname) {
          case "/home":
              routerViewEl.innerHTML = "home";
              break;
          case "/about":
              routerViewEl.innerHTML = "about";
              break;
          default :
              routerViewEl.innerHTML = "default"
      }
  }
  ```


## 路由懒加载

### 什么是路由懒加载

### 为什么需要路由懒加载

### 路由懒加载不一样的姿势

### 打包之后的效果



