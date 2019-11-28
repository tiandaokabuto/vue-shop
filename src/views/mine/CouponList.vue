<template>
  <div class="couponList-page-wrapper">
    <van-nav-bar title="我的优惠券"
    :fixed=true
    left-arrow
    @click-left="back"
    style="height: 2.5rem"
    />
    <van-coupon-list
      input-placeholder="请输入520hyy兑换"
      :coupons="coupons"
      :disabled-coupons="disabledCoupons"
      :chosen-coupon="chosenCoupon"
      @change="onChange"
      @exchange="onExchange"
      style="margin-top: 3rem"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      coupons: [{
        available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元'
      }, { available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元' }],
      disabledCoupons: [{
        available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元'
      }, { available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '2',
        unitDesc: '元' }],
      chosenCoupon: -1
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    onChange (index) {
      this.showList = false
      this.chosenCoupon = index
    },
    onExchange (code) {

    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.couponList-page-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
}
</style>
