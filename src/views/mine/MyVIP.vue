<template>
  <div class="vip-page-wrapper">
    <!-- 顶栏 -->
    <van-nav-bar title="绿卡VIP"
    :fixed=true
    left-arrow
    @click-left="back"
    :border=false
    style="height: 2.5rem"
    v-if="!isShowLoading"
    />
    <div class="vip-page" v-if="!isShowLoading">
      <!-- 头图 -->
      <div class="vip-page-header">
        <img src="../../assets/images/mine/vip.png" alt="">
      </div>
      <!-- 特权 -->
      <div class="vip-privilege-list-wrapper">
        <div class="vip-privilege-list-title">
          绿卡特权
        </div>
        <van-grid :border=false>
          <van-grid-item icon="vip-card-o" text="专享券" />
            <van-grid-item icon="discount" text="专享特价" />
            <van-grid-item icon="gem-o" text="2倍积分" />
            <van-grid-item icon="more-o" text="更多特权" />
        </van-grid>
        <div class="vip-privilege-levelup" @click="goToPayPage">5折开通绿卡</div>
      </div>
      <!-- 领券 -->
      <div class="vip-privilege-item">
        <span class="vip-privilege-item-num">1</span>
        <span class="vip-privilege-item-desc">绿卡专享券 天天领取优惠</span>
        <!-- 每日领券 -->
        <p class="vip-privilege-time-coupons">
          今日专享券
          <i>每日0点更新</i>
        </p>
        <div class="vip-privilege-item-box">
          <div class="vip-privilege-coupon"
          v-for="item in todayTicket" :key="item.id">
            <div class="vip-privilege-coupon-money"><i>¥</i>{{item.money}}</div>
            <div class="vip-privilege-coupon-condition">满{{item.pay_min}}元使用</div>
            <div class="vip-privilege-coupon-desc">{{item.description}}</div>
            <div class="vip-privilege-coupon-get">立即领取</div>
          </div>
        </div>
        <!-- 每周领券 -->
        <p class="vip-privilege-time-coupons">
          本周专享券
          <i>每日0点更新</i>
        </p>
        <div class="vip-privilege-item-box">
          <div class="vip-privilege-coupon"
          v-for="item in weekTicket" :key="item.id">
            <div class="vip-privilege-coupon-money"><i>¥</i>{{item.money}}</div>
            <div class="vip-privilege-coupon-condition">满{{item.pay_min}}元可用</div>
            <div class="vip-privilege-coupon-desc">{{item.description}}</div>
            <div class="vip-privilege-coupon-get">立即领取</div>
          </div>
        </div>
      </div>
      <!-- 购物积分 -->
      <div class="vip-privilege-item">
        <span class="vip-privilege-item-num">2</span>
        <span class="vip-privilege-item-desc">专享购物积分加速</span>
        <div class="vip-privilege-shopping-box">
          <div class="vip-privilege-shopping-left-box">
            <div class="vip-privilege-shopping-left-box-title">您当前购物</div>
            <div class="vip-privilege-shopping-left-box-subtitle">返积分为<i>1倍</i></div>
          </div>
          <div class="vip-privilege-shopping-right-box">
            <div class="vip-privilege-shopping-right-box-title">开通绿卡购物</div>
            <div class="vip-privilege-shopping-right-box-subtitle">返积分为<i>2倍</i></div>
            <div class="line"></div>
              <img src="../../assets/images/mine/rockets.png" alt="">
          </div>
        </div>
        <div class="vip-privilege-shopping-fast"
        @click="goToPayPage">立即加速</div>
      </div>
      <!-- vip商品列表 -->
      <div class="vip-privilege-item">
        <span class="vip-privilege-item-num">3</span>
        <span class="vip-privilege-item-desc">绿卡专享特价</span>
        <van-sticky :offset-top="40">
          <scroll @menuItemClick="menuItemClick" :cate="cate"></scroll>
        </van-sticky>
        <vip-item :cateDetail="cateDetail"></vip-item>
      </div>
    </div>
    <!-- 底部按钮 -->
    <transition name="fade">
      <div class="vip-bottom-join-btn"
      v-show="isShowBottomBtn"
      transiton="fade"
      >
        <div class="vip-bottom-join-desc">
          <span class="vip-bottom-year">年卡</span>
          <i>88元</i>
          <span class="vip-bottom-year-origin">188元</span>
        </div>
        <div class="vip-bottom-join" @click="goToPayPage">
          开通绿卡
        </div>
      </div>
    </transition>
    <!-- 加载 -->
    <van-overlay :show="isShowLoading">
      <div class="loading-wrapper">
        <van-loading type="spinner" class="loading" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Scroll from '../../components/common/HorizontalScroll'
