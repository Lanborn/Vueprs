(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{548:function(t,s,e){t.exports=e.p+"assets/img/HTTPRequest.aadb8f2e.png"},549:function(t,s,e){t.exports=e.p+"assets/img/HTTP10.beea8bbd.png"},550:function(t,s,e){t.exports=e.p+"assets/img/ChromeRandom.e3d23941.png"},604:function(t,s,e){"use strict";e.r(s);var a=e(3),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"http1-0和http1-1的特点和区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http1-0和http1-1的特点和区别"}},[t._v("#")]),t._v(" HTTP1.0和HTTP1.1的特点和区别")]),t._v(" "),a("p",[t._v("最近要期末考试了，就开始复习起了计网，看到了HTTP这里发现面试的时候这个也是重点，随机就把这个给记录下来了。")]),t._v(" "),a("h3",{attrs:{id:"http1-0的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http1-0的特点"}},[t._v("#")]),t._v(" HTTP1.0的特点")]),t._v(" "),a("p",[t._v("PPT解释： HTTP1.0采用的是非持续性连接方式。在该方式下，每次浏览器要请求一个文件都要与服务器简历TCP连接，当收到响应后就立即关闭连接。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("什么叫非持续性连接呢？")]),t._v(" "),a("p",[t._v("好问题！先上图")]),t._v(" "),a("p",[a("img",{attrs:{src:e(548),alt:""}})]),t._v(" "),a("p",[t._v("从这个请求报文中，不难得知，Connection: Close此时则是不持续连接。")]),t._v(" "),a("p",[t._v("不持续连接的耗费时间是在每次请求中都要多耗费2倍的往返时间RTT，那么举例说明")]),t._v(" "),a("p",[a("img",{attrs:{src:e(549),alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("总之，每请求一个文档就要有两倍的RTT开销显然是不划算的。")]),t._v(" "),a("li",[t._v("而且，为了减小时延，浏览器通常会建立多个并行的TCP连接同时请求多个多个对象。但是，这些会大量占用万维网服务器的资源，特别是万维网服务器往往要同时服务于大量客户的请求，这会加重其负担。")])])])]),t._v(" "),a("h3",{attrs:{id:"http1-1的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http1-1的特点"}},[t._v("#")]),t._v(" HTTP1.1的特点")]),t._v(" "),a("p",[t._v("PPT解释：HTTP1.1采用持续连接的方式，在该方式下，万维网服务器在发送响应后仍然保持这条连接，使同一个客户端和该服务器可以继续在这条连接上传送后续的HTTP请求报文和响应报文。这并不局限于传送同一个页面上的引用对象，而是只要这些文档都在同一个服务器上就行。")]),t._v(" "),a("p",[t._v("接下来，在Chrome中随机抓包一个请求")]),t._v(" "),a("p",[a("img",{attrs:{src:e(550),alt:""}})]),t._v(" "),a("p",[t._v("在这里的Connection:  Keep-alive，眼熟于Vue中的组件状态，相近意思。就是持续连接。直到页面销毁。")]),t._v(" "),a("ul",[a("li",[t._v("为了进一步提高效率，HTTP1.1的持续性连接还可以使用流水线方式工作，即浏览器在收到HTTP的响应报文之前就能够连续发送多个请求报文。这样的一个接一个的请求报文到达服务器后，服务器就发回一个接一个的响应报文。这样就节省了很多个RTT时间，使TCP连接中的空闲时间减少，提高下载文档的效率。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);