<template>
  <div class="profiles">
    <div class="header">
      <div class="left">
        <div class="avatar">
          <img src="https://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt />
        </div>
        <div class="info">
          <p class="name">{{userinfo.username}}</p>
          <p class="isVIP">普通用户</p>
        </div>
      </div>
      <div class="right">
        <div class="a">
          <div class="tubiao"></div>
          <div class="word">
            <p class="line1">Pro会员</p>
            <p class="line2">立即试用</p>
          </div>
        </div>
      </div>
    </div>
    <div class="myAsset">
      <h2 class="tt">我的资产</h2>
      <div class="assetList">
        <div class="assetItem">
          <p class="assetCount">¥0</p>
          <p class="assetName">回馈金</p>
        </div>
        <div class="assetItem">
          <p class="assetCount">2</p>
          <p class="assetName">红包</p>
        </div>
        <div class="assetItem">
          <p class="assetCount">1</p>
          <p class="assetName">优惠券</p>
        </div>
        <div class="assetItem">
          <p class="assetCount">¥0</p>
          <p class="assetName">津贴</p>
        </div>
        <div class="assetItem">
          <p class="assetCount">0</p>
          <p class="assetName">礼品卡</p>
        </div>
      </div>
    </div>
    <div class="uMenu">
      <ul class="list">
        <li class="item" v-for="(item,index) in 12" :key="index">
          <div class="icon"></div>
          <div class="text">我的订单</div>
        </li>
      </ul>
    </div>
    <div class="exit">退出登录</div>
    <div class="shade" v-if="isShade">
      <div class="sure">
        <div class="sure-top">退出登录？</div>
        <div class="sure-bottom">
          <div class="b-left">取消</div>
          <div class="b-right">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "profiles",

  data() {
    return {
      userinfo: {},
      isShade: false,
    };
  },

  created() {},

  methods: {},

  components: {},
};
</script>



<style lang="stylus" scoped>
@keyframes myfirst
  0%
    right -25px
  20%
    right -4px
  40%
    right -20px
  60%
    right -2px
  80%
    right -15px
  100%
    right 0
.profiles
  padding-bottom 49px
  position relative
  background #eeeeee
  overflow hidden
  .shade
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    background rgba(0, 0, 0, 0.3)
    z-index 5
    display flex
    justify-content center
    align-items center
    .sure
      width 315px
      height 152
      background #fff
      border-radius 10px
      font-size 16px
      .sure-top
        margin 40px 0
        text-align center
      .sure-bottom
        display flex
        border-top 1px solid #eee
        height 52px
        line-height 52px
        .b-left
          border-right 1px solid #eeeeee
          flex 1
          text-align center
        .b-right
          text-align center
          flex 1
          color red
  .header
    padding-left 15px
    background url('https://yanxuan.nosdn.127.net/5905098f74e04c39fa5e76ebb9ff591b.png?imageView&type=webp')
    background-size cover
    width 100%
    height 135px
    display flex
    justify-content space-between
    .left
      width 255px
      display flex
      align-items center
      padding 32px 0
      .avatar
        width 71px
        height 71px
        img
          vertical-align middle
          width 100%
          height 100%
          border-radius 50%
      .info
        display flex
        flex-direction column
        margin-left 15px
        color #ffffff
        .name
          width 169.5px
          margin-bottom 5px
          font-size 18px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
        .isVIP
          font-size 14px
    .right
      // width 193px

      // flex-shrink 0

      // padding-left 17px
      margin 16px 0
      .a
        margin-top 52px
        position relative
        width 101px
        height 42px
        border-radius 30px 0 0 30px
        background-image linear-gradient(180deg, #574E44 0, #0E0E0E 100%)
        display flex
        align-items center
        animation myfirst 3s
        .tubiao
          width 28px
          height 28px
          background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sce1e54f581-5d697fd33d.png?imageView&type=webp') no-repeat
          background-size cover
          background-position-y -32px
          margin 0 4.5px
        .word
          display flex
          flex-direction column
          .line1
            font-size 12px
            color #F9E0C0
          .line2
            font-size 10px
            color #F9E0C0
  .myAsset
    background #fff
    .tt
      margin-left 15px
      border-bottom 1px solid #D9D9D9
      height 52px
      line-height 52px
      font-size 16px
      font-weight 400
    .assetList
      display flex
      margin-bottom 9.5px
      font-size 14px
      .assetItem
        padding-top 16px
        flex 1
        height 80px
        .assetCount
          margin-bottom 2px
          text-align center
        .assetName
          text-align center
  .uMenu
    margin-bottom 20px
    background #ffffff
    .list
      display flex
      flex-wrap wrap
    .item
      padding-top 22.5px
      width 33.333%
      height 90px
      text-align center
      display flex
      flex-direction column
      justify-content center
      align-items center
      border-bottom 1px solid rgba(0, 0, 0, 0.15)
      border-right 1px solid rgba(0, 0, 0, 0.15)
      &:nth-of-type(3n)
        border-right none
      .icon
        width 25px
        height 25px
        background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sce1e54f581-5d697fd33d.png?imageView&type=webp') no-repeat
        background-size 42px 666.5px
        margin-bottom 8px
      &:nth-of-type(1)
        .icon
          background-position 0 -465.5px
      &:nth-of-type(2)
        .icon
          background-position 0 0
      &:nth-of-type(3)
        .icon
          background-position-y -519.5px
      &:nth-of-type(4)
        .icon
          background-position-y -225.5px
      &:nth-of-type(5)
        .icon
          background-position-y -435.5px
      &:nth-of-type(6)
        .icon
          background-position-y -581.5px
      &:nth-of-type(7)
        .icon
          background-position-y -551.5px
      &:nth-of-type(8)
        .icon
          background-position-y -495.5px
      &:nth-of-type(9)
        .icon
          background-position-y -195.5px
      &:nth-of-type(10)
        .icon
          background-position-y -641.5px
      &:nth-of-type(11)
        .icon
          background-position-y -345.5px
      &:nth-of-type(12)
        .icon
          background-position-y -285px
  .exit
    height 48px
    line-height 48px
    text-align center
    font-size 16px
    background #ffffff
    margin-bottom 20px
</style>


