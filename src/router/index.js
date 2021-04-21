import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/Home.vue'
import button from '../components/button/button'
Vue.use(Router)

const routes = [
  // { path: '*', component: () => import('../pages/Home.vue') },
  { path: '*', component: home },
  { path: '*', component: button }
]

export default new Router({
  routes
})
