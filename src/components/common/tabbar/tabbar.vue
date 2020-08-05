<template>
  <div class="tabbar">
    <router-link class="tabbar-item" to="/home">
      <div class="icon home"></div>
      <div class="text">首页</div>
    </router-link>
    <router-link class="tabbar-item" to="/category">
      <div class="icon category"></div>
      <div class="text">分类</div>
    </router-link>
    <router-link class="tabbar-item" to="/deserve">
      <div class="icon deserve"></div>
      <div class="text">值得买</div>
    </router-link>
    <router-link class="tabbar-item" to="/cart">
      <div class="icon cart"></div>
      <div class="text">购物车</div>
      <div v-show="isShow" class="num">{{count}}</div>
    </router-link>
    <router-link class="tabbar-item" to="/profiles">
      <div class="icon profiles"></div>
      <div class="text">个人</div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "tabbar",
  props: {
    isShow: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.tabbar
  position fixed
  bottom 0
  left 0
  right 0
  height 50px
  display flex
  align-items center
  background #fff
  z-index 9
  .tabbar-item
    flex 1
    height 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    position relative
    .num
      min-width 14px
      height 14px
      text-align center
      line-height 14px
      font-size 12px
      border-radius 50%
      color #ffffff
      background #DD1A21
      position absolute
      top 0px
      right 20px
    &.router-link-active
      .text
        color #DD1A21;
      .icon
        &.home
          background-position-y -100px
        &.category
          background-position-y -50px
        &.deserve
          background-position-y -150px
        &.profiles
          background-position-y -200px
        &.cart
          background-position-y 0px
    .text
      color #999
      font-size 13px
    .icon
      width 20px
      height 20px
      margin-bottom 6px
      background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp') no-repeat
      background-size cover
      &.home
        background-position-y -125px
      &.category
        background-position-y -75px
      &.deserve
        background-position-y -175px
      &.cart
        background-position-y -25px
      &.profiles
        background-position-y -225px
</style>