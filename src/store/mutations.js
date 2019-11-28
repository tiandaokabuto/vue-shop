import { setLocalStore } from '../utils/global'
export default {
  'SET_USER_INFO': (state, userInfo) => {
    state.userInfo = JSON.parse(userInfo)
    // setLocalStore('userInfo', state.userInfo)
  },
  'SET_USER_NAME': (state, name) => {
    state.userInfo.user_name = name
    setLocalStore('userInfo', state.userInfo)
  },
  'SET_USER_SEX': (state, sex) => {
    state.userInfo.sex = sex
    setLocalStore('userInfo', state.userInfo)
  },
  'SET_BIRTHDAY': (state, birthday) => {
    state.userInfo.birthday = birthday
    setLocalStore('userInfo', state.userInfo)
  }
}
