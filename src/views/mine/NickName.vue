<template>
  <div class="nickname-page-wrapper">
    <van-nav-bar title="修改昵称"
    :fixed=true
    left-arrow
    :border=false
    @click-left="back"
    right-text="保存"
    @click-right="saveNickName"
    style="height: 2.5rem"
    />
    <div style="margin-top: 3rem">
      <van-cell-group title="请输入新昵称">
        <van-field v-model="nickName"
        clearable
        ref="field"
        :placeholder="nickName"></van-field>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Field, Toast } from 'vant'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      nickName: ''
    }
  },
  mounted () {
    this.nickName = this.$route.query.nickName
  },
  computed: {

  },
  components: {
    [Field.name]: Field,
    [Toast.name]: Toast
  },
  methods: {
    ...mapActions(['changeNickName']),
    back () {
      this.$router.back()
    },
    saveNickName () {
      console.log(this.nickName)
      if (this.nickName) {
        this.changeNickName(this.nickName)
        Toast({
          message: '个人资料修改成功!',
          duration: 800
        })
      } else {
        Toast({
          message: '昵称不能为空',
          duration: 800
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nickname-page-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
  .van-nav-bar__text {
    color: #45c763;
  }
}
</style>
