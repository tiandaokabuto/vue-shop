<template>
  <div class="category-item-wrapper">
    <div class="category-item">
      <div
        class="category-item-main"
        v-for="(it, index) in categoryDetailData"
        :key="index"
        ref="categoryMain"
      >
        <p class="category-item-title">{{it.name}}</p>
        <ul>
          <li
            class="category-item-content"
            v-for="(item, index) in it.products"
            :key="index"
            ref="categoryItem"
          >
            <div class="item">
              <div>
                <img :src="item.small_image" alt />
              </div>
              <div>
                <p class="item-name">{{item.product_name}}</p>
                <p class="item-desc">{{item.spec}}</p>
                <div class="price-icon">
                  <p class="item-price">{{item.price}}</p>
                  <p class="item-ogprice">{{item.origin_price}}</p>
                  <div class="item-icon" @click="add(item)">
                    <svg viewBox="0 0 52 52" class="icon iconCart">
                      <defs>
                        <radialGradient
                          cx="27.0288363%"
                          cy="10.3693483%"
                          fx="27.0288363%"
                          fy="10.3693483%"
                          r="93.8427229%"
                          id="radialGradient-1"
                        >
                          <stop stop-color="#4ECA75" offset="0%" />
                          <stop stop-color="#39B460" offset="100%" />
                        </radialGradient>
                      </defs>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-678.000000, -2742.000000)">
                          <g transform="translate(678.000000, 2742.000000)">
                            <rect
                              fill="url(#radialGradient-1)"
                              x="0"
                              y="0"
                              width="51.8699976"
                              height="51.8699976"
                              rx="25.9349988"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"
                            />
                            <path
                              stroke="#FFFFFF"
                              stroke-width="2.6"
                              stroke-linecap="round"
                              d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Toast } from 'vant'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['subtitleIndex'])
  },
  props: {
    categoryDetailData: Array
  },
  watch: {
    categoryDetailData () {
      this.$nextTick(() => {
        this.init()
      })
    },
    subtitleIndex () {
      let el = this.$refs.categoryMain[this.subtitleIndex]
      this.productScroll.scrollToElement(el, 200)
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    add (item) {
      this.addToCart(item)
      Toast({
        message: '已加入购物车',
        duration: 800
      })
    },
    init () {
      this.productScroll = new BetterScroll('.category-item-wrapper', {
        click: true,
        probeType: 3
      })
    },
    refresh () {
      let el = this.$refs.categoryMain[0]
      this.productScroll.scrollToElement(el, 200)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  }
}
</script>

<style lang="scss" scoped>
.category-item-wrapper {
  position: absolute;
  left: 30%;
  right: 0;
  top: 2.9rem;
  bottom: 0rem;
  overflow: hidden;
  // 防止抖动
  // -webkit-transform: translateZ(0);
  // transform: translateZ(0);
  .category-item {
    .category-item-main {
      .category-item-title {
        display: inline-block;
        padding: 1rem;
        border-left: 3px solid #d9dde1;
        height: 0.32rem;
        width: 100%;
        font-size: 0.73rem;
        color: rgb(147, 153, 159);
        background-color: #f3f5f7;
        padding-left: 0.28rem;
      }
      ul {
        .category-item-content {
          background: white;
          padding: 0.36rem 0.36rem 0 0.36rem;
          .item {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-bottom: 1px solid rgba(7, 17, 27, 0.1);
            padding-bottom: 1rem;
            position: relative;
            img {
              width: 4.0625rem;
              height: 4.0625rem;
              border-radius: 0.04rem;
            }
            .item-name {
              font-size: 0.8375rem;
              line-height: 1rem;
              color: rgb(7, 17, 27);
              margin-bottom: 0.16rem;
            }
            .item-desc {
              padding: 0.2rem;
              line-height: 0.8rem;
              font-size: 0.65rem;
              color: rgb(147, 153, 159);
              margin-bottom: 0.16rem;
            }
            .price-icon {
              display: flex;
              align-items: center;
              .item-price {
                font-size: 0.75rem;
                color: red;
              }
              .item-ogprice {
                padding-left: 0.5rem;
                text-decoration: line-through;
                font-size: 0.6875rem;
                color: #b2b2b2;
              }
              .item-icon {
                padding-left: 3rem;
                width: 1.875rem;
                .icon {
                  fill: #999;
                  width: 1rem;
                  height: 1rem;
                }
                .iconCart {
                  display: block;
                  width: 1.5rem;
                  height: 1.5rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
