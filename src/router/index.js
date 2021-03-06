import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index/home'
  },
  // 框架
  {
    path: '/index',
    redirect: '/index/home',
    name: 'index',
    component: () => import('../views/Index.vue'),
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        keepAlive: true
      }
    },
    // mine页面
    {
      path: 'mine',
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
        component: () => import('../views/mine/MyVIP.vue'),
        meta: {
          keepAlive: true
        }
      }, {
        path: 'myOrder',
        name: 'myorder',
        component: () => import('../views/mine/MyOrder.vue')
      }]
    },
    // category页面
    {
      path: 'category',
      name: 'category',
      component: () => import('../views/Category.vue')
    },
    // cart页面
    {
      path: 'cart',
      name: 'cart',
      component: () => import('../views/Cart.vue'),
      meta: {
        keepAlive: true
      }
    },
    // eat页面
    {
      path: 'eat',
      name: 'eat',
      component: () => import('../views/Eat.vue'),
      meta: {
        keepAlive: true
      }
    }]
  },
  // 登录页面
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  // 开通vip页面
  {
    path: '/vipPay',
    name: 'vippay',
    component: () => import('../views/mine/vip/MyVIPPay.vue')
  },
  // 订单页面
  {
    name: 'order',
    path: '/order',
    component: () => import('../views/Order.vue'),
    children: [{
      name: 'orderlist',
      path: 'orderList',
      component: () => import('../views/order/OrderList.vue')
    }, {
      name: 'address',
      path: 'address',
      component: () => import('../views/order/OrderAddress.vue'),
      children: [{
        name: 'addaddress',
        path: 'addAddress',
        component: () => import('../views/order/address/AddAddress.vue')
      }, {
        name: 'editaddress',
        path: 'editAddress',
        component: () => import('../views/order/address/EditAddress.vue')
      }]
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
