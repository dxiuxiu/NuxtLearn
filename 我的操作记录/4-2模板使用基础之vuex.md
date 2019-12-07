## 模板使用基础之 vuex

### 参考

+ [Vuex 状态树](https://zh.nuxtjs.org/guide/vuex-store)

+ [vuex-store](https://nuxtjs.org/guide/vuex-store)


`Nuxt 中使用 vuex 本质上和纯 vue 项目中使用 vuex 是一样的只是这里面不需要做配置只要按照目录创建 Nust.js 会自动配置`


### store

`store`

#### nuxtServerInit

```javascript

import Vue from 'vue'
import Vuex from 'vuex'

import city from './modules/city'
import navbar from './modules/navbar'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    city,
    navbar
  },
  // [The nuxtServerInit Action](https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action)
  actions: {
    nuxtServerInit({ commit }, { req }) {
      if (req.session.user) {
        // 将 session 中的 user 提交给当前状态中 - 服务端将提交的数据同步给浏览器端，这样浏览器端不用做任何请求就获取了用户名
        commit('city', req.session.user)
      }
    }
  }
})
export default store

```
