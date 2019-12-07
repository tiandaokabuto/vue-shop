<template>
  <div id="myAddress">
    <!--导航栏-->
    <van-nav-bar title="我的地址"
    left-arrow
    :fixed=true
    :border=true
    @click-left="back"></van-nav-bar>
    <!-- 没有数据的占位图 -->
    <div class="noDataPlaceHold" v-if="userAddress.length === 0">
      <img src="../../assets/images/order/noAddress.png" alt="">
      <span class="desc">还没有添加过地址呢,添加一个吧😄</span>
    </div>
    <van-address-list v-model="chosenAddressId"
                      :list="userAddress"
                      @add="onAdd"
                      @edit="onEdit"
                      @select="onBackAddress"
                      style="margin-top: 3rem"
                      add-button-text="+ 增加新地址">
    </van-address-list>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { AddressList } from 'vant'
export default {
  data () {
    return {
      chosenAddressId: 0
    }
  },
  computed: {
    ...mapGetters(['userAddress'])
  },
  components: {
    [AddressList.name]: AddressList
  },
  methods: {
    ...mapActions(['getAddress', 'setSelectedAddress']),
    back () {
      this.$router.back()
    },
    onAdd () {
      this.$router.push({ name: 'addaddress' })
    },
    onEdit (item) {
      this.$router.push({ name: 'editaddress', params: { address: item } })
    },
    onBackAddress (address) {
      this.setSelectedAddress(address)
      this.back()
    }
  },
  mounted () {
    this.getAddress()
  }
}
</script>

<style lang="scss" scoped>
#myAddress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 200;
  .noDataPlaceHold {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 40%;
      height: 20%;
    }
    .desc {
      color: grey;
      font-size: 0.6rem;
    }
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
  .van-address-list__add {
    bottom: 1rem;
  }
  .van-button--large {
    left: 15%;
    width: 70%;
    border-radius: 2rem;
    background-color: #45c763;
    border: none;
  }
}
</style>
