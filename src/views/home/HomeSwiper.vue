<template>
  <div class="home-swiper-wrapper">
    <div class="swiper-wrapper" ref="swiperWrapper">
      <ul class="swiper-list" ref="swiperList">
        <li class="swiper-item" v-for="item in img_list"
        :key="item.public_id" ref="swiperItem">
          <img :src="item.icon_url" :alt="item.public_name">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      currentPage: 0
    }
  },
  props: {
    img_list: Array
  },
  components: {

  },
  methods: {
    init () {
      let swiperWidth = 0
      let el = this.$refs.swiperItem
      let wrapperWidth = this.$refs.swiperWrapper.clientWidth
      console.log(wrapperWidth)
      for (let i = 0; i < el.length; i++) {
        el[i].style.width = wrapperWidth + 'px'
        swiperWidth += wrapperWidth
      }
      this.$refs.swiperList.style.width = swiperWidth + 'px'
      console.log(swiperWidth)
      if (!this.swiperScroll) {
        this.swiperScroll = new BetterScroll('.swiper-wrapper', {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true
        })
      } else {
        this.swiperScroll.refresh()
      }
    }
  },
  mounted () {
    console.log('swiper mounted')
    this.$nextTick(() => {
      this.init()
      this.swiperScroll.on('scrollEnd', () => {
        // 获取当前页数
        let pageIndex = this.swiperScroll.getCurrentPage().pageX
        this.currentPage = pageIndex
        console.log(pageIndex)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.home-swiper-wrapper {
  width: 94%;
  padding-top: 3rem;
  margin: 0 auto;
  .swiper-wrapper {
    border-radius: 1rem;
    white-space: nowrap;
    overflow: hidden;
    .swiper-list {
      .swiper-item {
        display: inline-block;
        img {
          width: 100%;
          height: 10rem;
        }
      }
    }
  }
}
</style>
