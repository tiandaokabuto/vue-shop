<template>
  <div class="home-page-wrapper" ref="wrapper" v-if="showing">
    <div class="home-header">
      <home-header></home-header>
      <home-swiper :img_list="img_list"></home-swiper>
      <home-tips :home_ad="home_ad"></home-tips>
    </div>
    <home-nav :nav_list="nav_list"></home-nav>
    <home-flash-buy :flash_sale_product_list="flash_sale_product_list"></home-flash-buy>
  </div>
</template>

<script>
// import axios from 'axios'
// import Loading from '../components/common/Loading'
import HomeHeader from './home/HomeHeader'
import HomeSwiper from './home/HomeSwiper'
import HomeTips from './home/HomeTips'
import HomeNav from './home/HomeNab'
import HomeFlashBuy from './home/HomeFlashBuy'
import { getHomeData } from '../serve/api/index'
export default {
  data () {
    return {
      img_list: [],
      home_ad: '',
      showing: false,
      nav_list: [],
      flash_sale_product_list: []
    }
  },
  components: {
    // Loading
    HomeSwiper,
    HomeHeader,
    HomeTips,
    HomeNav,
    HomeFlashBuy
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
      }
      this.showing = true
    })
  }
}
</script>

<style lang="scss" scoped>
.home-page-wrapper {
  overflow-y: scroll;
  height: 100rem;
  overflow-x: hidden;
  .home-header {
    width: 100%;
    background-image: url("http://518taole.7-orange.cn/backImage.png");
  }
}
</style>
