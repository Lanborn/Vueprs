(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{556:function(t,s,a){t.exports=a.p+"assets/img/packagejson.53c1f02c.png"},557:function(t,s,a){t.exports=a.p+"assets/img/3moduledownload.9ce1eb8f.png"},558:function(t,s,a){t.exports=a.p+"assets/img/3downloadmethods.5437b483.png"},608:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"node-js学习记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-js学习记录"}},[t._v("#")]),t._v(" Node.js学习记录")]),t._v(" "),n("h3",{attrs:{id:"npm与包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm与包"}},[t._v("#")]),t._v(" npm与包")]),t._v(" "),n("h4",{attrs:{id:"什么是包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是包"}},[t._v("#")]),t._v(" 什么是包")]),t._v(" "),n("p",[t._v("NOde.js中的第三方模块又叫做包")]),t._v(" "),n("p",[t._v("第三方模块和包是一个概念，只是叫法不同。")]),t._v(" "),n("h4",{attrs:{id:"为什么需要包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要包"}},[t._v("#")]),t._v(" 为什么需要包")]),t._v(" "),n("p",[t._v("由于Node.js的内置模块仅提供一些底层的API，导致在基于内置模块进行项目开发时，效率很低。")]),t._v(" "),n("p",[t._v("包是基于内置模块封装出来的，提供了更高级、更方便的API，极大的提高了开发效率。")]),t._v(" "),n("p",[t._v("包和内置模块之间的关系，类似于jQuery和浏览器内置API之间的关系。")]),t._v(" "),n("h4",{attrs:{id:"npm初体验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm初体验"}},[t._v("#")]),t._v(" npm初体验")]),t._v(" "),n("ol",[n("li",[t._v("格式化时间的传统做法")])]),t._v(" "),n("p",[t._v("step:")]),t._v(" "),n("ul",[n("li",[t._v("创建格式化时间的自定义模块")]),t._v(" "),n("li",[t._v("定义格式化时间的方法")]),t._v(" "),n("li",[t._v("创建补零函数")]),t._v(" "),n("li",[t._v("从自定义模块中导出格式化时间的函数")]),t._v(" "),n("li",[t._v("导入时间格式化的自定义模块")]),t._v(" "),n("li",[t._v("调用格式化时间的函数")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dataFormat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dtStr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFullYear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("padZero")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMonth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("padZero")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hh "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("padZero")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHours")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mm "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("padZero")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMinutes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ss "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("padZero")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSeconds")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("d"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("hh"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("mm"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("ss"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 补零函数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("padZero")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dataFormat\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("格式化时间的高级做法")])]),t._v(" "),n("ul",[n("li",[t._v("使用npm包管理工具，在项目中安装格式化时间的包moment")]),t._v(" "),n("li",[t._v("使用require()导入格式化时间的包")]),t._v(" "),n("li",[t._v("参考moment官方API文档对时间进行格式化")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD HH:mm:ss'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("包的语义化版本规范")])]),t._v(" "),n("p",[t._v('包的版本号是以"点分十进制"形式进行定义的，总共有三位数字，例如2.24.0')]),t._v(" "),n("p",[t._v("其中每一位数字所代表的含义如下：\n第1位数字：大版本\n第2位数字：功能版本\n第3位数字：Bug修复版本")]),t._v(" "),n("p",[t._v("版本号提升的规则：只要前面的版本号增长了，则后面的版本号归零。")]),t._v(" "),n("h4",{attrs:{id:"包管理配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#包管理配置文件"}},[t._v("#")]),t._v(" 包管理配置文件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("npm规定，在项目根目录中，必须提供一个叫做package.json的包管理配置文件。用来记录与项目有关的一些配置信息。例如：\n* 项目的名称、版本号、描述等\n* 项目中都用到了哪些包\n* 哪些包只会在开发期间会用到\n* 那些包在开发和部署时都需要用到\n")])])]),n("ol",[n("li",[t._v("快速创建package.json")])]),t._v(" "),n("p",[t._v("npm包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，快速创建package.json这个包管理配置文件：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm init "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y \n")])])]),n("p",[t._v("注意：")]),t._v(" "),n("ul",[n("li",[t._v("上述命令只能在英文的目录下成功运行！所以，项目文件夹的名称一定要使用英文命名，不要使用中文，不能出现空格。")]),t._v(" "),n("li",[t._v("运行npm install 命令安装包的时候，npm 包管理工具会自动的把包名称和版本号  ，记录到package.json中。")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("dependencies节点")])]),t._v(" "),n("p",[t._v("package.json文件中，有一个dependencies节点，专门用来记录您使用npm install 命令安装了哪些包")]),t._v(" "),n("p",[n("img",{attrs:{src:a(556),alt:""}})]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("卸载包")])]),t._v(" "),n("p",[t._v("可以运行npm uninstall命令，来卸载指定的包")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm uninstall moment\n")])])]),n("p",[t._v("注意：npm uninstall 命令执行成功后，会把卸载的包，自动地从package.json的dependencies中移除掉。")]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[t._v("devDependencies节点")]),t._v(" "),n("p",[t._v("如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到devDependencies节点中。\n与之对应的，如果某些包在开发阶段和项目上线之后都需要用到，则建议把这些包记录到dependencies节点中。")])])]),t._v(" "),n("p",[t._v("您可以使用如下的命令，将包记录到devDependencies节点中：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm i 包名 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("\n\nnpm install 包名 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("dev\n")])])]),n("h4",{attrs:{id:"解决下包速度慢的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决下包速度慢的问题"}},[t._v("#")]),t._v(" 解决下包速度慢的问题")]),t._v(" "),n("ol",[n("li",[t._v("淘宝npm镜像服务器")])]),t._v(" "),n("p",[t._v("慢的原因如图：\n"),n("img",{attrs:{src:"img/olddownload.png",alt:""}})]),t._v(" "),n("p",[t._v("淘宝在国内搭建了一个服务器，专门把国外服务器上的包同步到国内的服务器，然后在国内提供下包的服务。从而极大的提供了下包的速度。\n"),n("img",{attrs:{src:"img/newdownload.png",alt:""}})]),t._v(" "),n("p",[t._v("扩展：\n镜像(Mirroring)是一种文件存储形式，一个磁盘上的数据在另一个磁盘上存在一个完全相同的副本即为镜像。")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("切换npm的下包镜像源")])]),t._v(" "),n("p",[t._v("下包的镜像源，指的就是下包的服务器地址。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看当前的下包镜像源")]),t._v("\nnpm config "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" registry\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将下包的镜像源切换为淘宝镜像源")]),t._v("\nnpm config "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" registry "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" https"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("registry.npm.taobao.org")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查镜像源是否下载成功")]),t._v("\nnpm config "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" registry\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("nrm")])]),t._v(" "),n("p",[t._v("为了更方便的切换下包的镜像源，我们可以安装nrm这个小工具，利用nrm提供的终端命令，可以快速查看和切换下包的镜像源")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过npm包管理器，将nrm安装为全局可用的工具")]),t._v("\nnpm i nrm "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看所有可用的镜像源")]),t._v("\nnrm ls\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将下包的镜像源切换为taobao镜像")]),t._v("\nnrm use taobao\n")])])]),n("h4",{attrs:{id:"包的分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#包的分类"}},[t._v("#")]),t._v(" 包的分类")]),t._v(" "),n("ol",[n("li",[t._v("项目包")])]),t._v(" "),n("p",[t._v("那些被安装到项目的node_modules 目录中的包，都是项目包。")]),t._v(" "),n("p",[t._v("项目包又分为两类，分别是：")]),t._v(" "),n("ul",[n("li",[t._v("开发依赖包(被记录到devDependencies节点中的包，只会在开发期间会用到)")]),t._v(" "),n("li",[t._v("核心依赖包(被记录到dependencies节点中的，在开发期间和项目上线之后都会用到)")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm i 包名 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("\nnpm i 包名\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("全局包")])]),t._v(" "),n("p",[t._v("在执行npm install命令时，如果提供了-g参数，则会把包安装为全局包。\n全局包会被安装到C:\\Users\\用户目录\\AppData\\Roaming\\npm\\node_modules目录下。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm i 包名"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g\nnpm uninstall 包名 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g \n")])])]),n("p",[t._v("注意：")]),t._v(" "),n("ul",[n("li",[t._v("只有工具性质的包，才有全局安装的必要性。因为它们提供了好用的终端命令。")]),t._v(" "),n("li",[t._v("判断某个包是否需要全局安装后才能使用，可以参考官方提供的使用说明即可。")])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("i5ting_toc")])]),t._v(" "),n("p",[t._v("i5ting_toc是一个可以把md文档转为html 页面的小工具，使用步骤如下：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g i5ting_toc\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用i5ting_toc ，轻松实现md转为html的功能")]),t._v("\ni5ting_toc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f 要转换的md文件路径 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("o\n")])])]),n("h4",{attrs:{id:"规范的包结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#规范的包结构"}},[t._v("#")]),t._v(" 规范的包结构")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("包的内部结构\n")])])]),n("p",[t._v("一个规范的包，它的组成结构，必须符合以下3点要求：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("包必须以单独的目录而存在")])]),t._v(" "),n("li",[n("p",[t._v("包的顶级目录下要必须包含package.json这个包管理配置文件")])]),t._v(" "),n("li",[n("p",[t._v("package.json中必须包含name、version、main这三个属性，分别代表包的名字、版本号、包的入口")]),t._v(" "),n("p",[t._v("注意：以上3点要求是一个规范的包结构必须遵守的格式，关于更多的约束，可以参考如下网址：\nhttps://yarnpkg.com/zh-Hans/docs/package-json")])])]),t._v(" "),n("h4",{attrs:{id:"开发属于自己的包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发属于自己的包"}},[t._v("#")]),t._v(" 开发属于自己的包")]),t._v(" "),n("ol",[n("li",[t._v("初始化包的基本结构")])]),t._v(" "),n("ul",[n("li",[t._v("新建lCoder-tools文件夹，作为包的根目录")]),t._v(" "),n("li",[t._v("在lCoder-tools文件夹中，新建如下三个文件：\n· package.json (包管理配置文件)\n· index.js (包的入口文件)\n· README.md (包的说明文档)")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("初始化package.json")])]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lCoder-tools"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提供了格式化时间、HTMLEscape相关的功能"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keywords"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lCoder"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dateFormat"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"escape"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"license"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ISC"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[t._v("在index.js中定义格式化时间的方法")])]),t._v(" "),n("li",[n("p",[t._v("在index.js中定义转义html的方法")])]),t._v(" "),n("li",[n("p",[t._v("在index.js中定义还原html的方法")])]),t._v(" "),n("li",[n("p",[t._v("将不同的功能进行模块化拆分")])])]),t._v(" "),n("ul",[n("li",[t._v("将格式化时间的功能，拆分到src -> dateFormat.js 中")]),t._v(" "),n("li",[t._v("将处理HTML字符串的功能，拆分到src -> htmlEscape.js中")]),t._v(" "),n("li",[t._v("在index.js中，导入两个模块，得到需要向外共享的方法")]),t._v(" "),n("li",[t._v("在index.js中，使用module.exports把对应的方法共享出去")])]),t._v(" "),n("ol",{attrs:{start:"7"}},[n("li",[t._v("编写包的说明文档")])]),t._v(" "),n("p",[t._v("包根目录中的README.md文件，是包的使用说明文档。")]),t._v(" "),n("p",[t._v("一般内容：\n安装方式、导入方式、功能介绍、开源协议")]),t._v(" "),n("h4",{attrs:{id:"发布包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布包"}},[t._v("#")]),t._v(" 发布包")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("注册npm账号")])]),t._v(" "),n("li",[n("p",[t._v("登录npm账号\n在本地登录npm login")])])]),t._v(" "),n("p",[t._v("注意：在运行npm login命令之前，必须先把下包的服务器地址切换为npm的官方服务。否则会导致发布包的失败")]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("把包发布到Npm上")])]),t._v(" "),n("p",[t._v("在终端切换的包的根目录之后，运行npm publish 命令，即可将包发布到npm上(注意：包名不能雷同)")]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("删除已发布的包")])]),t._v(" "),n("p",[t._v("运行npm unpublish 包名 --force 命令，即可从npm删除已发布的包")]),t._v(" "),n("p",[t._v("注意：")]),t._v(" "),n("ul",[n("li",[t._v("npm unpublish 命令只能删除72小时之内发布的包")]),t._v(" "),n("li",[t._v("npm unpublish 删除的包，在24小时之内不允许重复发布")])]),t._v(" "),n("h3",{attrs:{id:"模块的加载机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块的加载机制"}},[t._v("#")]),t._v(" 模块的加载机制")]),t._v(" "),n("ol",[n("li",[t._v("优先从缓存中加载")])]),t._v(" "),n("p",[t._v("模块在第一次加载后会被缓存。这也意味着多次调用require()不会导致模块的代码被执行多次。")]),t._v(" "),n("p",[t._v("注意：不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存加载，从而提高模块的加载效率")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("内置模块的加载机制")])]),t._v(" "),n("p",[t._v("内置模块是由Node.js官方提供的模块，内置模块的加载优先级最高。")]),t._v(" "),n("p",[t._v("例如："),n("code",[t._v("js require('fs')")]),t._v("始终返回内置的fs模块，即使在node_modules目录下有名字相同的包也叫fs")]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[t._v("自定义模块的加载机制")]),t._v(" "),n("p",[t._v("使用require()加载自定义模块时，必须指定以./或../开头的路径标识符。在没有指定./或../这样的路径标识符时，则node会把它当作内置模块或第三方模块进行加载。")])])]),t._v(" "),n("p",[t._v("同时，在使用require()导入自定义模块时，如果省略了文件的扩展名，则Node.js会按顺序分别尝试加载以下的文件：")]),t._v(" "),n("ul",[n("li",[t._v("按照确切的文件名进行加载")]),t._v(" "),n("li",[t._v("补全.js扩展名进行加载")]),t._v(" "),n("li",[t._v("补全.json扩展名进行加载")]),t._v(" "),n("li",[t._v("补全.node扩展名进行加载")]),t._v(" "),n("li",[t._v("加载失败，终端报错")])]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("第三方模块的加载机制")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(557),alt:""}})]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("以目录作为模块")])]),t._v(" "),n("p",[t._v("目录作为模块标识符，传递给require()进行加载的时候，有三种加载方式：\n"),n("img",{attrs:{src:a(558),alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);