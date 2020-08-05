<template>
  <div class="cateListWrap">
    <div class="containerWrap" ref="containerWrap">
      <div class="container">
        <div class="banner" v-if="!isLoading">
          <img
            v-if="cateListData.currentCategory"
            :src="cateListData.currentCategory.bannerList[0].picUrl"
            alt
          />
        </div>
        <div class="cateList" v-for="(item, index) in cateListData.categoryGroupList" :key="index">
          <div v-if="!isLoading">
            <div class="hd" v-if="item.name">{{item.name}}</div>
            <ul class="list">
              <li class="item" v-for="(item, index) in item.categoryList" :key="index">
                <div class="imgWrap">
                  <img :src="item.wapBannerUrl" alt />
                </div>
                <div class="name">{{item.name}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="spin" v-show="isLoading">
      <div class="loading">
        <Spin size="small"></Spin>
        <Spin></Spin>
        <Spin size="large"></Spin>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { getCategoryLeft } from "../../ajax";

export default {
  name: "cateList",
  data() {
    return {
      cateListData: {},
      isLoading: false,
      scrollHeight: ''
    };
  },
  created() {
    this.getCategoryRight();
  },
  methods: {
    async getCategoryRight(categoryId) {
      this.isLoading = true;
      const result = await getCategoryLeft(categoryId);
      // console.log(result);
      this.cateListData = result.data;
      this.isLoading = false;
    },
    initScroll() {
      this.scroll = new BScroll(this.$refs.containerWrap,{
        scrollY: true,
        click: true
      })
    },
    getScrollHeight(callback) {
      this.scrollHeight = this.$refs.containerWrap.offsetHeight - 1
      callback()
    }
  },
  watch: {
    $route() {
      let categoryId = this.$route.query.categoryId;
      this.getCategoryRight(categoryId);
    },
    cateListData() {
      this.$nextTick(() => {
        this.getScrollHeight(this.initScroll)
      })
    }
  },
};
</script>

<style lang="stylus" scoped>
.spin
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background rgba(0, 0, 0, 0.1)
  z-index 9
  display flex
  justify-content center
  align-items center
  .loading
    display flex
    align-items center
    justify-content center
.cateListWrap
  padding 15px
  height 100%
  width 100%
  overflow hidden
  .containerWrap
    max-height 100%
    .banner
      margin-bottom 16px
      img
        width 100%
    .cateList
      &:last-child
        padding-bottom 50px
      .hd
        position relative
        font-size 14px
        font-weight 600
        padding-bottom 4px
        margin-bottom 12px
        line-height 1.5
        color #333
        &:after
          position absolute
          content ''
          bottom 0
          left -50%
          right -50%
          -webkit-transform scale(0.5)
          transform scale(0.5)
          border-top 1px solid #d9d9d9
      .list
        display flex
        flex-wrap wrap
        // justify-content space-between
        .item
          margin-right 23px
          width 72px
          &:nth-of-type(3n)
            margin-right 0
          .imgWrap
            img
              width 72px
              height 72px
          .name
            height 36px
            text-align center
            line-height 1.5
</style>