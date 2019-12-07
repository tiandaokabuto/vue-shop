<template>
  <div id="addAddress">
    <van-nav-bar title="添加地址"
    left-arrow
    :fixed=true
    :border=true
    @click-left="back"></van-nav-bar>
    <van-address-edit :area-list="areaList"
                      show-postal
                      show-set-default
                      show-search-result
                      :search-result="searchResult"
                      save-button-text="保存"
                      @save="onSave"
                      style="margin-top:3rem" />
  </div>
</template>

<script>
import { AddressEdit, Toast } from 'vant'
import { mapActions } from 'vuex'
import area from '@/utils/area'
export default {
  data () {
    return {
      areaList: area,
      searchResult: []
    }
  },
  components: {
    [AddressEdit.name]: AddressEdit,
    [Toast.name]: Toast
  },
  methods: {
    ...mapActions(['addUserAddress']),
    onSave (content) {
      let addressID = this.addressID().toString()
      content['id'] = addressID
      content['address'] = content.province + content.city + content.county + content.addressDetail
      this.addUserAddress(content)
      Toast({
        message: '添加成功',
        duration: 800
      })
      this.back()
    },
    back () {
      this.$router.back()
    },
    // 生成一个唯一的ID
    addressID () {
      var lastUuid = 0
      return (new Date()).getTime() * 1000 + (lastUuid++) % 1000
    }
  }
}
</script>

<style lang="scss" scoped>
#addAddress {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 99999;
  .van-address-edit {
    .van-button {
      background-color: #45c763;
    }
  }
}
</style>
