<template>
  <div class="tem">
    <van-tabbar v-model="active"
    class="active_tab"
    active-color="#75a342"
    >
    <van-tabbar-item
    v-for="(item, index) in tabbars" :key="index"
    @click="tab(index, item.name)"
    :info="item.name === 'cart' ? goodsNum : '' "
    >
      <span :class="currIndex === index ? active : '' ">{{item.title}}</span>
      <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal">
    </van-tabbar-item>
    </van-tabbar>
    <!-- 是否缓存界面选择加载 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: 'home',
          title: '首页',
          normal: require('../assets/images/tabbar/home_default.png'),
          active: require('../assets/images/tabbar/home_selected.png')
        },
        {
          name: 'category',
          title: '分类',
          normal: require('../assets/images/tabbar/category_default.png'),
          active: require('../assets/images/tabbar/category_selected.png')
        },
        {
          name: 'eat',
          title: '吃什么',
          normal: require('../assets/images/tabbar/eat_default.png'),
          active: require('../assets/images/tabbar/eat_selected.png')
        },
        {
          name: 'cart',
          title: '购物车',
          normal: require('../assets/images/tabbar/shoppingcart_default.png'),
          active: require('../assets/images/tabbar/shoppingcart_selected.png'),
          num: 5
        },
        {
          name: 'mine',
          title: '我的',
          normal: require('../assets/images/tabbar/mine_default.png'),
          active: require('../assets/images/tabbar/mine_selected.png')
        }
      ]
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  methods: {
    ...mapActions(['autoLogin']),
    tab (index, name) {
      this.currIndex = index
      this.active = index
      this.$router.push(name)
    }
  },
  computed: {
    goodsNum () {
      // let num = 0
      // Object.values(this.shopCart).forEach((goods, index) => {
      //   num += goods.num
      // })
      // if (num > 0) {
      //   return num
      // }
      return 1
    }
  },
  mounted () {
    this.autoLogin()
  }
}
</script>

<style lang="scss" scoped>
</style>
