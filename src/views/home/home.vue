<template>
  <div class="home">
    <div class="headerWrap">
      <nav-bar value="8px 15px">
        <div slot="left" class="left">
          <div class="logo"></div>
        </div>
        <div slot="center" class="center">
          <div class="search" @click="toSearch">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共34154款好物</span>
          </div>
        </div>
        <div slot="right" class="right" @click="toLogin">
          <div class="login">登录</div>
        </div>
      </nav-bar>
      <div class="tabWrap">
        <div v-show="!expansion" class="tab-scroll" ref="scroll">
          <div class="container" ref="container" :style="{width: containerWidth + 'px'}">
            <div
              :class="{active: curIndex == index}"
              class="tab"
              v-for="(item,index) in homeTab"
              :key="index"
              @click="tabClick(index,item.id)"
            >
              <span class="txt">{{item.name}}</span>
            </div>
          </div>
        </div>
        <div v-show="expansion" class="tabAlter">全部频道</div>
        <div class="toggleWrap">
          <div class="linear"></div>
          <div class="toggle" @click="rotateClick">
            <div class="icon" :class="{rotate: expansion}"></div>
          </div>
        </div>
        <div class="moreCate" v-show="expansion">
          <div
            class="cateTag"
            :class="{cateTagActive: curIndex == index}"
            v-for="(item,index) in homeTab"
            :key="index"
            @click="tabClick(index,item.id)"
          >{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="mask" v-show="expansion"></div>
    <keep-alive exclude="item">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { getHomeTab } from "../../ajax/index";
import BScroll from "better-scroll";

export default {
  name: "home",
  data() {
    return {
      homeTab: [],
      curIndex: 0,
      containerWidth: 0,
      expansion: false,
      widthArr: []
    };
  },
  created() {
    this.getHomeTabData();
  },
  methods: {
    // ------------- 请求数据 ---------------------
    async getHomeTabData() {
      const result = await getHomeTab();
      // console.log(result);
      let data = result.data
      data.unshift({name: "推荐",id: -1})
      this.homeTab = data;
    },

    // ------------- 自定义方法 ---------------------
    initBScroll() {
      this.BScroll = new BScroll(this.$refs.scroll, {
        scrollX: true,
        click: true,
      });
    },
    getContainerWidth(callback) {
      let tabs = Array.from(this.$refs.container.children);
      let containerWidth = tabs.reduce((per, value) => {
        return (per = per + value.offsetWidth + 10);
      }, 70);
      this.containerWidth = containerWidth;
      callback();
    },
    getWidthArr() {
      let tabs = Array.from(this.$refs.container.children);
      let arr = [0]
      tabs.reduce((per, value) => {
        // return (per = per + value.offsetWidth);
        per += value.offsetWidth +10
        arr.push(per)
        return 1
      }, 0);
      this.widthArr = arr
    },
    // ------------- 事件方法 ---------------------
    tabClick(index,id) {
      this.curIndex = index;
      if (index === 0) {
        this.$router.push("/home");
      } else {
        this.$router.push("/home/item?id="+id);
      }
      this.BScroll.scrollToElement(this.$refs.container.children[index],200,-10,0)
    },
    rotateClick() {
      this.expansion = !this.expansion;
    },
    toLogin() {
      this.$router.push('/login')
    },
    toSearch() {
      this.$router.push('/search')
    }
  },
  mounted() {},
  components: {
    navBar: () => import("../../components/common/navbar/navbar"),
  },
  watch: {
    homeTab() {
      this.$nextTick(() => {
        this.getContainerWidth(this.initBScroll);
        this.getWidthArr()
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.headerWrap
  position fixed
  height 74px
  left 0
  top 0
  right 0
  z-index 10
.home
  padding-top 74px
  padding-bottom 50px
  height 100%
  .mask
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    background rgba(0, 0, 0, 0.5)
    z-index 8
  .left
    .logo
      width 69px
      height 20px
      background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp') no-repeat
      background-size cover
      margin-right 10px
  .right
    .login
      width 35px
      height 20px
      margin-left 8px
      text-align center
      line-height 20px
      color #DD1A21
      border 1px solid #DD1A21
      border-radius 4px
      box-sizing border-box
  .center
    flex 1
    height 100%
    background #ededed
    border-radius 4px
    overflow hidden
    .search
      display flex
      padding 0 20px
      justify-content center
      align-items center
      height 100%
      .icon
        flex-shrink 0
        width 14px
        height 14px
        margin-right 5px
        background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp') no-repeat
        background-size cover
      .placeholder
        color #999
        font-size 14px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
  .tabWrap
    height 30px
    position relative
    background #fff
    z-index 9
    margin-top -1px
    .moreCate
      padding-top 12px
      margin-top -1px
      display flex
      flex-wrap wrap
      background #fff
      position relative
      z-index 9
      .cateTag
        width 75px
        height 26px
        line-height 26px
        text-align center
        font-size 13px
        border 1px solid #CCC
        border-radius 2px
        background #FAFAFA
        margin 0 0 20px 15px
        box-sizing content-box
        &.cateTagActive
          border 1px solid #DD1A21
          color #DD1A21
    .tabAlter
      padding-left 15px
      height 30px
      line-height 30px
      color #333
      font-size 14px
    .tab-scroll
      padding-right 50px
      overflow hidden
      .container
        display flex
        padding-left 15px
        .tab
          margin-left 10px
          white-space nowrap
          &:first-child
            margin-left 0
          .txt
            display inline-block
            position relative
            height 30px
            line-height 30px
            padding 0 8px
            color #333
            font-size 14px
          &.active
            .txt
              color #dd1a21
              &:after
                position absolute
                content ''
                left 0
                right 0
                bottom 0
                height 2px
                background #dd1a21
    .toggleWrap
      position absolute
      right 0
      top 0
      height 100%
      display flex
      .linear
        width 30px
        height 100%
        background-image linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%)
      .toggle
        width 50px
        height 100%
        display flex
        justify-content center
        align-items center
        background #fff
        .icon
          width 15px
          height 15px
          background #fff url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp') no-repeat
          background-size cover
          transition all 0.2s linear
          &.rotate
            transform rotate(180deg)
</style>