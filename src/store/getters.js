export default {
  userInfo: state => {
    return state.userInfo
  },
  shopCart: state => {
    return state.shopCart
  },
  subtitleIndex: state => {
    return state.subtitleIndex
  },
  totalPrice: state => {
    let totalPrice = 0
    Object.values(state.shopCart).forEach((goods, index) => {
      if (goods.checked) {
        totalPrice += (goods.price * goods.nums * 100)
      }
    })
    return totalPrice
  },
  shopCartNums: state => {
    return Object.keys(state.shopCart).length
  }
}
