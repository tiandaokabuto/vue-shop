import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue'),
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/Mine.vue'),
      children: [{
        path: 'userCenter',
        component: () => import('../views/mine/UserCenter.vue'),
        name: 'usercenter',
        children: [{
          path: 'nickName',
          name: 'nickname',
          component: () => import('../views/mine/NickName.vue')
        }]
      }, {
        path: 'couponList',
        name: 'couponlist',
        component: () => import('../views/mine/CouponList.vue')
      }, {
        path: 'myVip',
        name: 'myvip',
        component: () => import('../views/mine/MyVIP.vue')
      }]
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/Order.vue')
    },
    {
      path: '/category',
      component: () => import('../views/Category.vue')
    }]
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
