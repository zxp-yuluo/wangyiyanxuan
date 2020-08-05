<template>
  <div class="item">
    <div class="loading" v-show="isLoading">
      <div class="text">加载中...</div>
    </div>
    <div class="swiper-container" v-if="!isLoading">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
          <img :src="item.picUrl" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <ul class="list" v-if="!isLoading">
      <li class="listItem" v-for="(item,index) in itemList" :key="index">
        <div class="li-header">
          <div class="lih-name">{{item.category.name}}</div>
          <div class="lih-desc">{{item.category.frontName}}</div>
        </div>
        <div class="li-main" v-if="item.itemList">
          <div class="lim-goods" v-for="(item,index) in item.itemList" :key="index">
            <div class="limg-hd">
              <div class="hd-top">
                <img v-lazy="item.listPicUrl" alt />
              </div>
              <div class="hd-bottom">{{item.simpleDesc}}</div>
            </div>
            <div class="limg-name">{{item.name}}</div>
            <div class="limg-price">
              <span>¥{{item.retailPrice}}</span>
              <span
                v-if="item.counterPrice"
                :style="{textDecoration: 'line-through',color: '#999',fontSize: '12px', margin: '0 0 0 4px'}"
              >¥{{item.counterPrice}}</span>
            </div>
            <div class="limg-tag">
              <span v-for="(item, index) in item.itemTagList" :key="index">{{item.name}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getHomeItem } from "../../ajax/index";
import swiper from "swiper/css/swiper.min.css";
import Swiper from "swiper";

export default {
  name: "item",
  data() {
    return {
      id: "",
      bannerList: [],
      itemList: [],
      isLoading: false,
    };
  },
  created() {
    const id = this.$route.query.id;
    this.getHomeTabData(id);
  },
  mounted() {
    // this.initSwiper();
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    },
    async getHomeTabData(categoryId) {
      this.isLoading = true;
      const result = await getHomeItem(categoryId);
      // console.log(result);
      this.bannerList = result.data.currentCategory.bannerList;
      this.itemList = result.data.categoryItemList;
      this.isLoading = false;
    }
  },

  watch: {
    $route() {
      const id = this.$route.query.id;
      this.getHomeTabData(id);
    },
    bannerList() {
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
img
  vertical-align middle
ul
  list-style none
.item
  position relative
  height 100%
  .loading
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    display flex
    justify-content center
    align-items center
    .text
      font-size 16px
      color #dd1a21
  .swiper-container
    width 100%
    .swiper-pagination-bullets
      /deep/.swiper-pagination-bullet
        border-radius 0 !important
        background #fff
        width 20px
        height 2px
        opacity 0.4
        margin-right 5px !important
        margin-left 0 !important
        &.swiper-pagination-bullet-active
          opacity 1
  .swiper-wrapper
    width 100%
    .swiper-slide
      width 100%
      height 148px
      display flex
      justify-content center
      align-items center
      img
        width 100%
        height auto
  .list
    margin-top 6px
    .listItem
      // margin-bottom 10px
      background #fff
      .li-header
        height 60px
        display flex
        flex-direction column
        justify-content center
        align-items center
        // line-height 1.5
        .lih-name
          font-size 16px
          font-weight 600
        .lih-desc
          margin-top 8px
          color #999
      .li-main
        padding 0 10px
        display flex
        flex-wrap wrap
        justify-content space-between
        .lim-goods
          width 172.5px
          padding-bottom 16px
          overflow hidden
          .limg-hd
            position relative
            height 195px
            background #f4f4f4
            .hd-top
              img
                width 172px
                height 172px
            .hd-bottom
              position absolute
              bottom 1px
              left 0
              right 0
              padding 3px 5px
              color #9F8A60
              background #F1ECE2
          .limg-name
            margin-top 8px
            font-size 14px
            line-height 20px
            color #333
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
            overflow hidden
          .limg-price
            color #DD1A21
            line-height 24px
            font-size 16px
          .limg-tag
            display flex
            flex-wrap wrap
            span
              padding 0 4px
              border 1px solid #DD1A21
              border-radius 8px
              line-height 15px
              color #DD1A21
              font-size 8px
              white-space nowrap
              margin 0 4px 4px 0
</style>