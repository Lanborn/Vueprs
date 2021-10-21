---
title: Js基础(或者可以说是个人回顾？)
date: 2021-10-16 18:00:00
tags:
 - JavaScript
 - 前端
categories:
 - 前端学习
---
## Js入门
重点回顾一下闭包、还有作用域链等笔记中 + * 的部分

### 基础语法
不同其他语言的定义数据类型
JS中是用var(ES6中还有let会更加方便)来定义一个数据
```
var i = 123 // 此时i表示的是一个整数型
var st = 'nihao' // 此时st表示的是一个字符串
```
通过上面的代码可知，在JS中一个变量的具体类型是由在声明变量之后根据你所给变量赋值来确定的。

#### 小拓展

let和var的一个区别

学完js的人都知道var有一个作用就是提升变量，但是Let不会
emmm 好像这玩意儿在这超纲了。算了，不管了先放这自己回顾一下以后。。。。
 
### 闭包
Sample:
```
    function a () {
        function b() {
            var bbb = 234;
            console.log(aaa);
        }
        var aaa =123;
        return b;
    }
    var demo = a();
    demo();
```
这个例子中的b在a执行之前被返回给了demo 此时a的执行上下文已经销毁，但是B里面的a.AO已经赋给了demo，此时就形成了闭包。
定义：当内部函数被保存到外部时，将会生成闭包。闭包会导致原有作用域链不释放，造成内存泄露(占用)。
#### 闭包的作用
##### 实现公有变量
eg:函数累加器
```
function add() {
    var count = 0;
    function b (){
        count ++;
        console.log(count);
    }
    return b;
}
var demo = add();
demo();
demo();
```
##### 可以做缓存(存储结构)
<!-- eg:
function test () {
    var num = 100;
    function a () {
        num ++;
        console.log(num);
    }
    function b () {
        num --;
        cosole.log(num);
    }
    return [a,b];
}
var myArr = test();
myArr[0]();
myArr[1](); -->
```
function eater() {
    var food = "";
    var obj = {
        ear :function () {
            console.log("i am eating " + food);
            food = "";
        },
        push : function (myFood) {
            food = myFood;
        }
    }
    return obj;
}
var eater1 = eater();
eater1.push('banana');
eater1.eat();
```
##### 可以实现封装，属性私有化。
```
function erDog(name, wife) {
    var prepareWife = "22";

    this.name = name;
    this.wife = wife;
    this.divorce = function() {
        this.wife = prepareWife;
    }
    this.changePrepareWife = function (target) {
        prepareWife = target;
    }
    this.sayPreparwife = function () {
        console.log(prepareWife);
    }
}
```
var er = new erDog('123','11');
此时若是直接er.prepareWife是无法访问的，此时preparewife就是私有化变量。

##### 模块化开发，防止污染全局变量

