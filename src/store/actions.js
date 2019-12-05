import { getLocalStore } from '../utils/global'
export default {
  // 保存用户信息
  setUserinfo ({ commit }, userInfo) {
    commit('SET_USER_INFO', userInfo)
  },
  // 获取用户信息自动登录
  autoLogin ({ commit }) {
    let userInfo = getLocalStore('userInfo')
    console.log(userInfo)
    if (userInfo) {
      commit('SET_USER_INFO', userInfo)
    }
  },
  // 修改用户昵称
  changeNickName ({ commit }, nickName) {
    commit('SET_USER_NAME', nickName)
  },
  // 修改用户性别
  changeSex ({ commit }, sex) {
    commit('SET_USER_SEX', sex)
  },
  // 修改用户生日
  setBirthday ({ commit }, birthday) {
    commit('SET_BIRTHDAY', birthday)
  },
  // 获取分类横向滚动标题的索引
  setSubtitleIndex ({ commit }, index) {
    commit('SET_SUBTITLE_INDEX', index)
  },
  // 获取购物车信息
  getCart ({ commit }) {
    commit('GET_CART')
  },
  // 添加购物车
  addToCart ({ commit }, item) {
    commit('ADD_TO_CART', item)
  },
  // 减少购物车的商品
  reduceGoods ({ commit }, id) {
    commit('REDUCE_GOODS', id)
  },
  // 单选商品
  selectSingleGoods ({ commit }, id) {
    commit('SELECT_SINGLE_GOODS', id)
  },
  // 全选商品
  seleceAllGoods ({ commit }, allChecked) {
    commit('SELECT_ALL_GOODS', allChecked)
  },
  deleteSelectedGoods ({ commit }) {
    commit('DELETE_SELETE_GOODS')
  }
}
