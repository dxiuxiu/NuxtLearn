<template>
    <div class="" id="">
      page is search
      <ul>
        <li v-for = "(item,index) in list" :key = "index">{{item}}</li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  // 申明该路由要用的模板,默认使用 default
  layout: 'search',
  data() {
    return {
      list: []
    }
  },
  // 处理组件数据
  // 内容刷新没有闪烁非常流畅
  async asyncData() {
    // 默认会是 80 端口
    // const res = await axios.get('/city/list')
    const res = await axios.get('http://localhost:3000/city/list')
    console.log(res)
    let {status, data: list} = res

    console.log(list)
    if (status === 200) {
      return {
        list
      }
    }
  }

  // fetch 主要处理与 vuex 相关的
  // async fetch() {
  //   // 默认会是 80 端口
  //   const res = await axios.get('/city/list')
  //   // const res = await axios.get('http:localhost:3000/city/list')
  //   console.log(res)
  //   let {status, data: list} = res

  //   console.log(list)
  //   if (status === 200) {
  //     return {
  //       list
  //     }
  //   }
  // }

  // vue 中的写法 - 页面刷新内容会有闪烁
//   async mounted() {
//     const self = this
//     const res = await axios.get('/city/list')
//     console.log(res)
//     let {status, data: list} = res

//     console.log(list)
//     if (status === 200) {
//       self.list = list
//     }
//   }

}
</script>
<style scoped>
/* css */

</style>
