<template>
  <div id="editAddress">
    <van-nav-bar title="编辑地址"
    left-arrow
    :fixed=true
    :border=true
    @click-left="back"></van-nav-bar>
    <van-address-edit :area-list="areaList"
                      show-postal
                      show-delete
                      show-set-default
                      show-search-result
                      :addressInfo="addressInfo"
                      :search-result="searchResult"
                      @save="onSave"
                      @delete="onDelete"
                      style="margin-top:3rem" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { AddressEdit, Toast } from 'vant'
import area from '@/utils/area'
export default {
  data () {
    return {
      areaList: area,
      addressInfo: {},
      searchResult: []
    }
  },
  components: {
    [AddressEdit.name]: AddressEdit,
    [Toast.name]: Toast
  },
  mounted () {
    this.addressInfo = this.$route.params.address
  },
  methods: {
    ...mapActions(['editUserAddress', 'deleteUserAddress']),
    back () {
      this.$router.back()
    },
    onSave (content) {
      content['address'] = content.province + content.city + content.county + content.addressDetail
      this.editUserAddress(content)
      Toast({
        message: '保存成功',
        duration: 800
      })
      this.back()
    },
    onDelete (content) {
      this.deleteUserAddress(content.id)
      this.back()
    }
  }
}
</script>

<style lang="scss" scoped>
#editAddress {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 99999;
}
</style>
