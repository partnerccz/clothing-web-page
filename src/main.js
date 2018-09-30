// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axiosIntence from './common/axiosIntence'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(mint)
Vue.prototype.$http = axiosIntence // 将http设置到vue组件中
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
