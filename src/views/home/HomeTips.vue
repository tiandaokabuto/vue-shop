<template>
  <div class="tips">
    <div class="tipsBox">
      <img src="../../assets/images/icon/transport.png" alt="">
      <span class="tipsText">最快29分钟送达</span>
    </div>
    <div class="tipsBox">
      <img src="../../assets/images/icon/money.png" alt="">
      <span class="tipsText">0元起送 0配送费</span>
    </div>
    <div class="tipsBox">
      <img src="../../assets/images/icon/seal.png" alt="">
      <span class="tipsText">安心退</span>
    </div>
    <div>
      <img class="adImg" :src="home_ad">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    home_ad: String
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.tips {
  margin-top: 0.3rem;
  position: relative;
  .tipsBox {
    float: left;
    width: 33%;
    text-align: center;
    img {
      vertical-align: middle;
      height: 1rem;
      width: 1rem;
      margin-right: 0.2rem;
    }
    .tipsText {
      font-size: 0.6rem;
      color: #45c763;
    }
  }
  .adImg {
    margin-top: 0.8rem;
    width: 100%;
    height: 6rem;
    margin-bottom: -0.2rem;
  }
}
</style>
