<template>
  <div class="category">
    <div class="header">
      <div class="search" @click="toSearch">
        <div class="icon"></div>
        <div class="txt">搜索商品, 共29863款好物</div>
      </div>
    </div>

    <div class="container">
      <div class="containerNav">
        <div class="navListWrap" ref="navListWrap" :style="{height: navListHeight + 'px'}">
          <ul class="navList" ref="navUl">
            <li
              @click="navClick(item.categoryId,index)"
              :class="{active: navIndex == index}"
              class="listItem"
              v-for="(item,index) in navList"
              :key="index"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="containerList">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>



<script>
import { getCategoryLeft } from "../../ajax/index";
import BScroll from 'better-scroll'

export default {
  name: "category",
  data() {
    return {
      navIndex: 0,
      navList: [
        {
          name: "推荐专区",
          categoryId: 11,
        },
        {
          name: "新品专区",
          categoryId: 109217021,
        },
        {
          name: "居家生活",
          categoryId: 1005000,
        },
        {
          name: "服饰鞋包",
          categoryId: 1010000,
        },
        {
          name: "美食酒水",
          categoryId: 1005002,
        },
        {
          name: "个护清洁",
          categoryId: 1013001,
        },
        {
          name: "母婴亲子",
          categoryId: 1011000,
        },
        {
          name: "运动旅行",
          categoryId: 109243029,
        },
        {
          name: "数码家电",
          categoryId: 1043000,
        },
        {
          name: "严选全球",
          categoryId: 1019000,
        },
      ],
      navListHeight: ''
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.getNavListHeight(this.initScroll)
    })
  },
  methods: {
    navClick(id, index) {
      // console.log(id, index);
      this.navIndex = index
      this.$router.push("/category/cateList?categoryId=" + id);
    },
    initScroll() {
      this.scroll = new BScroll(this.$refs.navListWrap,{
        scrollY: true,
        click: true
      })
    },
    getNavListHeight(callback) {
      this.navListHeight = this.$refs.navListWrap.offsetHeight - 1
      callback()
    },
    toSearch() {
      this.$router.push('/search')
    }
  },
  watch: {},
};
</script>



<style lang="stylus" scoped>
.category
  height 100%
  padding-top 44px
  padding-bottom 49px
  .header
    position fixed
    left 0
    top 0
    width 100%
    height 44px
    padding 0 15px
    background #fff
    display flex
    align-items center
    justify-content center
    z-index 5
    .search
      width 100%
      display flex
      align-items center
      justify-content center
      background #ededed
      height 28px
      border-radius 4px
      .icon
        width 14px
        height 14px
        background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp') no-repeat
        background-size cover
        margin-right 5px
        vertical-align middle
      .txt
        color #666
        font-size 14px
        line-height 1
        font-family PingFangSC-Light, helvetica, 'Heiti SC'
  .container
    height 100%
    display flex
    .containerNav
      border-right 1px solid #eee
      height 100%
      width 82px
      background #fff
      flex-shrink 0
      position relative
      .navListWrap
        position absolute
        top 0
        left 0
        width 100%
        transition all 1s ease
        .navList
          padding 20px 0
        .listItem
          position relative
          height 25px
          text-align center
          font-size 14px
          line-height 25px
          margin-top 20px
          &:first-of-type
            margin-top 0
          &.active
            color #ab2b2b
            &:before
              position absolute
              left 0
              top 0
              content ''
              height 100%
              width 3px
              background #ab2b2b
    .containerList
      flex 1
      background #fff
</style>