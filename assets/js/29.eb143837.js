(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{609:function(n,t,a){"use strict";a.r(t);var e=a(3),r=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"原型-原型链-call-apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型-原型链-call-apply"}},[n._v("#")]),n._v(" 原型，原型链，call/apply")]),n._v(" "),a("h3",{attrs:{id:"原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型"}},[n._v("#")]),n._v(" 原型")]),n._v(" "),a("ol",[a("li",[n._v("定义：原型是function对象的一个属性，它定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('Person.prototype.name = "heh";\nPerson.prototype.age = 19;\nPerson.prototype {\n    name : "hehe"；\n    age : 18;\n    function {\n\n    }\n}\nfunction Person () {\n\n}\nvar person = new Person();\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[n._v("利用原型特点和概念，可以提取共有属性。\n在多次创建对象的时候，可以将一些固定的属性放在原型当中来使其少耦合。\n原型的增删改查不能通过改变后代来使祖先发生改变。应该直接对Person.prototype直接进行操作。")])]),n._v(" "),a("p",[n._v("原型中自带有一个系统写好的属性：\nconstructor\n3. 对象如何查看原型 —— > 隐式属性__proto__")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Person.prototype.name = 'abc';\nfunction Person() {\n    // var this = {\n        __proto__ : Person.prototype 指向的空间是prototype的空间，但是如果在后面给prototype赋值之后，此时的__proto__仍然指向原来的空间并不会随着Prototype去指向新的空间。 \n    };\n\n    // return this;\n}\nvar obj = {\n    name : \"sunny\";\n}\nvar person = new Person();\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[n._v("对象如何查看对象的构造函数 —— > constructor")])]),n._v(" "),a("h3",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[n._v("#")]),n._v(" 原型链")]),n._v(" "),a("ol",[a("li",[n._v("如何生成原型链\neg:")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('Grand.prototype.__proto__ = Object.prototype\n   Grand.prototype.Lastname = "Lan";\n   function Grand () {\n\n   }\n   var grand = new Grand();\n   Father.prototype = grand;\n   function Father() {\n       name : "bo"\n   }\n   var father = new Father();\n   son.prototype = father;\n   function Son() {\n       this.hobbit = "smoke";\n   }\n   var son = new Son();\n')])])]),a("p",[n._v("在原型上面再加一个原型。。。形成的链就是原型链。")]),n._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[n._v('原型链属性的增删改查\n只能对属性的本身进行修改 一般不能通过子孙来删除继承来的属性。\n提示: 引用值可以给他加属性去修改，这样它操作的是引用值自己。类如：\nson.fortune.name = "V";  这就是引用值加属性去修改。\nson.fortune = 200 这是覆盖当前的fortune 并不会改变父类对象里面属性的任何值。但是上面的操作则会改变父类的属性。因为它是直接操作引用值的堆内容。')])]),n._v(" "),a("p",[n._v("小知识：\n// a.sayName()\nsayName里面的this指向是，谁调用的这个方法 ,this就是指向谁\n//")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    Person.prototype = {\n        name : "a",\n        sayName : function () {\n            console.log(this.name);\n        }\n    }\n\n    function Person() {\n        this.name = "b";\n    }\n\n    var person = new Person();\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[n._v("绝大多数对象的最终都会继承自Object.prototype\neg：")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    Person.prototype = {} --\x3e Object.prototype\n    function Person() {\n\n    }\n    原理：\n    // var obj1 = new Object();\n    // obj1.__proto__ ---\x3e Object.prototype\n")])])]),a("p",[n._v("但是有例外。\nvar obj = Object.create(null);\n此时obj的Object是空。\n4. Object.create(原型)\n// var obj = Object.create(原型);")]),n._v(" "),a("p",[n._v("原始值num中调用方法toString存在一个重写的过程\nvar num = 123;\nnum.toString();  -- > new Number(num).toString();\nNumber.prototype.toString = function () {")]),n._v(" "),a("p",[n._v("}")]),n._v(" "),a("p",[n._v("Number中的toString方法并不是继承来的 而是本身的重写。")]),n._v(" "),a("p",[n._v("同时在document.write()中实际输出的是括号里面的值调用toString之后显示的结果。\neg:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    var obj = Object.create(null);\n    obj.toString = function () {\n        return "haah";\n    }\n    document.write(obj);\n')])])]),a("h3",{attrs:{id:"重写的思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重写的思想"}},[n._v("#")]),n._v(" 重写的思想")]),n._v(" "),a("p",[n._v("大多数对象继承来的方法如果想要调用自己与Object.prototype重名的方法，则需要自己进行重写。\neg:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('Person.prototype = {\n    toString : function {  // 因为Object的prototype中有toString这个方法，但是又想要调用自个的所以在这里进行重写。\n        return "hehe";\n    }\n}\nfunction Person() {\n\n}\nvar person = new Person();\n')])])]),a("h3",{attrs:{id:"call-apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-apply"}},[n._v("#")]),n._v(" call/apply")]),n._v(" "),a("h4",{attrs:{id:"call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call"}},[n._v("#")]),n._v(" call")]),n._v(" "),a("p",[n._v("作用：借用别人的函数实现自己的功能。\n函数在调用的时候，会有一个过程\ntest() ---\x3e  test.call();\ncall可以改变调用该方法的this指向\neg:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    function Person(name,age){\n        \n        this.name = name;\n        this.age = age;\n    }\n    var obj = {};\n    Person.call(obj,"lan",19);\n')])])]),a("h4",{attrs:{id:"apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply"}},[n._v("#")]),n._v(" apply")]),n._v(" "),a("p",[n._v('与call的区别：apply传参是传一个实参列表进去,call需要把实参按照形参的个数传进去。\n列入上面的Person.call(obj,["lan",19]);')])])}),[],!1,null,null,null);t.default=r.exports}}]);