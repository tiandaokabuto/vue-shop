<template>
  <div class="home-nav-wrapper">
    <van-grid :column-num="5"
              :border="false">
      <van-grid-item v-for="(nav,index) in nav_list"
      :key="nav.cid"
      :icon="nav.icon_url"
      :text="nav.name"
      @click="gotoCategory(index)" />
    </van-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    nav_list: Array
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
</style>
