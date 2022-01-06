import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import CoinList from '../views/coins/CoinList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/coins',
    name: 'CoinList',
    component: CoinList
  }
]

const router = new VueRouter({
  routes
})

export default router
