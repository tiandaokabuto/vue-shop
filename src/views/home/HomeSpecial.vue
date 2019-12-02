<template>
  <div class="home-special-wrapper">
    <div class="special-title-wrapper">
      <div class="title">特色专区</div>
    </div>
    <div class="special-content-wrapper">
      <div class="special-content-box"
      v-for="item in specialItem.newItemList" :key="item.id">
        <span class="item-title">{{item.title}}</span>
        <span class="item-subtitle">{{item.subtitle}}</span>
        <div class="item-img">
          <img :src="item.imageOne">
          <img :src="item.imageTwo">
        </div>
      </div>
      <div class="special-content-box"
      v-for="item in specialItem.hotItemList" :key="item.id">
        <span class="item-title">{{item.title}}</span>
        <span class="item-subtitle">{{item.subtitle}}</span>
        <div class="item-img">
          <img :src="item.imageOne">
          <img :src="item.imageTwo">
        </div>
      </div>
      <div class="special-content-box"
      v-for="item in specialItem.vipItemList" :key="item.id">
        <span class="item-title">{{item.title}}</span>
        <span class="item-subtitle">{{item.subtitle}}</span>
        <div class="item-img">
          <img :src="item.imageOne">
          <img :src="item.imageTwo">
        </div>
      </div>
      <div class="special-content-box">
        <div class="left-box-wrapper"
        v-for="item in specialItem.lowPriceItemList" :key="item.id">
            <span class="item-title">{{item.title}}</span>
          <span class="item-subtitle">{{item.subtitle}}</span>
          <div class="item-img">
            <img :src="item.image">
          </div>
        </div>
        <div class="left-box-wrapper"
        v-for="item in specialItem.otherItemList" :key="item.id">
            <span class="item-title">{{item.title}}</span>
          <span class="item-subtitle">{{item.subtitle}}</span>
          <div class="item-img">
            <img src="../../assets/images/special/peanut.jpeg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  props: {
    specialItem: Object
  }
}
</script>

<style lang="scss" scoped>
.home-special-wrapper {
  margin-top: .625rem;
  padding: 1.25rem 0 .9375rem 0;
  background-color: #fff;
  .special-title-wrapper {
    margin: 0 0.625rem 0.625rem 0.625rem;
    height: 1.5625rem;
    .title {
      border-left: 4px #3cb963 solid;
      padding-left: 0.3125rem;
      height: 1.3125rem;
      line-height: 1.3125rem;
      font-size: 1.1875rem;
      vertical-align: middle;
    }
  }
  .special-content-wrapper {
    height: 10rem;
    // border: 0.01rem solid #dddbc0;
    border-top: 1px solid  #dddbc0;
    border-left: 1px solid  #dddbc0;
    margin-left: 2%;
    margin-right: 2%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing: border-box;
    .special-content-box {
      border-right: 1px solid  #dddbc0;
      border-bottom: 1px solid #dddbc0;
      height: 5rem;
      width: 50%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .item-title {
        flex: 1;
        width: 100%;
        font-size: 0.625rem;
        color: red;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
      }
      .item-subtitle {
        font-size: 0.45rem;
        color: grey;
        padding-left: 0.5rem;
        padding-top: 0.3rem;
        flex: 1;
      }
      .item-img {
        flex: 1;
        img {
          padding: 0.3rem 0.5rem 0rem 0.7rem;
          width: 3rem;
          height: 2.5rem;
        }
      }
    }
    .special-content-box:nth-child(4) {
      display: flex;
      flex-direction: row;
      .left-box-wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #dddbc0;
      }
      .right-box-wrapper {
        flex: 1
      }
    }
  }
}
</style>
