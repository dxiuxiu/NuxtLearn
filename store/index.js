
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
      // if (req.session.user) {
      //   // 将 session 中的 user 提交给当前状态中 - 服务端将提交的数据同步给浏览器端，这样浏览器端不用做任何请求就获取了用户名
      //   commit('city', req.session.user)
      // }
      commit('city', 'testName')
    }
  }
})
export default store
