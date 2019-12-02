<template>
  <div class="home-goods-wrapper">
    <van-tabs v-model="activeTitle"
    animated:true
    swipeable
    sticky
    :border="false"
    :offset-top="47"
    ref="tabs"
    type="line"
    color="#28BE57"
    title-active-color="#28BE57">
      <van-tab>
        <div slot="title">
          {{tabTitles[0]}}
        </div>
        <goods-product :goodsList="allList"></goods-product>
      </van-tab>
      <van-tab>
        <div slot="title">
          {{tabTitles[1]}}
        </div>
        <goods-product :goodsList="flashList"></goods-product>
      </van-tab>
      <van-tab>
        <div slot="title">
          {{tabTitles[2]}}
        </div>
        <goods-product :goodsList="allList"></goods-product>
      </van-tab>
      <van-tab>
        <div slot="title">
          {{tabTitles[3]}}
        </div>
        <goods-product :goodsList="flashList"></goods-product>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import GoodsProduct from './HomeGoodsProduct'
export default {
  data () {
    return {
      activeTitle: 0,
      tabTitles: ['全部', '晚餐', '人气', '心选']
    }
  },
  components: {
    GoodsProduct
  },
  props: {
    allList: Array,
    flashList: Array
  }
}
</script>

<style lang="scss" scoped>
.van-tab__pane {
  background-color: #f5f5f5;
}
</style>
