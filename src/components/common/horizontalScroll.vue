<template>
  <div id="horizontalScroll" ref="scrollRef">
    <!-- 水平滑动组件 -->
    <div class="scroll-menu-wrapper" :class="{noBorder: borderFlag}" ref="scrollMenu">
      <ul ref="scrollMenuList">
        <li class="scroll-menu-item"
            :class="{ selected: currentItem === index}"
            v-for="(item, index) in cate"
            :key="item.id"
            ref="menuItem"
            @click="menuItemClick(index)">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      currentItem: 0,
      ulWidth: 0
    }
  },
  props: {
    cate: Array,
    borderFlag: Boolean
  },
  watch: {
    cate () {
      this.$nextTick(() => {
        this.initScroll()
      })
    }
  },
  methods: {
    ...mapActions(['setSubtitleIndex']),
    menuItemClick (index) {
      this.currentItem = index
      this.setSubtitleIndex(index)
      let el = this.$refs.menuItem[index]
      this.horizontalScroll.scrollToElement(el, 500)
      this.$emit('menuItemClick', index)
    },
    initScroll () {
      let scrollMenuWidth = 0
      let el = this.$refs.menuItem
      // 计算Item的宽度总和
      for (let i = 0; i < el.length; i++) {
        scrollMenuWidth += el[i].clientWidth
      }
      // 给Item的包裹层设置宽度
      this.$refs.scrollMenuList.style.width = scrollMenuWidth + 'px'
      this.ulWidth = scrollMenuWidth
      // if (!this.horizontalScroll) {

      // } else {
      //   this.horizontalScroll.refresh()
      // }
      this.horizontalScroll = new BetterScroll('.scroll-menu-wrapper', {
        startX: 0,
        click: true,
        scrollX: true,
        probeType: 3
      })
      this.currentItem = 0
    },
    refresh () {
      let el = this.$refs.menuItem[0]
      this.horizontalScroll.scrollToElement(el, 500)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
#horizontalScroll {
  .scroll-menu-wrapper {
    width: 100%;
    height: 2.8rem;
    background: white;
    white-space: nowrap;
    display: inline-block;
    border-bottom: solid 0.01rem #e8e9e8;
    overflow: hidden;
    .scroll-menu-item {
      display: inline-block;
      font-size: 0.73rem;
      padding: 1rem;
    }
    .selected {
      color: #3cb963;
    }
  }
  .noBorder {
    border: none;
  }
}
</style>
