<template>
  <div class="navbar" :style="{padding: value}">
    <slot name="left">左</slot>
    <slot name="center">中</slot>
    <slot name="right">右</slot>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() { 
    return {

    }
  }
 }
</script>

<style lang="stylus" scoped>
.navbar
  height 44px
  display flex
  align-items center
  background #fff
  position relative
  z-index 9
</style>