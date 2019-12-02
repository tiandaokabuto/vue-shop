<template>
  <div class="category-page-wrapper">
      <Header></Header>
      <div v-if="showing" class="category-list-wrapper">
        <div class="category-left-wrapper">
          <ul class="left-content">
            <li class="left-item"
            v-for="(item, index) in categoryData" :key="item.id"
            :class="{selected: currentIndex === index}"
            ref="menuList" @click="selectLeftItem(index)">
              <span class="left-item-text">{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="category-right-wrapper">
          <horiz-scroll :cate="categoryDetailData"></horiz-scroll>
        </div>
      </div>
  </div>
</template>

<script>
import HorizScroll from '../components/common/HorizontalScroll'
import Header from './category/CategoryHeader'
import BetterScroll from 'better-scroll'
import { getCategoryData, getCategoryDetailData } from '../serve/api/index'
export default {
  data () {
    return {
      showing: false,
      categoryData: [],
      categoryDetailData: [],
      currentIndex: 0
    }
  },
  components: {
    Header,
    HorizScroll
  },
  mounted () {
    getCategoryData().then(res => {
      if (res.success) {
        this.categoryData = res.data.cate
      }
      return getCategoryDetailData('/lk005')
    }).then(res => {
      console.log(res)
      if (res.success) {
        this.categoryDetailData = res.data.cate
      }
      this.showing = true
      this.$nextTick(() => {
        if (!this.leftScroll) {
          this.leftScroll = new BetterScroll('.category-left-wrapper', {
            probeType: 3,
            click: true,
            scrollY: true,
            tap: true,
            mouseWheel: true
          })
        } else {
          this.leftScroll.refresh()
        }
      })
    })
  },
  methods: {
    selectLeftItem (index) {
      this.currentIndex = index
      let param
      if (index >= 9) {
        param = `/lk0${index + 1}`
      } else {
        param = `/lk00${index + 1}`
      }
      getCategoryDetailData(param).then(res => {
        if (res.success) {
          this.categoryDetailData = res.data.cate
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.category-page-wrapper {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  .category-list-wrapper {
    display: flex;
    position: absolute;
    top: 2.75rem;
    bottom: 3rem;
    width: 100%;
    overflow: hidden;
    .category-left-wrapper {
      background-color: #f4f4f4;
      width: 5.3125rem;
      flex: 0 0 5.3125rem;
      .left-content {
        .left-item {
          padding: 0.75rem 0;
          border-bottom: solid 0.01rem #e8e9e8;
          position: relative;
          .left-item-text {
            line-height: 1.25rem;
            border-left: solid 0.1875rem transparent;
            padding: 0.3125rem 0.6875rem;
            font-size: 0.8125rem;
            color: #666666;
          }
        }
        .selected {
          background: #fff;
          .left-item-text {
            border-left-color: #3cb963;
            font-weight: bold;
            font-size: 0.875rem;
            color: #333333;
          }
        }
      }
    }
    .category-right-wrapper {

    }
  }
}
</style>
