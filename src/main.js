import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { NavBar, Toast, Button, Icon, Tab, Tabs, Cell, CellGroup, Field, Divider, Grid, GridItem } from 'vant'

Vue.use(NavBar, Toast, Button, Icon, Field, Divider)
Vue.use(Tab).use(Tabs)
Vue.use(Cell).use(CellGroup)
Vue.use(Grid).use(GridItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
