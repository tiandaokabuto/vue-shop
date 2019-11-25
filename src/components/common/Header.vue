<template>
  <div class="header">
    <van-nav-bar
  :title="title"
  left-text="返回"
  right-text="注册"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['title'],
  computed: {
    headerTitle () {
      return this.title
    }
  },
  components: {

  },
  methods: {
    onClickLeft () {
      this.$toast('返回')
    },
    onClickRight () {
      this.$toast('按钮')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
