<template>
  <div class="order-page-wrapper">
    <van-nav-bar title="填写订单"
    left-arrow
    :fixed=true
    @click-left="back"/>
    <van-contact-card :type="address_type"
    add-text="选择收货地址"
    :name="address_name"
    :tel="address_phone"
    @click="chooseAddress"
    style="margin-top:3rem" />
    <!-- 商品缩略图 -->
    <van-cell-group>
      <van-cell title="送达时间"
      :value="deliveryTime"
      is-link
      @click="showOrderTime">
        <template slot="label">
          <span class="custom-title">超过十分钟可获得积分补偿</span>
          <van-icon name="question-o" />
        </template>
      </van-cell>
      <!-- 送货时间区间选择器 -->
      <order-time ref="timeInterval"
      :showOrderTimePicker="showOrderTimePicker"
      @changeData="changeData"></order-time>
      <!-- 商品缩略图 -->
      <div class="order-goods-wrapper" @click="goToList">
        <div class="goods-img-wrapper" ref="goodsImgWrapper">
          <ul class="img-ul-wrapper"
              ref="imgUlWrapper">
            <li ref="imgLiWrapper"
                style="display:inline"
                v-for="(item,index) in selectedGoods"
                :key="index">
              <img :src="item.smallImage" alt="">
            </li>
          </ul>
        </div>
        <ul class="productCount">
          <span>共{{selectedCount}}件
          </span>
          <van-icon name="arrow" />
        </ul>
      </div>
    </van-cell-group>
    <!-- 支付方式 -->
    <van-radio-group v-model="radio">
      <van-cell-group title="支付方式">
        <van-cell clickable
                  @click="radio = '1'">
          <template slot="title">
            <img src="../assets/images/order/wx.png"
            alt=""
            width="25px"
            height="25px"
            style=" vertical-align: middle;padding-right:5px">
            <span>微信支付</span>
          </template>
          <van-radio slot="right-icon"
          name="1"
          checked-color="#07c160" />
        </van-cell>
        <van-cell clickable
                  @click="radio = '2'">
          <template slot="title">
            <img src="../assets/images/order/zfb.png"
            alt=""
            width="25px"
            height="25px"
            style=" vertical-align: middle;padding-right:5px">
            <span>支付宝支付</span>
          </template>
          <van-radio slot="right-icon"
          name="2"
          checked-color="#07c160" />
        </van-cell>
        <van-cell clickable
                  @click="radio = '3'">
          <template slot="title">
            <img src="../assets/images/order/hb.png"
            alt=""
            width="25px"
            height="25px"
            style=" vertical-align: middle;padding-right:5px">
            <span>花呗支付</span>
          </template>
          <van-radio slot="right-icon"
          name="3"
          checked-color="#07c160" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <!-- 优惠券 -->
    <van-cell-group style="margin-top: 0.6rem">

      <van-coupon-cell :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true" />

      <van-popup v-model="showList"
      position="bottom">
        <van-coupon-list :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @change="onChange"
        @exchange="onExchange" />
      </van-popup>
      <van-cell>
        <div slot="title">使用{{integral}}积分兑换<div>￥{{integralToPrice}}</div></div>
        <van-switch v-model="checked"
                    slot="right-icon"
                    @input="onInput"
                    active-color="#07c160" />
      </van-cell>
    </van-cell-group>
    <!-- 备注 -->
    <van-cell-group style="margin-top: 0.6rem">
      <van-field label="备注"
      type="textarea"
      placeholder="选填,可以告诉我们您的特殊需求"
      rows="1"
      autosize
      is-link />
    </van-cell-group>
    <!-- 总价 -->
    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="商品金额">
        <div class="money">{{(totalPrice/100)}}</div>
      </van-cell>
      <van-cell title="配送费">
        <div class="money">0.00</div>
      </van-cell>
      <van-cell title="积分"
      v-show="isShowPreferential">
        <div class="integralToMoney">-￥{{integralToPrice}}</div>
      </van-cell>
    </van-cell-group>
    <van-submit-bar :price="finalPrice"
                    label="实付"
                    button-text="提交订单"
                    @submit="submit" />
    <router-view></router-view>
  </div>
</template>

