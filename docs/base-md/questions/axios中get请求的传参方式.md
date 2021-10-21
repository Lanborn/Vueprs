---
title: axios中Post的传参方式
date: 2021-10-12 21:31:00
tags:
 - Vue
 - axios
 - 前端
categories:
 - 前端学习
 - Vue
 - axios
---

## 接口调用的get请求中传参遇到的问题

今天在学习vue时，在编写一个登陆框的时候遇到的问题。

```vue
            methods : {
                Login : function () {
                    axios.get("http://192.168.0.163/API/classtable?username=&password=")
                    .then(function(response){
                        console.log(response);
                    },function(err){
                        console.log(err);
                    });
                }
            }
```

在axios.get中要传入username 和 password 时遇到了点小问题(在这之前还不了解ES6和params)，一开始是用+字符串的方法去尝试，后来发现不太方便，就在鱼皮大佬的前端群中询问了各位大佬 ，找到了两种解决方法，同时也了解了post、get两种请求方式的请求参数传值问题。

### 方法1 用ES6中的模板字符串中的字符串插值功能

解决方法：

```vue
axios.get("http://192.168.0.163/API/classtable?username=${this.username}&password=${this.password}")
```



利用$这个模板占位符来解决，JS最终把this.username和this.password插入到最终生成的字符串中，此时请求参数的值就为${}中的值



### 方法2 用Params

以数组的形式给它传参

详情回顾音乐播放器的项目中的传值方式。
```
params:{

​	keywords：key

}
```
