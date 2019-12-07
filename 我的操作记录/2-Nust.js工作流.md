# 2-Nuxt.js工作流

浏览器发出请求到最终服务端渲染完将页面返回整个过程中经历了什么即整个过程中 Nuxt.js 什么周期是什么?

+ 第一步 - 浏览器发出请求

+ 第二部 - 服务器端接收到请求首先要检查有没有 nuxtServerInit 有的话就执行

+ middleware - 这里可以做任何想要的功能

+ validate() 配合高级动态路由做一些验证

+ asyncData() & fetch() - 获取数据
    + asyncData() 获取的数据是渲染 vue component
    + fetch 获取的数据通常是用来修改 vuex store 的

+ 最后渲染

+ Navigate - 如果有 <nuxt-link> 发起了一个非 server de 路由就会从 middleware 那一步开始重新循环

## # Nuxt.js 工作流程图