import VipItem from './vip/MyVIPItem'
import { getVipContent } from '../../serve/api/index'
import { Sticky, Overlay, Loading } from 'vant'
export default {
  data () {
    return {
      isShowLoading: true,
      isShowBottomBtn: false,
      todayTicket: [],
      weekTicket: [],
      cate: [],
      cateDetail: []
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    goToPayPage () {
      this.$router.push({ name: 'vippay' })
    },
    menuItemClick (index) {
      console.log(index)
    }
  },
  components: {
    Scroll,
    VipItem,
    [Sticky.name]: Sticky,
    [Overlay.name]: Overlay,
    [Loading.name]: Loading
  },
  mounted () {
    getVipContent().then(response => {
      this.cate = response.data.cate
      this.cateDetail = response.data.cate_detail
      this.todayTicket = response.data.today_ticket.tickets
      this.weekTicket = response.data.week_ticket.tickets
      this.isShowLoading = false
    })
  }
}
</script>

<style lang="scss" scoped>
.vip-page-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
  overflow-y: auto;
  overflow-x: hidden;
  .van-nav-bar {
    background-color: #303747;
    font-size: 0.6rem;
    .van-icon {
      color: #ffffff;
    }
  }
  .van-nav-bar__title {
    color: #ffffff;
  }
  .vip-page {
    .vip-page-header {
      width: 100%;
      height: 10rem;
      margin-top: 2.4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .vip-privilege-list-wrapper {
      background-color: #ffffff;
      padding-top: 1rem;
      padding-bottom: 0.6rem;
      .vip-privilege-list-title {
        padding-left: 1rem;
        font-size: 1rem;
        color: black;
        font-weight: bolder;
      }
      .vip-privilege-levelup {
        background-color: #303747;
        text-align: center;
        width: 60%;
        height: 2.5rem;
        line-height: 2.5rem;
        border-radius: 2rem;
        margin: 0 auto;
        color: #5fa85f;
        font-size: 0.9rem;
        font-weight: bold;
      }
    }
    .vip-privilege-item {
      margin-top: 1rem;
      width: 100%;
      background-color: #ffffff;
      padding-left: 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      .vip-privilege-item-num {
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        background-color: #60b86a;
        color: white;
        padding: 0 0.3rem;
        border-radius: 0.1rem;
      }
      .vip-privilege-item-desc {
        font-size: 1rem;
        padding-left: 0.5rem;
        color: black;
        font-weight: bolder;
      }
      .vip-privilege-time-coupons {
        padding-top: 1rem;
        font-size: 0.7rem;
        i {
          color: grey;
          padding-left: 0.4rem;
        }
      }
      .vip-privilege-item-box {
        display: flex;
        justify-content: flex-start;
        flex-flow: wrap;
        min-height: 4rem;
        .vip-privilege-coupon {
          padding-left: 0.6rem;
          position: relative;
          margin-top: 0.6rem;
          margin-right: 5%;
          width: 40%;
          height: 4rem;
          border-left: 2px dashed #60b86a;
          border-top: 1px solid #60b86a;
          border-bottom: 1px solid #60b86a;
          border-radius: 0 2px 2px 0;
          .vip-privilege-coupon-money {
            color: #60b86a;
            font-size: 2rem;
            i {
              font-size: 1rem;
            }
          }
          .vip-privilege-coupon-condition {
            font-size: 0.7rem;
            color: #565656;
          }
          .vip-privilege-coupon-desc {
            padding-top: 0.4rem;
            font-size: 0.7rem;
            width: 90%;
            color: #60b86a;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .vip-privilege-coupon-get {
            position: absolute;
            right: 0;
            top: 0;
            font-size: 0.7rem;
            color: #ffffff;
            writing-mode: vertical-rl;
            border-radius: 0 2px 2px 0;
            width: 1.4rem;
            height: 4rem;
            line-height: 1.5rem;
            text-align: center;
            background-color: #60b86a;
          }
        }
      }
      .vip-privilege-shopping-box {
        margin-top: 0.6rem;
        padding-right: 2rem;
        display: flex;
        .vip-privilege-shopping-left-box {
          width: 38%;
          height: 0;
          border-right: 4rem solid transparent;
          border-top: 3.5rem solid #dbdbdb;
          border-radius: 0.5rem 0 0 0;
          .vip-privilege-shopping-left-box-title {
            margin-top: -3rem;
            margin-left: 1rem;
            font-size: 0.5rem;
            color: black;
          }
          .vip-privilege-shopping-left-box-subtitle {
            margin-left: 1rem;
            padding-top: 0.3rem;
            font-size: 0.7rem;
            i {
              color: black;
              font-size: 0.9rem;
            }
          }
        }
        .vip-privilege-shopping-right-box {
          position: relative;
          width: 38%;
          height: 0;
          border-left: 4rem solid transparent;
          border-top: 3.5rem solid #6bbe66;
          transform: rotateX(180deg);
          margin-left: -3.2rem;
          border-top-right-radius: 0.5rem;
          .vip-privilege-shopping-right-box-title {
            margin-top: -1.3rem;
            font-size: 0.5rem;
            color: black;
            transform: rotateX(-180deg);
          }
          .vip-privilege-shopping-right-box-subtitle {
            margin-top: -1.75rem;
            transform: rotateX(-180deg);
            font-size: 0.7rem;
            i {
              color: black;
              font-size: 0.9rem;
            }
          }
          .line {
            margin-top: -1.6rem;
            margin-left: -130%;
            width: 190%;
            height: 0.5rem;
            background-image: linear-gradient(to left, #fbec53, #7affaf);
            border-radius: 0.3rem;
          }
          img {
            top: -2.3rem;
            right: -1.2rem;
            position: absolute;
            transform: rotateX(-180deg);
            width: 3rem;
            height: 3rem;
          }
        }
      }
      .vip-privilege-shopping-fast {
        width: 60%;
        height: 2.5rem;
        line-height: 2.5rem;
        background-color: #303747;
        text-align: center;
        border-radius: 2rem;
        margin: 0 auto;
        color: #5fa85f;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        font-weight: bold;
      }
    }
  }
  .vip-bottom-join-btn {
    position: fixed;
    display: flex;
    bottom: 0.6rem;
    height: 2.5rem;
    width: 90%;
    left: 5%;
    right: 5%;
    z-index: 999;
    border-radius: 1.5rem;
    .vip-bottom-join-desc {
      background-color: #303747;
      width: 70%;
      border-radius: 1.5rem 0 0 1.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      justify-content: flex-start;
      padding-left: 1rem;
      color: white;
      font-size: 0.8rem;
      i {
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        color: #f2525a;
      }
      .vip-bottom-year-origin {
        font-size: 0.6rem;
        text-decoration: line-through;
      }
    }
    .vip-bottom-join {
      text-align: center;
      width: 30%;
      height: 2.5rem;
      line-height: 2.5rem;
      background-color: #3cb963;
      border-radius: 0 1.5rem 1.5rem 0;
      color: white;
      font-size: 0.8rem;
    }
    .fade-enter {
      opacity: 0;
    }
    .fade-enter-active {
      transition: opacity 3s;
    }
    .fade-leave-to {
      opacity: 0;
    }
    .fade-leave-active {
      transition: opacity 3s;
    }
  }
  .loading-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .loading {

    }
  }
}
</style>
