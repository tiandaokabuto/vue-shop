<template>
  <div id="app" ref="app">
    <keep-alive >
      <router-view v-if="this.$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!this.$route.meta.keepAlive"></router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {

}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 20
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>
<style lang="scss">
@import "./assets/styles/global";
#app {
  width: 100%;
  height: 100%;
}
</style>
