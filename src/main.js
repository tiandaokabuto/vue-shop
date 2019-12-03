import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import waterfall from 'vue-waterfall2'
import { NavBar, Toast, Button, Icon, Tab, Tabs, Cell, CellGroup, Field,
  Divider, Grid, GridItem, Tabbar, TabbarItem, CouponCell, CouponList, Popup,
  RadioGroup, Radio, Sticky, Overlay, Loading, Tag, CountDown } from 'vant'

Vue.use(NavBar, Toast, Button, Icon, Field, Divider, Sticky, Overlay, Loading, Tag, Popup, CountDown)
Vue.use(Tab).use(Tabs)
Vue.use(Cell).use(CellGroup)
Vue.use(Grid).use(GridItem)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(CouponCell).use(CouponList)
Vue.use(RadioGroup).use(Radio)
Vue.use(waterfall)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
