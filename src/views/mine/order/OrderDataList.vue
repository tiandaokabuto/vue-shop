<template>
  <div class="data-list-wrapper">
    <div v-if="orderData.length > 0"></div>
    <div v-else class="data-list-none">
      <img src="@/assets/images/mine/noData.jpeg" >
      <span class="data-list-desc">暂时还没有相关订单</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    orderData: Array
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.data-list-wrapper {
  margin-top: 5rem;
  height: 20rem;
  .data-list-none {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
      height: 60%;
    }
    .data-list-desc {
      color: grey;
      font-size: 0.6rem;
    }
  }
}
</style>
