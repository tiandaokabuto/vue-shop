<template>
  <div class="vip-item-wrapper">
    <div class="vip-item-content" v-for="(item, index) in cateDetail" :key="index">
      <div class="vip-item-left-box">
        <img :src="item.small_image">
      </div>
      <div class="vip-item-right-box">
        <div class="vip-item-name">{{item.product_name}}</div>
        <div class="vip-item-desc">{{item.spec}}</div>
        <div class="vip-item-ogprice">￥{{item.origin_price}}</div>
        <div class="vip-item-price">
          ￥{{item.price}}
          <van-tag plain mark color="#5fa85f">绿卡价格</van-tag>
        </div>
        <div class="vip-item-cart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tag } from 'vant'
export default {
  data () {
    return {

    }
  },
  props: {
    cateDetail: Array
  },
  components: {
    [Tag.name]: Tag
  }
}
</script>

<style lang="scss" scoped>
.vip-item-wrapper {
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  color: #8f8f8f;
  .vip-item-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    .vip-item-left-box {
      flex: 1;
      padding: 0.2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .vip-item-right-box {
      flex: 4;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      font-size: 0.7rem;
      .vip-item-name {
        flex: 1;
        font-size: 0.8rem;
        color: #07111b;
        padding: 0.1rem;
      }
      .vip-item-desc {
        flex: 1;
        padding: 0.1rem;
      }
      .vip-item-ogprice {
        flex: 1;
        padding: 0.1rem;
      }
      .vip-item-price {
        flex: 1;
        padding: 0.1rem;
        font-size: 0.8rem;
        color: #5fa85f;
      }
      .vip-item-cart {
        flex: 1;
      }
    }
  }
}
</style>
