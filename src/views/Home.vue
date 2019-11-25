<template>
  <div class="page"></div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      bookworm: null,
      testNum: 1
    }
  },
  components: {
  },
  methods: {

  },
  mounted () {
    //1 script start   script start
    //2 async1 start   async1 start
    //3 async2         asyncs2
    //4 async1 end     promise1
    //5 promise1       script end
    //6 script end     promise2
    //7 setTimeout     async1 end
    //8 promise2       setTimeout
    // async function async1 () {
    //   console.log('async1 start')
    //   await async2()
    //   console.log('async1 end')
    // }
    // async function async2 () {
    //   console.log('async2')
    // }
    // // 开始执行
    // console.log('script start')
    // setTimeout(function () {
    //   console.log('setTimeout')
    // }, 0)
    // async1()
    // new Promise(function (resolve) {
    //   console.log('promise1')
    //   resolve()
    // }).then(function () {
    //   console.log('promise2')
    // })
    // console.log('script end')
  }
}
</script>

<style lang="scss" scoped>
</style>