<script>
import OrderTime from './order/OrderTime'
import { mapGetters, mapActions } from 'vuex'
import { ContactCard, Icon, Field, SubmitBar, Switch, Popup, Dialog, Toast } from 'vant'
export default {
  data () {
    return {
      address_type: 'add', //地址卡片类型
      address_name: null, // 收货人
      address_phone: null, // 收货人电话
      address_id: null, // 收货人地址ID

      showOrderTimePicker: false,
      radio: '1', // 支付方式
      deliveryTime: '请选择送达时间',
      isShowPreferential: false, // 展示积分兑换
      showList: false, // 展示优惠券列表
      coupons: [{ // 优惠券信息
        available: 1,
        condition: '无使用门槛\n最多优惠1.5元',
        reason: '',
        value: 150,
        name: '优惠券 ',
        startAt: 1549104000,
        endAt: 1614592000,
        valueDesc: '1.5',
        unitDesc: '元'
      }, { // 优惠券信息
        available: 1,
        condition: '无使用门槛\n最多优惠2元',
        reason: '',
        value: 200,
        name: '优惠券 ',
        startAt: 1549104000,
        endAt: 1614592000,
        valueDesc: '2',
        unitDesc: '元'
      }],
      chosenCoupon: -1,
      integral: 800, // 积分
      checked: false // 积分兑换开关
    }
  },
  components: {
    OrderTime,
    [ContactCard.name]: ContactCard,
    [Icon.name]: Icon,
    [Field.name]: Field,
    [SubmitBar.name]: SubmitBar,
    [Switch.name]: Switch,
    [Popup.name]: Popup,
    [Dialog.name]: Dialog,
    [Toast.name]: Toast
  },
  computed: {
    ...mapGetters(['shopCart', 'totalPrice', 'selectedGoods', 'selectedAddress']),
    selectedCount () {
      return this.selectedGoods.length
    },
    // 积分转rmb
    integralToPrice () {
      if (this.integral > 0) {
        return (this.integral / 100)
      } else {
        return 0
      }
    },
    // 实付
    finalPrice () {
      let finalPrice
      if (this.chosenCoupon !== -1) {
        finalPrice = this.totalPrice - this.coupons[this.chosenCoupon].value
      } else {
        finalPrice = this.totalPrice
      }
      if (this.checked) {
        return finalPrice - this.integral
      } else {
        return finalPrice
      }
    }
  },
  watch: {
    selectedAddress () {
      this.address_type = 'edit'
      this.address_name = this.selectedAddress.name
      this.address_phone = this.selectedAddress.tel
      this.address_id = this.selectedAddress.id
    }
  },
  methods: {
    ...mapActions(['getCart']),
    back () {
      this.$router.back()
    },
    goToList () {
      this.$router.push({ name: 'orderlist' })
    },
    chooseAddress () {
      this.$router.push({ name: 'address' })
    },
    showOrderTime () {
      this.showOrderTimePicker = true
    },
    // 选择优惠券
    onChange (index) {
      console.log(index)
      this.showList = false
      this.chosenCoupon = index
    },
    // 兑换优惠券
    onExchange (code) {
      // this.coupons.push(code)
      console.log(code)
    },
    // 点击使用积分的开关
    onInput (checked) {
      if (this.integral > this.selectedTotalPrice) {
        // 4.2不能使用积分
        Dialog.alert({
          message: '您的实际价格小于积分兑换价格,建议您在多买几件'
        }).then(() => {
          this.checked = false
        })
      } else {
        this.isShowPreferential = !this.isShowPreferential
      }
    },
    changeData (flag, time) {
      this.showOrderTimePicker = flag
      this.deliveryTime = time
    },
    submit () {
      if (!this.address_name) {
        Toast({
          message: '请选择收货地址',
          duration: 800
        })
      } else if (this.deliveryTime === '请选择送达时间') {
        Toast({
          message: this.deliveryTime,
          duration: 800
        })
      } else {
        Toast({
          message: '提交订单',
          duration: 800
        })
      }
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
.order-page-wrapper {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  margin-bottom: 5rem;
  .order-goods-wrapper {
    height: 4rem;
    width: 100%;
    position: relative;
    .goods-img-wrapper {
      display: flex;
      white-space: nowrap;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: flex-start;
      height: 4rem;
      width: 80%;
      overflow: hidden;
      .img-ul-wrapper {
        flex-wrap: nowrap;
        img {
          height: 3rem;
          width: 3rem;
        }
      }
    }
    .productCount {
      right: 0.1rem;
      top: 1.5rem;
      position: absolute;
      color: grey;
    }
  }
}
</style>
