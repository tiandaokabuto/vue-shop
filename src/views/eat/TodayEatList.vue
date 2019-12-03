<template>
<div>
  <div class="today-eat-list-wrapper">
    <waterfall-eat-list></waterfall-eat-list>
  </div>
</div>
</template>

<script>
import WaterfallEatList from './WaterfallEatList'
export default {
  data () {
    return {

    }
  },
  components: {
    WaterfallEatList
  }
}
</script>

<style lang="scss" scoped>
.today-eat-list-wrapper {
  // margin-top: 6.5rem;
}
</style>
