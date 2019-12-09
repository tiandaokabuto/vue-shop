<template>
  <div class="flash-buy-wrapper">
    <div class="flash-buy-title-wrapper">
      <div class="flash-buy-title-content">限时抢购</div>
      <van-count-down :time="time" class="flash-buy-title-time">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <div class="flash-buy-title-btn">更多</div>
    </div>
    <div class="flash-buy-list-wrapper">
      <ul class="flash-buy-list-content" ref="listWrap">
        <li class="flash-buy-item-wrapper" v-for="item in flash_sale_product_list"
        :key="item.id" ref="itemWrap">
          <img :src="item.small_image" class="item-img"/>
          <span class="item-title">{{item.name}}</span>
          <div class="item-price">
            <div class="price">
              <p class="item-price-now">{{item.price}}</p>
            <p class="item-price-og">{{item.origin_price}}</p>
            </div>
            <div class="buy-cart" @click="add(item)">
              <svg viewBox="0 0 52 52" class="icon icon-60">
                <defs>
                  <radialGradient cx="27.0288363%"
                                  cy="10.3693483%"
                                  fx="27.0288363%"
                                  fy="10.3693483%"
                                  r="93.8427229%"
                                  id="radialGradient-1">
                    <stop stop-color="#4ECA75"
                          offset="0%"></stop>
                    <stop stop-color="#39B460"
                          offset="100%"></stop>
                  </radialGradient>
                </defs>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-678.000000, -2742.000000)">
                    <g transform="translate(678.000000, 2742.000000)">
                      <rect fill="url(#radialGradient-1)"
                            x="0"
                            y="0"
                            width="51.8699976"
                            height="51.8699976"
                            rx="25.9349988"></rect>
                      <path fill="#FFFFFF"
                            d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path>
                      <path stroke="#FFFFFF"
                            stroke-width="2.6"
                            stroke-linecap="round"
                            d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { CountDown, Toast } from 'vant'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      time: 30 * 60 * 60 * 1000
    }
  },
  props: {
    flash_sale_product_list: Array
  },
  components: {
    [CountDown.name]: CountDown
  },
  mounted () {
    console.log('flashbuy mounted')
    this.$nextTick(() => {
      this.init()
    })
  },
  beforeUpdate () {
    console.log('flashbuy beforeUpdate')
  },
  updated () {
    console.log('flashbuy updated')
  },
  beforeDestroy () {
    console.log('flashbuy beforeDestory')
  },
  destroyed () {
    console.log('flashbuy destory')
  },
  methods: {
    ...mapActions(['addToCart']),
    init () {
      let width = 0
      let el = this.$refs.itemWrap
      for (let i = 0; i < el.length; i++) {
        width += el[i].clientWidth
      }
      this.$refs.listWrap.style.width = width + 'px'
      if (!this.flashScroll) {
        this.flashScroll = new BetterScroll('.flash-buy-list-wrapper', {
          probeType: 2,
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: 'vertical'
        })
      } else {
        this.flashScroll.refresh()
      }
    },
    add (item) {
      this.addToCart(item)
      Toast({
        message: '已加入购物车',
        duration: 800
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.flash-buy-wrapper {
  margin-top: 0.625rem;
  padding: 1.25rem 0 0.9375rem 0;
  background-color: white;
  .flash-buy-title-wrapper {
    margin: 0 0.625rem 0.625rem 0.625rem;
    height: 1.5625rem;
    .flash-buy-title-content {
      // display: inline-block;
      border-left: 4px #3cb963 solid;
      padding-left: 0.3125rem;
      height: 1.3125rem;
      line-height: 1.3125rem;
      vertical-align: middle;
      font-size: 1.1875rem;
      float: left;
    }
    .flash-buy-title-time {
      float: left;
      margin-left: 0.7rem;
      .item {
        display: inline-block;
        width: 22px;
        margin-right: 5px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: black;
      }
    }
    .flash-buy-title-btn {
      color: #3cb963;
      float: right;
      font-size: 0.8rem;
    }
  }
  .flash-buy-list-wrapper {
    width: 100%;
    overflow: hidden;
    .flash-buy-list-content {
      display: flex;
      justify-content: flex-start;
      .flash-buy-item-wrapper {
        flex: 0 0 6rem;
        align-items: center;
        padding-right: 0.5rem;
        .item-img {
          width: 100%;
          // 等比缩小图片来适应元素的尺寸
          background-size: contain;
          background-image: url("../../assets/images/placeholderImg/product-img-load.png");
        }
        .item-title {
          padding: 0.2rem;
          display: inline-block;
          font-size: 0.6258rem;
          height: 1.8rem;
          line-height: 1rem;
          font-size: 0.625rem;
          word-break: break-all;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .item-price {
          padding-left: 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          .price {
            flex: 1;
            .item-price-now {
              color: #f37078;
              font-size: 0.928rem;
            }
            .item-price-og {
              font-size: 0.6875rem;
              color: #999999;
              text-decoration: line-through;
            }
          }
          .buy-cart {
            flex: 0 0 1.5rem;
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
  }
}
</style>
