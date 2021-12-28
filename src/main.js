/*
 * @Author: chenqx2
 * @Date: 2021-12-24 10:18:34
 * @Descripttion:
 * @FilePath: \toutiao-m\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/index.less"

import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
