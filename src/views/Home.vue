<template>
  <div class="home-page-wrapper" ref="wrapper">
    <div  v-if="showing">
      <div class="home-header-content">
        <home-header></home-header>
        <home-swiper :img_list="img_list"></home-swiper>
        <home-tips :home_ad="home_ad"></home-tips>
      </div>
      <home-nav :nav_list="nav_list"></home-nav>
      <home-flash-buy :flash_sale_product_list="flash_sale_product_list"></home-flash-buy>
      <home-special :specialItem="specialItem"></home-special>
      <home-goods :allList="tabbar_all_product_list" :flashList="flash_sale_product_list"></home-goods>
    </div>
    <loading :show="!showing"></loading>
    <to-top></to-top>
  </div>
</template>

<script>
// import axios from 'axios'
import Loading from '../components/common/Loading'
import ToTop from '../components/common/ToTop'
import HomeHeader from './home/HomeHeader'
import HomeSwiper from './home/HomeSwiper'
import HomeTips from './home/HomeTips'
import HomeNav from './home/HomeNab'
import HomeFlashBuy from './home/HomeFlashBuy'
import HomeSpecial from './home/HomeSpecial'
import HomeGoods from './home/HomeGoods'
import { getHomeData } from '../serve/api/index'
export default {
  data () {
    return {
      img_list: [],
      home_ad: '',
      showing: false,
      nav_list: [],
      flash_sale_product_list: [],
      tabbar_all_product_list: [],
      specialItem: {},
      top: 0
    }
  },
  components: {
    Loading,
    HomeSwiper,
    HomeHeader,
    HomeTips,
    HomeNav,
    HomeFlashBuy,
    HomeSpecial,
    HomeGoods,
    ToTop
  },
  methods: {

  },
  mounted () {
    getHomeData().then(res => {
      if (res.success) {
        this.img_list = res.data.list[0].icon_list
        this.home_ad = res.data.home_ad.image_url
        this.nav_list = res.data.list[2].icon_list
        this.flash_sale_product_list = res.data.list[3].product_list
        this.tabbar_all_product_list = res.data.list[12].product_list
        this.specialItem = res.data.special_zone
      }
      this.showing = true
    })
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestory')
  },
  destroyed () {
    console.log('destory')
  }
}
</script>

<style lang="scss" scoped>
.home-page-wrapper {
  overflow-y: scroll;
  overflow-x: hidden;
  // height: 100rem;
  height: 100%;
  padding-bottom: 3rem;
  .home-header-content {
    width: 100%;
    background-image: url("http://518taole.7-orange.cn/backImage.png");
  }
}
</style>
