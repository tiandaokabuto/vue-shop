<template>
  <div class="home-header">
    <div class="header-location-wrapper">
      <svg viewBox="0 0 30 30" class="icon header-location-icon">
        <path fill="#FFFFFF"
              fill-rule="evenodd"
              d="M14.521 30.445c.817.738 2.142.75 2.958 0 0 0 11.521-9.82 11.521-17.158C29 5.95 23.18 0 16 0S3 5.949 3 13.287c0 7.339 11.521 17.158 11.521 17.158zM16 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
      </svg>
      <span class="header-location-address">abcdefghijklmnopqrstuvwxyz</span>
    </div>
    <div class="header-search-wrapper">
      <div class="header-search-content">
        <div class="header-search-icon-wrapper">
          <svg viewBox="0 0 32 32" class="icon header-search-icon">
            <path fill="#999"
                  fill-rule="evenodd"
                  d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"></path>
          </svg>
        </div>
        <span class="header-search-desc">请输入商品名称</span>
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

  }
}
</script>

<style lang="scss" scoped>
.home-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  height: 3.2rem;
  line-height: 3.2rem;
  width: 100%;
  box-sizing: border-box;
  border-top: solid 1px #eeeeee;
  color: white;
  display: flex;
  .header-location-wrapper {
    margin-top: 0.6rem;
    height: 2rem;
    line-height: 2rem;
    max-width: 50%;
    white-space: nowrap;
    opacity: 0.6;
    min-width: 25%;
    background-color: black;
    border-radius: 3rem;
    flex: 0, 0, 20rem;
    .header-location-address {
      padding-left: 2rem;
      display: inline-block;
      font-size: 0.8rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 75%;
      min-width: 20%;
      vertical-align: middle;
    }
    .header-location-icon {
      position: absolute;
      left: 0.3rem;
      top: 1.1rem;
      width: 1.5rem;
      height: 1rem;
      vertical-align: middle;
    }
    .header-arrow-icon {
      vertical-align: middle;
      fill: #999;
      width: 1rem;
      height: 1rem;
    }
  }
  .header-search-wrapper {
    flex: 1;
    top: 0.625rem;
    height: 3.125rem;
    line-height: 3.125rem;
    .header-search-content {
      margin-top: 0.625rem;
      flex: 1;
      margin-right: 2%;
      margin-left: 2%;
      border-radius: 3.125rem;
      height: 1.875rem;
      line-height: 1.875rem;
      text-align: center;
      background: #f2f2f2;
      vertical-align: middle;
      .header-search-icon-wrapper {
        display: inline-block;
        width: 1.25rem;
        height: 100%;
        vertical-align: middle;
        .header-search-icon {
          margin-top: 0.3125rem;
          fill: #999;
          width: 1rem;
          height: 1rem;
        }
      }
      .header-search-desc {
        display: inline-block;
        vertical-align: top;
        margin-left: 0.25rem;
        text-align: center;
        font-size: 0.875rem;
        color: #999999;
      }
    }
  }
}

@media (min-width: 320px) {
  .header-search-wrapper {
    width: 55%;
  }
}

@media (min-width: 375px) {
  .header-search-wrapper {
    width: 57%;
  }
}

@media (min-width: 414px) {
  .header-search-wrapper {
    width: 62%;
  }
}
</style>
