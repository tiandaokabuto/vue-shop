<template>
  <div class="vip-pay-wrapper">
    <van-nav-bar title="开通绿卡"
    left-arrow
    @click-left="back"
    :fixed=true
    :border=false
    style="height:2.5rem" />
    <div class="userinfo-wrapper">
      <div class="userinfo-img">
        <img src="../../../assets/images/mine/defaultImg.jpeg">
      </div>
      <div class="userinfo-content">
        <span>{{userInfo.user_name}}</span>
        <span>{{vipTipMsg}}</span>
      </div>
    </div>
    <div class="vip-desc-wrapper">
      <div class="vip-desc-text">开通绿卡享三大权益,预计每单省6.66元</div>
      <van-grid :column-num="3"
                :border=false>
        <van-grid-item icon="vip-card-o"
        text="专享券"
        style="color:#60b86a" />
        <van-grid-item icon="discount"
        text="专享特价"
        style="color:#60b86a" />
        <van-grid-item icon="gem-o"
        text="2倍积分"
        style="color:#60b86a" />
      </van-grid>
    </div>
    <!-- VIP类型 -->
    <van-radio-group v-model="typeRadio" class="vip-type-wrapper">
        <div class="vip-type-item">
          <i>5折</i>
          <span class="vip-type-item-title">年卡·365天</span>
          <!-- <a href="javaScript:;" class="vip-type-item-checkbox"
          :checked="checked"></a> -->
          <van-radio name="1" checked-color="#60b86a"></van-radio>
          <p>相当于约0.24元/天</p>
          <div class="vip-type-item-price">¥88</div>
          <span class="vip-type-item-ogprice">¥188</span>
        </div>
        <div class="vip-type-item">
          <i>7折</i>
          <span class="vip-type-item-title">季卡·90天</span>
          <!-- <a href="javaScript:;" class="vip-type-item-checkbox"
          :checked="secondChecked"></a> -->
          <van-radio name="2" checked-color="#60b86a"></van-radio>
          <p>相当于约0.33元/天</p>
          <div class="vip-type-item-price">¥30</div>
          <span class="vip-type-item-ogprice">¥45</span>
        </div>
    </van-radio-group>
    <!-- 支付方式 -->
    <van-radio-group v-model="payRadio">
      <van-cell-group title="支付方式">
        <van-cell clickable
                  @click="radio = '1'">
          <template slot="title">
            <img src="../../../assets/images/order/wx.png"
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
            <img src="../../../assets/images/order/zfb.png"
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
            <img src="../../../assets/images/order/hb.png"
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
    <div class="vip-pay-button" @click="pay">立即支付</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      vipTipMsg: '绿卡未开通',
      typeRadio: '1',
      payRadio: '1'
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  components: {

  },
  methods: {
    back () {
      this.$router.back()
    },
    pay () {

    }
  }

}
</script>

<style lang="scss" scoped>
.vip-pay-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 100;
  overflow-y: auto;
  padding-bottom: 4rem;
  .van-nav-bar {
    background-color: #303747;
    font-size: 0.6rem;
    .van-icon {
      color: #ffffff;
    }
  }
  .van-nav-bar__title {
    color: #f5f5f5;
  }
  .userinfo-wrapper {
    width: 100%;
    height: 3rem;
    margin-top: 2.5rem;
    background: #303747;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    .userinfo-img {
      padding: 0.5rem;
      height: 2rem;
      width: 2rem;
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    .userinfo-content {
      display: flex;
      flex-direction: column;
      margin-left: 0.2rem;
      font-size: 0.8rem;
      line-height: 1.2rem;
      color: white;
    }
  }
  .vip-desc-wrapper {
    padding-top: 1rem;
    width: 100%;
    .vip-desc-text {
      text-align: center;
      font-size: 0.8rem;
      font-weight: bolder;
    }
  }
  .vip-type-wrapper {
    display: flex;
    width: 100%;
    height: 8rem;
    padding-top: 1rem;
    flex-direction: row;
    justify-content: center;
    .vip-type-item {
      width: 35%;
      height: 80%;
      margin-left: 1rem;
      border-radius: 0.6rem;
      position: relative;
      background-color: #f5f5f5;
      i {
        display: block;
        width: 1.8rem;
        height: 1rem;
        line-height: 1rem;
        background-color: #ed504a;
        text-align: right;
        padding-right: 0.2rem;
        color: white;
        font-size: 0.8rem;
        border-radius: 0.5rem 0.2rem 0.2rem 0;
      }
      .vip-type-item-title {
        padding-left: 0.7rem;
        font-size: 0.8rem;
        color: black;
      }
      .van-radio {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
      }
      p {
        padding-top: 0.2rem;
        font-size: 0.6rem;
        padding-left: 0.7rem;
        color: #9faba1;
        white-space: nowrap;
        margin-bottom: 1rem;
      }
      .vip-type-item-price {
        display: inline;
        padding-left: 0.7rem;
        padding-right: 0.5rem;
        font-size: 1.5rem;
        color: #60b86a;
      }
      .vip-type-item-ogprice {
        color: grey;
        font-size: 0.75rem;
        text-decoration: line-through;
      }
    }
  }
  .vip-pay-button {
    text-align: center;
    position: fixed;
    bottom: 1rem;
    height: 2.5rem;
    line-height: 2.5rem;
    color: white;
    width: 90%;
    left: 5%;
    right: 5%;
    z-index: 999;
    border-radius: 1.5rem;
    background-color: #60b86a;
  }
}
</style>
