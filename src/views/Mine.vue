<template>
  <div class="mine-page-wrapper">
    <van-nav-bar title="我的"
    :fixed=true
    :border=false
    style="height:2.5rem" />
    <!-- 个人信息 -->
    <van-cell-group style="margin-top:2.4rem">
      <van-cell style="background-color: #3bba63;color:#FFF;"
                label-class="labelClass"
                is-link
                center>
        <!-- 已登录 -->
        <template slot="title">
          <div class="personMsg"
          v-if="userInfo.token"
          @click="goToUserCenter">
            <img class="iconImage"
            :src="user_image.login_icon"
            alt="">
            <div class="sex"
            v-if="userInfo.sex">
              <img :src="userInfo.sex === '1'? user_image.male : user_image.female"
              alt="">
            </div>
            <div class="personInfo"
            v-if="userInfo.token">
              <span>{{userInfo.user_name}}</span>
              <span>手机号：{{phoneNumber}}</span>
            </div>
          </div>
          <!-- 未登录状态 -->
          <div class="personMsg"
          v-if="!userInfo.token">
            <img class="iconImage"
            :src="user_image.noLogin_icon"
            alt="">
            <div class="personInfo"
            v-if="!userInfo.token">
              <div @click="login">立即登录</div>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 订单相关 -->
    <van-cell-group>
      <van-cell title="我的订单"
                icon="label"
                value="查看全部订单"
                is-link
                @click="goTomyOrder(0)">
      </van-cell>
      <van-grid :border=false>
        <van-grid-item v-for="(order,index) in orderData"
        :key="index"
        :icon="order.icon"
        :text="order.title"
        @click="goTomyOrder(index + 1)" />
      </van-grid>
    </van-cell-group>
    <!-- 优惠券收货地址 -->
    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="我的优惠券"
                icon="gold-coin"
                :value="userInfo.token?'2张':''"
                @click="goToMyCouponList"
                is-link />
      <van-cell title="我的收货地址"
                icon="todo-list"
                is-link
                @click="goToMyAddredd" />
    </van-cell-group>
    <!-- VIP -->
    <van-cell-group style="margin-top:0.4rem">
      <van-cell is-link
                icon="vip-card"
                @click="goToMyVip">
        <div slot="title">
          <span class="custom-title">我的绿卡</span>
          <van-tag type="danger"
          :round=true>NEW</van-tag>
        </div>
      </van-cell>
    </van-cell-group>
    <!-- 客服意见反馈 -->
    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="联系客服"
                icon="phone"
                value="客服时间 07:00-22:00"
                is-link />
      <van-cell title="意见反馈"
                icon="comment-circle"
                is-link
                @click="onFeedBack" />
    </van-cell-group>
    <keep-alive>
      <router-view v-if="this.$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!this.$route.meta.keepAlive"></router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Dialog, Tag } from 'vant'
export default {
  data () {
    return {
      user_image: {
        login_icon: require('../assets/images/mine/defaultImg.jpeg'),
        noLogin_icon: require('../assets/images/mine/defaultImg.jpeg'),
        female: require('../assets/images/mine/female.png'),
        male: require('../assets/images/mine/male.png')
      },
      orderData: [
        { icon: 'cart-circle-o', title: '待支付' },
        { icon: 'gift-o', title: '待收货' },
        { icon: 'smile-comment-o', title: '待评价' },
        { icon: 'cash-back-record', title: '售后/退款' }
      ]
    }
  },
  methods: {
    // 跳转到用户中心
    goToUserCenter () {
      this.$router.push({ name: 'usercenter' })
    },
    // 跳转到登录界面
    login () {
      this.$router.push('/login')
    },
    // 跳转到我的订单
    goTomyOrder (index) {
      if (this.userInfo.token) {
        if (index === 4) {
          // 跳转到售后退款界面
        } else {
          this.$router.push({ name: 'myorder', query: { item: index } })
        }
      } else {
        this.login()
      }
    },
    // 跳转到我的优惠券
    goToMyCouponList () {
      // 判断是否登录
      if (this.userInfo.token) {
        this.$router.push({ name: 'couponlist' })
      } else {
        this.login()
      }
    },
    // 跳转到我的收货地址
    goToMyAddredd () {
      // 判断是否登录
      if (this.userInfo.token) {
        this.$router.push({ name: 'address' })
      } else {
        this.login()
      }
    },
    // 跳转到VIP页面
    goToMyVip () {
      if (this.userInfo.token) {
        this.$router.push({ name: 'myvip' })
      } else {
        this.login()
      }
    },
    onFeedBack () {
      Dialog.alert({
        confirmButtonText: '记得点个小星❤️哦~',
        title: '💘感谢您的关注💘',
        message: '谢谢~'
      })
    }
  },
  components: {
    [Dialog.name]: Dialog,
    [Tag.name]: Tag
  },
  computed: {
    ...mapGetters(['userInfo']),
    // ...mapGetters(['userInfo']),
    userInfoSex () {
      if (this.userInfo.sex === '1') {
        return this.user_image.female
      } else if (this.userInfoSex.sex === '2') {
        return this.user_image.male
      } else {
        return ''
      }
    },
    phoneNumber () {
      if (this.userInfo) {
        let changeNumber = this.userInfo.phone
        let reg = /^(\d{3})\d{4}(\d{4})$/
        return changeNumber.replace(reg, '$1****$2')
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mine-page-wrapper {
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 3rem;
  .van-nav-bar {
    background-color: #3bba63;
    font-size: 0.6rem;
  }
  .van-nav-bar__title {
    color: white;
  }
  .personMsg {
    display: flex;
    align-items: center;
    color: white;
    .sex {
      position: absolute;
      top: 3.5rem;
      left: 4rem;
      width: 0.1rem;
      height: 0.1rem;
      img {
        width: 1rem;
        height: 1rem;
      }
    }
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
    .personInfo {
      display: flex;
      flex-direction: column;
      margin-left: 0.8rem;
    }

  }
  .van-cell__left-icon {
    color: #45c763;
    font-size: 1rem;
  }
  /*转场动画*/
  .router-slider-enter-active,
  .router-slider-leave-active {
    transition: all 0.3s;
  }

  .router-slider-enter,
  .router-slider-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
}
</style>
