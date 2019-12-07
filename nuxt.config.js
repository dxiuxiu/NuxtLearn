module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    // 浏览器 tab 页 头部 hover 时显示的名称
    title: 'starter',

    // 配置 html 页面的 meta 标签
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS - 全局 css
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // 配置 eslint
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
