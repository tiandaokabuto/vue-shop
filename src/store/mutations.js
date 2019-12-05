import { setLocalStore, getLocalStore } from '../utils/global'
export default {
  // 1.设置用户信息
  'SET_USER_INFO': (state, userInfo) => {
    state.userInfo = JSON.parse(userInfo)
    // setLocalStore('userInfo', state.userInfo)
  },
  // 2.设置用户名
  'SET_USER_NAME': (state, name) => {
    state.userInfo.user_name = name
    setLocalStore('userInfo', state.userInfo)
  },
  // 3.设置用户性别
  'SET_USER_SEX': (state, sex) => {
    state.userInfo.sex = sex
    setLocalStore('userInfo', state.userInfo)
  },
  // 4.设置用户生日
  'SET_BIRTHDAY': (state, birthday) => {
    state.userInfo.birthday = birthday
    setLocalStore('userInfo', state.userInfo)
  },
  // 5.设置横向滚动条的索引
  'SET_SUBTITLE_INDEX': (state, index) => {
    state.subtitleIndex = index
  },
  // 6.添加商品到购物车
  'ADD_TO_CART': (state, item) => {
    let shopCart = state.shopCart
    if (shopCart[item.id]) {
      console.log('已存在')
      shopCart[item.id]['nums']++
    } else {
      console.log('不存在')
      shopCart[item.id] = {
        'nums': 1,
        'id': item.id,
        'name': item.product_name,
        'price': item.price,
        'smallImage': item.small_image,
        'checked': true
      }
    }
    state.shopCart = { ...shopCart }
    setLocalStore('shopCart', state.shopCart)
  },
  // 7.获得购物车的信息
  'GET_CART': (state) => {
    let shopCart = getLocalStore('shopCart')
    console.log(shopCart)
    if (shopCart) {
      state.shopCart = JSON.parse(shopCart)
    }
  },
  // 8.减少购物车的商品
  'REDUCE_GOODS': (state, id) => {
    let shopCart = state.shopCart
    let goods = shopCart[id]
    console.log(goods)
    if (goods) {
      goods['nums']--
      if (goods['nums'] === 0) {
        delete shopCart[id]
      }
    }
    state.shopCart = { ...shopCart }
    setLocalStore('shopCart', state.shopCart)
  },
  // 9.单选/取消商品
  'SELECT_SINGLE_GOODS': (state, id) => {
    let shopCart = state.shopCart
    let goods = shopCart[id]
    if (goods) {
      goods.checked = !goods.checked
    }
    state.shopCart = { ...shopCart }
    setLocalStore('shopCart', shopCart)
  },
  // 10.全选/全取消商品
  'SELECT_ALL_GOODS': (state, allChecked) => {
    let shopCart = state.shopCart
    Object.values(shopCart).forEach((goods, index) => {
      goods.checked = allChecked
    })
    state.shopCart = { ...shopCart }
    setLocalStore('shopCart', state.shopCart)
  },
  // 11.删除购物车的商品
  'DELETE_SELETE_GOODS': (state) => {
    let shopCart = state.shopCart
    Object.values(shopCart).forEach((goods, index) => {
      if (goods.checked) {
        delete shopCart[goods.id]
      }
    })
    state.shopCart = { ...shopCart }
    setLocalStore('shopCart', state.shopCart)
  }
}
