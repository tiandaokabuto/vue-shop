<template>
  <div class="tem">
    <van-tabbar v-model="active"
    class="active_tab"
    active-color="#75a342"
    >
    <van-tabbar-item
    v-for="(item, index) in tabbars" :key="index"
    @click="tab(index, item.name)"
    :info="item.name === 'cart' ? (shopCartNums === 0? '' : shopCartNums) : '' "
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
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import { mapActions, mapGetters } from 'vuex'
// import axios from 'axios'
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
    ...mapActions(['autoLogin', 'getCart']),
    tab (index, name) {
      this.currIndex = index
      this.active = index
      this.$router.push({ name: name }).catch(err => { if (err) {} })
    }
  },
  computed: {
    ...mapGetters(['shopCartNums'])
  },
  watch: {
    $route: {
      handler (val, oldval) {
        switch (val.name) {
          case 'home':
            this.active = 0
            break
          case 'category':
            this.active = 1
            break
          case 'eat':
            this.active = 2
            break
          case 'cart':
            this.active = 3
            break
          case 'mine':
            this.active = 4
            break
          default:
            break
        }
      }
    },
    deep: true
  },
  mounted () {
    switch (this.$route.name) {
      case 'home':
        this.active = 0
        break
      case 'category':
        this.active = 1
        break
      case 'eat':
        this.active = 2
        break
      case 'cart':
        this.active = 3
        break
      case 'mine':
        this.active = 4
        break
      default:
        break
    }
    this.autoLogin()
    this.getCart()
    // axios.get('/api/test?a=1&b=2').then(res => {
    //   console.log(res)
    // })
  }
}
</script>

<style lang="scss" scoped>
.item {
  height: 100%;
  overflow-y: scroll;
}
</style>
