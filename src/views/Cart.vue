<template>
  <div class="cart-page-wrapper">
    <div v-if="showing">
      <div class="cart-header-wrapper">
        <h4>购物车</h4>
        <div class="cart-header-clear" v-show="!emptyCart" @click="deleteGoods"
        :style="selectedGoodsNums === 0? 'color:grey' : 'color:#45c763'">
          删除
        </div>
      </div>
      <div class="cart-content-wrapper">
        <div class="cart-content-empty" v-show="emptyCart">
          <img src="../assets/images/cart/empty.png" alt="">
          <div class="empty-title">购物车空荡荡~</div>
          <div class="empty-btn">去逛逛</div>
        </div>
        <div class="cart-content" v-show="!emptyCart">
          <div class="cart-lis" v-for="goods in shopCart" :key="goods.id">
            <section>
              <div class="shopCartListCon">
                <div class="left">
                  <a href="javaScript:;"
                  class="cartCheckBox"
                  :checked="goods.checked"
                  @click.stop="single(goods.id)"></a>
                </div>
                <div class="center">
                  <img :src="goods.smallImage">
                </div>
                <div class="right">
                  <a>{{goods.name}}</a>
                  <div class="bottomContent">
                    <p class="shopPrice"> {{goods.price}}</p>
                    <div class="shopDeal">
                      <span @click="reduce(goods.id)">-</span>
                      <input type="number"
                      disabled
                      v-model="goods.nums">
                      <span @click="add(goods)">+</span>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          </div>
          <van-submit-bar
          :price="totalPrice"
          :button-text="submitBarText"
          @submit="submit"
          :disabled="selectedGoodsNums === 0 ? true : false">
            <van-checkbox v-model="allChecked" checked-color="#07c160"
            style="margin-left: 1rem">全选</van-checkbox>
          </van-submit-bar>
        </div>
        <van-divider :style="{ color: 'black', borderColor: 'grey', padding: '0 16px' }">
          猜你喜欢
        </van-divider>
        <goods-product :goodsList="youLike_product_lists"
        :style="!emptyCart ? 'padding-bottom:5.5rem' : 'padding-bottom:3rem'"></goods-product>
      </div>
    </div>
    <loading :show="!showing"></loading>
  </div>
</template>

<script>
import Loading from '../components/common/Loading'
import GoodsProduct from './home/HomeGoodsProduct'
import { getGuessYouLike } from '../serve/api/index'
import { Divider, SubmitBar, Checkbox, Dialog } from 'vant'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      showing: false,
      youLike_product_lists: []
    }
  },
  computed: {
    ...mapGetters(['shopCart', 'totalPrice']),
    // 选中的商品数量
    selectedGoodsNums () {
      let nums = 0
      Object.values(this.shopCart).forEach((item, index) => {
        if (item.checked) {
          nums++
        }
      })
      return nums
    },
    // 结算框文字
    submitBarText () {
      if (this.selectedGoodsNums === 0) {
        return '结算'
      } else {
        return '结算(' + this.selectedGoodsNums + ')'
      }
    },
    // 是否全选
    allChecked: {
      get () {
        let flag = Object.keys(this.shopCart).length > 0
        Object.values(this.shopCart).forEach((item, index) => {
          if (item.checked === false) {
            flag = false
          }
        })
        return flag
      },
      set (value) {
        let allChecked = value
        console.log(allChecked)
        this.seleceAllGoods(allChecked)
      }
    },
    // 购物车是否为空
    emptyCart () {
      let length = Object.keys(this.shopCart).length
      if (length > 0) {
        return false
      } else {
        return true
      }
    }
  },
  components: {
    [Divider.name]: Divider,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [Dialog.name]: Dialog,
    GoodsProduct,
    Loading
  },
  mounted () {
    console.log('mounted')
    getGuessYouLike().then(res => {
      if (res.success) {
        this.youLike_product_lists = res.data.product_list
        this.showing = true
      }
    })
  },

  methods: {
    ...mapActions(['getCart', 'addToCart', 'reduceGoods', 'selectSingleGoods', 'seleceAllGoods', 'deleteSelectedGoods']),
    add (item) {
      this.addToCart(item)
    },
    reduce (id) {
      this.reduceGoods(id)
    },
    single (id) {
      this.selectSingleGoods(id)
      // console.log(id)
    },
    deleteGoods () {
      Dialog.confirm({
        title: '温馨提示',
        message: '确定删除该商品吗?'
      }).then(() => {
        // on confirm 确认删除
        this.deleteSelectedGoods()
      }).catch(() => {
        // on cancel
      })
    },
    submit () {
      this.$router.push({ name: 'order' })
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-page-wrapper {
  background-color: #f5f5f5;
  .cart-header-wrapper {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    font-size: 1rem;
    height: 2.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .cart-header-clear {
      color: grey;
      position: absolute;
      right: .3rem;
      font-size: .8rem;
    }
  }
  .cart-content-wrapper {
    margin-top: 2.6rem;
    width: 100%;
    .cart-content-empty {
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        padding-top: 2rem;
        width: 50%;
        height: 8rem;
        margin: 0 auto;
      }
      .empty-title {
        text-align: center;
        padding: 0.5rem;
      }
      .empty-btn {
        margin-top: 2rem;
        color: white;
        background-color: #45c763;
        text-align: center;
        margin: 0 auto;
        padding: 0.5rem;
        width: 5rem;
        height: 1rem;
        line-height: 1rem;
        border-radius: 1rem;
      }
    }
    .cart-content {
      padding-top: 0.5rem;
      section {
        background-color: #ffffff;
        .shopCartListCon {
          display: flex;
          height: 6rem;
          border-bottom: 0.01rem solid #e0e0e0;
          margin-bottom: 0.7rem;
          padding: 0.5rem 0;
          justify-content: center;
          align-items: center;
          .left {
            flex: 1;
            display: flex;
            a {
              display: inline-block;
              margin-top: 0.8rem;
              margin-left: 0.5rem;
            }
            .cartCheckBox {
              background: url("../assets/images/cart/shop-icon.png") no-repeat;
              background-size: 2.5rem 5rem;
              width: 1rem;
              height: 1rem;
            }
            .cartCheckBox[checked] {
              background-position: -1.2rem 0;
            }
          }
          .center {
            flex: 3;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .right {
            flex: 6;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            position: relative;
            a {
              height: 2.2rem;
              line-height: 1.2rem;
              overflow: hidden;
              margin-bottom: 0.3rem;
              font-size: 0.8rem;
              color: #000;
            }
          }
        }
        .bottomContent {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .shopPrice {
            font-size: 0.8rem;
          }
          .shopDeal span {
            display: inline-block;
            width: 1rem;
            height: 1.2rem;
            line-height: 1.2rem;
            text-align: center;
            float: left;
          }
          .shopDeal input {
            float: left;
            width: 2rem;
            height: 1.2rem;
            text-align: center;
            margin: 0 0.2rem;
            font-size: 0.8rem;
            background-color: #f5f5f5;
            border: 0;
          }
        }
      }
    }
    @media screen and (max-width: 375px) {
      .van-submit-bar {
        bottom: 2.6rem;
      }
    }
    @media screen and (max-width: 320px) {
      .van-submit-bar {
        bottom: 3.2rem;
      }
    }
    @media screen and (max-width: 414px) {
      .van-submit-bar {
        bottom: 2.6rem;
      }
    }
  }
}

</style>
