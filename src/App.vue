<template>
  <div id="app">
    <router-view/>
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

</style>
