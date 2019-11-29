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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      vipTipMsg: '绿卡未开通'
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
}
</style>
