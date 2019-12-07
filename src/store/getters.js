export default {
  userInfo: state => {
    return state.userInfo
  },
  shopCart: state => {
    return state.shopCart
  },
  userAddress: state => {
    return state.userAddress
  },
  subtitleIndex: state => {
    return state.subtitleIndex
  },
  // 选中商品的价格
  totalPrice: state => {
    let totalPrice = 0
    Object.values(state.shopCart).forEach((goods, index) => {
      if (goods.checked) {
        totalPrice += (goods.price * goods.nums * 100)
      }
    })
    return totalPrice
  },
  // 购物车中的商品数量
  shopCartNums: state => {
    return Object.keys(state.shopCart).length
  },
  // 购物车中选中的商品
  selectedGoods: state => {
    let goods = []
    Object.values(state.shopCart).forEach((item, index) => {
      if (item.checked) {
        goods.push(item)
      }
    })
    return goods
  },
  selectedAddress: state => {
    return state.selectedAddress
  }
}
