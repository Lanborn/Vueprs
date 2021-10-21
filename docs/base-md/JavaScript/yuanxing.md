---
title: 关于原型的深入理解
date: 2021-10-21 12:00:00
tags:
 - JavaScript
 - 前端
 - 原型链
categories:
 - 前端学习
---

## 原型，原型链，call/apply
### 原型
1. 定义：原型是function对象的一个属性，它定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。 

<!-- Person.prototype  -- 原型
     Person.prototype = {} 是祖先 -->
```
Person.prototype.name = "heh";
Person.prototype.age = 19;
Person.prototype {
    name : "hehe"；
    age : 18;
    function {

    }
}
function Person () {

}
var person = new Person();
```
2. 利用原型特点和概念，可以提取共有属性。
在多次创建对象的时候，可以将一些固定的属性放在原型当中来使其少耦合。
原型的增删改查不能通过改变后代来使祖先发生改变。应该直接对Person.prototype直接进行操作。

原型中自带有一个系统写好的属性：
constructor
3. 对象如何查看原型 —— > 隐式属性__proto__
```
Person.prototype.name = 'abc';
function Person() {
    // var this = {
        __proto__ : Person.prototype 指向的空间是prototype的空间，但是如果在后面给prototype赋值之后，此时的__proto__仍然指向原来的空间并不会随着Prototype去指向新的空间。 
    };

    // return this;
}
var obj = {
    name : "sunny";
}
var person = new Person();
```
4. 对象如何查看对象的构造函数 —— > constructor


 ### 原型链
 1. 如何生成原型链
 eg:
 ```
 Grand.prototype.__proto__ = Object.prototype
    Grand.prototype.Lastname = "Lan";
    function Grand () {

    }
    var grand = new Grand();
    Father.prototype = grand;
    function Father() {
        name : "bo"
    }
    var father = new Father();
    son.prototype = father;
    function Son() {
        this.hobbit = "smoke";
    }
    var son = new Son();
```

在原型上面再加一个原型。。。形成的链就是原型链。

2. 原型链属性的增删改查
只能对属性的本身进行修改 一般不能通过子孙来删除继承来的属性。
提示: 引用值可以给他加属性去修改，这样它操作的是引用值自己。类如：
son.fortune.name = "V";  这就是引用值加属性去修改。
son.fortune = 200 这是覆盖当前的fortune 并不会改变父类对象里面属性的任何值。但是上面的操作则会改变父类的属性。因为它是直接操作引用值的堆内容。

小知识：
    // a.sayName()
    sayName里面的this指向是，谁调用的这个方法 ,this就是指向谁
    //
```
    Person.prototype = {
        name : "a",
        sayName : function () {
            console.log(this.name);
        }
    }

    function Person() {
        this.name = "b";
    }

    var person = new Person();
```
3. 绝大多数对象的最终都会继承自Object.prototype
eg：
```
    Person.prototype = {} --> Object.prototype
    function Person() {

    }
    原理：
    // var obj1 = new Object();
    // obj1.__proto__ ---> Object.prototype
```
但是有例外。
var obj = Object.create(null);
此时obj的Object是空。
4. Object.create(原型)
    // var obj = Object.create(原型);

原始值num中调用方法toString存在一个重写的过程
var num = 123;
num.toString();  -- > new Number(num).toString();
Number.prototype.toString = function () {

}

<!-- Number.prototype.__proto__ = Object.prototype

Object.prototype.toString = function() {

} -->
Number中的toString方法并不是继承来的 而是本身的重写。

同时在document.write()中实际输出的是括号里面的值调用toString之后显示的结果。
eg:
```
    var obj = Object.create(null);
    obj.toString = function () {
        return "haah";
    }
    document.write(obj);
```
### 重写的思想
大多数对象继承来的方法如果想要调用自己与Object.prototype重名的方法，则需要自己进行重写。
eg:

    Person.prototype = {
        toString : function {  // 因为Object的prototype中有toString这个方法，但是又想要调用自个的所以在这里进行重写。
            return "hehe";
        }
    }
    function Person() {

    }
    var person = new Person();
### call/apply

#### call
作用：借用别人的函数实现自己的功能。
函数在调用的时候，会有一个过程
test() --->  test.call();
call可以改变调用该方法的this指向
eg:
```
    function Person(name,age){
        
        this.name = name;
        this.age = age;
    }
    var obj = {};
    Person.call(obj,"lan",19);
```
#### apply
与call的区别：apply传参是传一个实参列表进去,call需要把实参按照形参的个数传进去。
列入上面的Person.call(obj,["lan",19]);