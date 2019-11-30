<template>
  <div class="home-page-wrapper" ref="wrapper">
    <!-- <loading :show="false"></loading> -->
    <div class="home-content">home</div>
    <div class="fix-btn" @click="top">回到顶部</div>
  </div>
</template>

<script>
// import axios from 'axios'
// import Loading from '../components/common/Loading'
export default {
  data () {
    return {

    }
  },
  components: {
    // Loading
  },
  methods: {
    top () {
      this.$refs.wrapper.scrollTop = 0
    }
  },
  mounted () {
    // this.$refs.wrapper.addEventListener('scroll', () => {
    //   console.log(this.$refs.wrapper.scrollTop)
    // })
    window.onscroll = (e) => {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page-wrapper {
  overflow-y: auto;
  // height: 50rem;
  padding-bottom: 3rem;
  .home-content {
    height: 100rem;
    background: black;
    color: white;
  }
  .fix-btn {
    position: fixed;
    right: 0;
    color: white;
    bottom: 5rem;
    border: 1px solid grey;
    padding: 0.5rem;
    background: grey;
  }
}
</style>
