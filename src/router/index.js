/*
 * @Author: chenqx2
 * @Date: 2021-12-24 10:18:34
 * @Descripttion:
 * @FilePath: \toutiao-m\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]
const router = new VueRouter({
  routes
})
export default router
