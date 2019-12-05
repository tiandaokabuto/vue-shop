<template>
  <div class="eat-page-wrapper">
    <div v-if="showing">
      <div class="eat-page-head-wrapper" style="z-index: 999"  v-if="showing">
        <Header :text="'搜索菜谱、食材'"></Header>
        <div class="today-eat-title-wrapper">
          <div class="title">今日菜单</div>
        </div>
        <Scroll :cate="todayMenuCategoryList" style="width: 80%"
        :borderFlag="true"></Scroll>
        <div class="menu-all-btn" @click="showAll">
          {{msg}}
          <span class="down-menu"
                v-if="menuDown">
            <svg t="1569722977319"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="759"
            width="16"
            height="16">
              <path d="M511.31 989.39999995a61.19 61.19 0 0 1-43.25-17.79l-237.12-237.2a35 35 0 0 1 49.55-49.55l230.89 230.9 230.9-230.89a35 35 0 1 1 49.55 49.55L554.7 971.53999995a61.41 61.41 0 0 1-43.39 17.86z"
                    fill="#8a8a8a"
                    p-id="760"></path>
            </svg>
          </span>
          <span class="up-menu"
                v-else>
            <svg t="1569723063527"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="759"
            width="16"
            height="16">
              <path d="M512.69 653.26666662a61.19 61.19 0 0 1 43.25 17.79l237.12 237.2a35 35 0 0 1-49.55 49.55l-230.89-230.9-230.9 230.89a35 35 0 1 1-49.55-49.55000001L469.3 671.12666662a61.41 61.41 0 0 1 43.39-17.86z"
                    fill="#8a8a8a"
                    p-id="760"></path>
            </svg>
          </span>
          </div>
      </div>
      <eat-list></eat-list>
    </div>
    <Loading :show="!showing"></Loading>
  </div>
</template>

<script>
import Loading from './../components/common/Loading'
import EatList from './eat/TodayEatList'
import Header from '../components/common/SearchHeader'
import Scroll from '../components/common/HorizontalScroll'
import { getTodayMenuCategoryList } from '../serve/api/index'
export default {
  data () {
    return {
      todayMenuCategoryList: [],
      showing: false,
      menuDown: true,
      msg: '全部'
    }
  },
  components: {
    Header,
    Scroll,
    EatList,
    Loading
  },
  watch: {
    menuDown () {
      this.msg = (this.menuDown === true ? '全部' : '收起')
    }
  },
  mounted () {
    getTodayMenuCategoryList().then((res) => {
      if (res.success) {
        this.todayMenuCategoryList = res.data.list
        this.showing = true
      }
    })
  },
  methods: {
    showAll () {
      this.menuDown = !this.menuDown
    }
  }
}
</script>

<style lang="scss" scoped>
.eat-page-wrapper {
  .eat-page-head-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: solid 0.01rem #e8e9e8;
    background: white;
    .header-search-wrapper {
      border: none;
    }
    .today-eat-title-wrapper {
      margin-top: 3.2rem;
      margin-left: 0.8rem;
      // margin: 0 0.625rem 0.625rem 0.625rem;
      height: 1.6rem;
      .title {
        border-left: 4px #3cb963 solid;
        padding-left: 0.3125rem;
        height: 1.3125rem;
        line-height: 1.3125rem;
        font-size: 1.1875rem;
        vertical-align: middle;
      }
    }
    .scroll-menu-wrapper {
      border: none;
    }
    .menu-all-btn {
      position: absolute;
      font-size: 0.7rem;
      color: gray;
      z-index: 50;
      right: 0;
      top: 4.5rem;
      padding: 1rem;
      background: white;
      .down-menu {
        width: 1rem;
        height: 1rem;
      }
    }
  }

}
</style>
