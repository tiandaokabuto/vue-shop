import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { NavBar, Toast, Button, Icon, Tab, Tabs, Cell, CellGroup, Field,
  Divider, Grid, GridItem, Tabbar, TabbarItem, CouponCell, CouponList, Popup,
  RadioGroup, Radio } from 'vant'

Vue.use(NavBar, Toast, Button, Icon, Field, Divider)
Vue.use(Tab).use(Tabs)
Vue.use(Cell).use(CellGroup)
Vue.use(Grid).use(GridItem)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(CouponCell).use(CouponList)
Vue.use(Popup)
Vue.use(RadioGroup).use(Radio)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
