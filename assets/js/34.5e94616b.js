(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{617:function(e,t,a){"use strict";a.r(t);var s=a(3),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"vue的初体验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的初体验"}},[e._v("#")]),e._v(" Vue的初体验")]),e._v(" "),a("p",[e._v("因为在系统学习Vue之前需要学习许多的前提，比如Webpack,CSS3,HTML5,预编译等等，所以可以先体验下Vue的一些基础的功能(但也有前提三件套的基础加dom元素操作)\n因为只有自己用原生js操纵过dom元素之后才能体会到Vue的魅力。")]),e._v(" "),a("h3",{attrs:{id:"vue的cli部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的cli部分"}},[e._v("#")]),e._v(" Vue的cli部分")]),e._v(" "),a("p",[e._v("定义： 简单点说就是一个帮你创建项目基本结构的工具，里面整合了很多东西(用得上的，用不上的)\n官方文档：https://cli.vuejs.org/zh/")]),e._v(" "),a("ol",[a("li",[e._v("官方的脚手架")]),e._v(" "),a("li",[e._v("民间大神的脚手架")]),e._v(" "),a("li",[e._v("自己搭建(大厂工程师必备)")])]),e._v(" "),a("p",[e._v("以上难度依次递增，或许在这讲有些不合题意了...但是先了解一下总是好的")]),e._v(" "),a("h3",{attrs:{id:"导入vue的两种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入vue的两种方式"}},[e._v("#")]),e._v(" 导入Vue的两种方式")]),e._v(" "),a("ol",[a("li",[e._v("通过npm、vue-cli安装Vue")]),e._v(" "),a("li",[e._v("通过cdn来安装\n"),a("script",{attrs:{src:"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"}})])]),e._v(" "),a("h3",{attrs:{id:"vue的基础结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的基础结构"}},[e._v("#")]),e._v(" vue的基础结构")]),e._v(" "),a("p",[e._v("在页面中要操纵一个dom元素，我们通常是用id选择器或是类选择器\n不同于原生js的是，vue是通过实例化一个vue对象来关联一个Dom元素\nexample:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('div id = "app"\n    {{ message }}\ndiv\n\n// js:实例化一个Vue对象\n    var app = new Vue({\n        el : "#app",\n        data : {\n            message : \'Hello Vue\',\n        },\n        methods:{\n\n        }\n    })\n')])])]),a("ul",[a("li",[e._v("注意：\n在调用data当中的数据的时候，要先声明data中的变量，或者初始化。如果给app中DATA的一个没有定义的变量赋值则不会触发视图更新")])]),e._v(" "),a("p",[e._v("如果你在后面的工作中知道需要一个值需要一个property，可以在data对象中初始化一些值")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("data: {\n  newTodoText: ' ',\n  visitCount: 0,\n  hideCompletedTodos: false,\n  todos: [],\n  error: null\n}\n")])])]),a("p",[e._v("还有一种情况也不会更新视图\n使用Object.freeze(), 会阻止修改现有的propety，也意味着响应系统无法再追踪变化")]),e._v(" "),a("h3",{attrs:{id:"el的挂载范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#el的挂载范围"}},[e._v("#")]),e._v(" el的挂载范围")]),e._v(" "),a("p",[e._v("el 不能绑定html 和 Body")])])}),[],!1,null,null,null);t.default=v.exports}}]);