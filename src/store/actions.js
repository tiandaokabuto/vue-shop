import { getLocalStore } from '../utils/global'
export default {
  setUserinfo ({ commit }, userInfo) {
    commit('SET_USER_INFO', userInfo)
  },
  autoLogin ({ commit }) {
    let userInfo = getLocalStore('userInfo')
    console.log(userInfo)
    if (userInfo) {
      commit('SET_USER_INFO', userInfo)
    }
  },
  changeNickName ({ commit }, nickName) {
    commit('SET_USER_NAME', nickName)
  },
  changeSex ({ commit }, sex) {
    commit('SET_USER_SEX', sex)
  },
  setBirthday ({ commit }, birthday) {
    commit('SET_BIRTHDAY', birthday)
  }
}
