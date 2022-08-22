## Options Api的弊端

* Options API的一大特点就是在对应的属性中编写对应的功能模块；
* 比如data定义数据、methods中定义的方法、computed中定义计算属性、watch中监听属性改变，也包括生命周期钩子

* 弊端：
  - 当我们实现某一个功能时，这个功能对应的代码逻辑会被拆分到各个属性中；
  - 当我们组件变得更大、更复杂时，逻辑关注点的列表就会增长，那么同一个功能的逻辑就会被拆分的很分散；
  - 尤其对于那些一开始没有编写这些组件的人来说，这个组件的代码是难以阅读和理解

### setup不可以使用this

* 官方关于this有这样一段描述(PR中的)
  - this并没有指向当前组件实例
  - 并且在setup被调用之前，data、computed、methods等都没有被解析
  - 所以无法在setup中获取this
  - 在执行Setup的时候，组件实例还没有被创建出来(错误的)
  - V3源码段
```js
const instance = createComponentInstance()
setup(){}
```

