<template>
  <div class="order-page-wrapper">
    <van-nav-bar title="我的订单"
    @click-left="back"
    left-arrow
    :fixed=true
    :border=false
    style="height:2.5rem" />
    <van-tabs style="margin-top: 3rem"
    v-model="activeItem"
    animated
    swipeable
    sticky
    :border="false"
    ref="tabs"
    color="#28BE57">
      <van-tab title="全部" name="0">
        <order-data-list :orderData="orderData"></order-data-list>
      </van-tab>
      <van-tab title="待支付" name="1">
        <order-data-list :orderData="orderData"></order-data-list>
      </van-tab>
      <van-tab title="待收货" name="2">
        <order-data-list :orderData="orderData"></order-data-list>
      </van-tab>
      <van-tab title="待评价" name="3">
        <order-data-list :orderData="orderData"></order-data-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OrderDataList from './order/OrderDataList'
export default {
  data () {
    return {
      activeItem: '0',
      orderData: []
    }
  },
  components: {
    OrderDataList
  },
  methods: {
    back () {
      this.$router.back()
    }
  },
  mounted () {
    console.log(this.$route.query.item)
    this.activeItem = this.$route.query.item.toString()
  }
}
</script>

<style lang="scss" scoped>
.order-page-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: #f5f5f5;
  .van-icon {
    color: #dedede;
  }
}
</style>
