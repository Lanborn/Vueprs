(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{603:function(a,e,t){"use strict";t.r(e);var n=t(3),r=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"js入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js入门"}},[a._v("#")]),a._v(" Js入门")]),a._v(" "),t("p",[a._v("重点回顾一下闭包、还有作用域链等笔记中 + * 的部分")]),a._v(" "),t("h3",{attrs:{id:"基础语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础语法"}},[a._v("#")]),a._v(" 基础语法")]),a._v(" "),t("p",[a._v("不同其他语言的定义数据类型\nJS中是用var(ES6中还有let会更加方便)来定义一个数据")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var i = 123 // 此时i表示的是一个整数型\nvar st = 'nihao' // 此时st表示的是一个字符串\n")])])]),t("p",[a._v("通过上面的代码可知，在JS中一个变量的具体类型是由在声明变量之后根据你所给变量赋值来确定的。")]),a._v(" "),t("h4",{attrs:{id:"小拓展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小拓展"}},[a._v("#")]),a._v(" 小拓展")]),a._v(" "),t("p",[a._v("let和var的一个区别")]),a._v(" "),t("p",[a._v("学完js的人都知道var有一个作用就是提升变量，但是Let不会\nemmm 好像这玩意儿在这超纲了。算了，不管了先放这自己回顾一下以后。。。。")]),a._v(" "),t("h3",{attrs:{id:"闭包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[a._v("#")]),a._v(" 闭包")]),a._v(" "),t("p",[a._v("Sample:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    function a () {\n        function b() {\n            var bbb = 234;\n            console.log(aaa);\n        }\n        var aaa =123;\n        return b;\n    }\n    var demo = a();\n    demo();\n")])])]),t("p",[a._v("这个例子中的b在a执行之前被返回给了demo 此时a的执行上下文已经销毁，但是B里面的a.AO已经赋给了demo，此时就形成了闭包。\n定义：当内部函数被保存到外部时，将会生成闭包。闭包会导致原有作用域链不释放，造成内存泄露(占用)。")]),a._v(" "),t("h4",{attrs:{id:"闭包的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#闭包的作用"}},[a._v("#")]),a._v(" 闭包的作用")]),a._v(" "),t("h5",{attrs:{id:"实现公有变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现公有变量"}},[a._v("#")]),a._v(" 实现公有变量")]),a._v(" "),t("p",[a._v("eg:函数累加器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function add() {\n    var count = 0;\n    function b (){\n        count ++;\n        console.log(count);\n    }\n    return b;\n}\nvar demo = add();\ndemo();\ndemo();\n")])])]),t("h5",{attrs:{id:"可以做缓存-存储结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可以做缓存-存储结构"}},[a._v("#")]),a._v(" 可以做缓存(存储结构)")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('function eater() {\n    var food = "";\n    var obj = {\n        ear :function () {\n            console.log("i am eating " + food);\n            food = "";\n        },\n        push : function (myFood) {\n            food = myFood;\n        }\n    }\n    return obj;\n}\nvar eater1 = eater();\neater1.push(\'banana\');\neater1.eat();\n')])])]),t("h5",{attrs:{id:"可以实现封装-属性私有化。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可以实现封装-属性私有化。"}},[a._v("#")]),a._v(" 可以实现封装，属性私有化。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('function erDog(name, wife) {\n    var prepareWife = "22";\n\n    this.name = name;\n    this.wife = wife;\n    this.divorce = function() {\n        this.wife = prepareWife;\n    }\n    this.changePrepareWife = function (target) {\n        prepareWife = target;\n    }\n    this.sayPreparwife = function () {\n        console.log(prepareWife);\n    }\n}\n')])])]),t("p",[a._v("var er = new erDog('123','11');\n此时若是直接er.prepareWife是无法访问的，此时preparewife就是私有化变量。")]),a._v(" "),t("h5",{attrs:{id:"模块化开发-防止污染全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块化开发-防止污染全局变量"}},[a._v("#")]),a._v(" 模块化开发，防止污染全局变量")])])}),[],!1,null,null,null);e.default=r.exports}}]);