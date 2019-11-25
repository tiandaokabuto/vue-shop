import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '/order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
