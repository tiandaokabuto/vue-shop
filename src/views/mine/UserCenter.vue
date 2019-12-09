<template>
  <div class="usercenter-page-wrapper">
    <van-nav-bar title="个人资料"
    :fixed=true
    left-arrow
    @click-left="back"
    style="height: 2.5rem"
    />
    <div class="icon">
      <span class="title">头像</span>
      <img src="../../assets/images/mine/defaultImg.jpeg" alt="">
    </div>
    <van-cell-group>
      <van-cell title="昵称"
                is-link
                :value="userInfo.user_name"
                @click="goToChangeNickName" />
      <van-cell title="性别"
                is-link
                :value="userSex"
                @click="onChangeSex" />
      <van-cell title="生日"
                is-link
                @click="onChangeBirthday"
                :value="userInfo.birthday ? userInfo.birthday : '未填写'" />
      <van-cell title="手机号"
                :value="userInfo.phone" />
    </van-cell-group>
    <van-button size="large" style="margin-top: 1rem" @click="loginOut">退出登录</van-button>
    <!-- 性别选择弹出层 -->
    <van-popup v-model="showChangeSex"
    round
    position="bottom"
    :style="{ height: '20%' }"
    >
      <van-radio-group v-model="userInfo.sex">
        <van-cell-group style="margin-top: 2rem" @click="chooseSex(radio)">
          <van-cell title="帅哥" clickable @click="radio = '1'">
            <van-radio slot="right-icon" name="1" checked-color="#07c160"/>
          </van-cell>
          <van-cell title="美女" clickable @click="radio = '2'">
            <van-radio slot="right-icon" name="2" checked-color="#07c160"/>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-popup>
    <!-- 生日选择弹出层 -->
    <van-popup v-model="showSelectBirthday"
    position="bottom"
    round
    >
      <van-datetime-picker
      v-model="currentDate"
      type="date"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
      @cancel="cancel"
      :formatter="formatter"
      />
    </van-popup>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Toast, DatetimePicker, Popup, Button, Dialog } from 'vant'
import { Formate } from '../../utils/global'
export default {
  data () {
    return {
      showChangeSex: false,
      showSelectBirthday: false,
      currentDate: new Date('2000/01/01'),
      minDate: new Date('1949/01/01'),
      maxDate: new Date()
    }
  },
  computed: {
    ...mapState(['userInfo']),
    userSex () {
      if (this.userInfo.sex === '1') {
        return '帅哥'
      } else {
        return '美女'
      }
    }
  },
  methods: {
    ...mapActions(['changeSex', 'setBirthday', 'logOut']),
    // 1.返回
    back () {
      this.$router.back()
    },
    // 2.跳转到修改昵称页面
    goToChangeNickName () {
      this.$router.push({ name: 'nickname', query: { nickName: this.userInfo.user_name } })
    },
    // 3.打开修改性别弹窗
    onChangeSex () {
      this.showChangeSex = true
    },
    // 4.修改性别
    chooseSex (radio) {
      this.changeSex(radio)
      setTimeout(() => {
        this.showChangeSex = false
        Toast({
          message: '个人资料修改成功',
          duration: 800
        })
      }, 300)
    },
    // 5.打开修改生日弹窗
    onChangeBirthday () {
      this.showSelectBirthday = true
    },
    // 6.退出登录
    loginOut () {
      Dialog.confirm({
        message: '是否退出登录？'
      }).then(() => {
        this.logOut()
        Toast({
          message: '退出成功',
          duration: 800
        })
        this.back()
      })
    },
    // 7.格式化显示的日期
    formatter (type, value) {
      if (type === 'year') {
        return `${value}年`
      } else if (type === 'month') {
        return `${value}月`
      } else if (type === 'day') {
        return `${value}日`
      }
      return value
    },
    // 8.确认日期
    confirm (value) {
      let date = new Date(value)
      // let formatDate = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
      let formatDate = Formate(date, 'yyyy年MM月dd日')
      console.log(formatDate)
      this.setBirthday(formatDate)
      this.showSelectBirthday = false
    },
    // 9.关闭生日弹窗
    cancel () {
      this.showSelectBirthday = false
    }
  },
  components: {
    [Toast.name]: Toast,
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup,
    [Button.name]: Button,
    [Dialog.name]: Dialog
  }
}
</script>

<style lang="scss" scoped>
.usercenter-page-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
  .icon {
    display: flex;
    height: 3rem;
    width: 100%;
    margin-top: 3rem;
    padding: 0 16px;
    background-color: #ffffff;
    align-items: center;
    .title {
      height: 3rem;
      line-height: 3rem;
      color: #323233;
      font-size: 14px;
    }
    img {
      position: absolute;
      right: 1.6rem;
      height: 2.5rem;
      width: 2.5rem;
    }
  }
}
</style>
