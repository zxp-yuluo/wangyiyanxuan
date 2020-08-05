<template>
  <div class="homeItem">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
          <img :src="item.picUrl" alt />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="m-indexServicePolicy">
      <div class="item">
        <div
          class="icon"
          :style="{background: 'url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png) no-repeat',backgroundSize: 'cover'}"
        ></div>
        <div class="text">网易自营品牌</div>
      </div>
      <div class="item">
        <div
          class="icon"
          :style="{background: 'url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png) no-repeat',backgroundSize: 'cover'}"
        ></div>
        <div class="text">30天无忧退货</div>
      </div>
      <div class="item">
        <div
          class="icon"
          :style="{background: 'url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png) no-repeat',backgroundSize: 'cover'}"
        ></div>
        <div class="text">48小时快速退款</div>
      </div>
    </div>
    <div class="m-kingKongModule">
      <div class="item" v-for="(item,index) in kingKongList" :key="index">
        <div class="icon">
          <img :src="item.picUrl" alt />
        </div>
        <div class="txt" style="color: rgb(51, 51, 51);">{{item.text}}</div>
      </div>
    </div>
    <div class="m-indexBigPromotionModule">
      <div class="floorTop"></div>
      <div class="floorFirst">
        <div
          class="promItem"
          :style="{background: 'url(https://yanxuan.nosdn.127.net/60180bb820b4ddbbf9f9e782f25bd59c.png) no-repeat',backgroundSize: 'cover'}"
        ></div>
        <div
          class="promItem"
          :style="{background: 'url(https://yanxuan.nosdn.127.net/3cedfe21d1e3b22ca54a7e01d83b3e29.png) no-repeat',backgroundSize: 'cover'}"
        ></div>
      </div>
    </div>
    <div class="m-freshmanModule">
      <div class="moduleTitle">
        <span class="txt">新人专享礼</span>
      </div>
      <div class="content">
        <div class="left">
          <div class="name">新人专享礼包</div>
          <div class="imgWrap">
            <img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt />
            <div class="animate"></div>
          </div>
        </div>
        <div class="right">
          <div class="up">
            <div class="picWrap">
              <div class="pic">
                <img
                  src="https://yanxuan-item.nosdn.127.net/1f0c3f5d32b0e804deb9b3d56ea6c3b2.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                />
              </div>
              <div class="discount">
                <div class="line1">¥0.9</div>
                <div class="line2">¥9.9</div>
              </div>
            </div>
            <div class="cnt">
              <div class="title">福利社</div>
              <div class="subTitle">今日特价</div>
            </div>
          </div>
          <div class="down">
            <div class="picWrap">
              <div class="pic">
                <img
                  src="https://yanxuan-item.nosdn.127.net/1f0c3f5d32b0e804deb9b3d56ea6c3b2.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"
                />
              </div>
              <div class="discount">
                <div class="line1">¥0.9</div>
                <div class="line2">¥9.9</div>
              </div>
            </div>
            <div class="cnt">
              <div class="title">新人拼团</div>
              <div class="subTitle"></div>
              <div class="tag">1元起包邮</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="m-categoryHotSellModule">
      <div class="moduleTitle">
        <div class="left">类目热销榜</div>
      </div>
      <div class="content">
        <div class="list1">
          <div class="left big">
            <div class="name">热销榜</div>
            <div class="imgWrap">
              <div class="pic">
                <img src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png" />
              </div>
            </div>
          </div>
          <div class="right big">
            <div class="name">热销榜</div>
            <div class="imgWrap">
              <div class="pic">
                <img src="https://yanxuan-item.nosdn.127.net/e0e26db6a4fc2d58d1739f3ddbb5e4de.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="list2">
          <div class="item" v-for="(item,index) in 8" :key="index">
            <div class="txt">美食酒水榜</div>
            <div class="img">
              <img
                src="https://yanxuan-item.nosdn.127.net/22cfd602403ca6a026a439e08e3e3127.png"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="m-flashSaleModule">
      <div class="moduleTitle">
        <div class="left">
          <span>限时购</span>
          <div class="daojishi">
            <span class="hours">00</span>
            <span class="colon">:</span>
            <span class="mins">48</span>
            <span class="colon">:</span>
            <span class="secs">23</span>
          </div>
        </div>
        <div class="right">
          <span>更多</span>
          <i></i>
        </div>
      </div>
      <div class="cnt">
        <div class="item" v-for="(item,index) in 6" :key="index">
          <div class="imgWrap">
            <img src="https://yanxuan-item.nosdn.127.net/6b172c71a23491d31db63b97a39f1f53.png" alt />
          </div>
          <div class="price">
            <span class="current">¥198</span>
            <span class="old">¥998</span>
          </div>
        </div>
      </div>
    </div>
    <div class="m-newItemModule">
      <div class="moduleTitle">
        <div class="left">新品首发</div>
        <div class="right">
          <span>更多</span>
          <i></i>
        </div>
      </div>
      <div class="con">
        <div class="iteem" v-for="(item,index) in newItemList.slice(0,6)" :key="index" @click="toDetail(item.id,index)">
          <img
            :src="item.showPicUrl"
            alt
            width="108"
            height="108"
          />
          <div class="desc">{{item.name}}</div>
          <div class="price">¥{{item.retailPrice}}</div>
          <div class="tagWraper">
            <span class="anniversary tag-status-new">{{item.itemTagList[0].name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="m-sceneLightShoppingGuideModule">
      <div class="m-styleBanner">
        <div class="title" style="color: rgb(51, 51, 51);">严选超市</div>
        <div class="desc" style="color: rgb(127, 127, 127);">10元凑好物</div>
        <div class="picList">
          <img
            src="https://yanxuan-item.nosdn.127.net/cfd0fec5e70ca09d4c0b7492dba26f2e.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150"
            class="pic"
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=150x150"
            class="pic"
          />
        </div>
      </div>
      <div class="m-styleBanner">
        <div class="title" style="color: rgb(51, 51, 51);">严选超市</div>
        <div class="desc" style="color: rgb(127, 127, 127);">10元凑好物</div>
        <div class="picList">
          <img
            src="https://yanxuan-item.nosdn.127.net/acc3b31867f1710e00a89952d210fa57.png"
            class="pic"
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/901be61b95ed8dfc89947125cbdc603b.png"
            class="pic"
          />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="download">
        <div class="application">下载app</div>
        <div class="computer">电脑版</div>
      </div>
      <div class="copyright">
        <p>网易公司版权所有 © 1997-2020</p>
        <p>食品经营许可证：JY13301080111719</p>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
import { getHomeBanner, getHomeKingKongList, getHomeNewItemList } from "../../ajax/index";

export default {
  name: "homeItem",
  data() {
    return {
      bannerList: [],
      kingKongList: [],
      newItemList: []
    };
  },
  created() {
    this.getHomeBannerData();
    this.getHomeKingKongListData();
        this.getHomeNewItemListData()
  },
  methods: {
    async getHomeBannerData() {
      const result = await getHomeBanner();
      this.bannerList = result.data;
    },
    async getHomeKingKongListData() {
      const result = await getHomeKingKongList();
      this.kingKongList = result.data;
    },
    async getHomeNewItemListData() {
      const result = await getHomeNewItemList()
      // console.log(result)
      this.newItemList = result.data
    },
    initSwiper() {
      new Swiper(".swiper-container", {
        loop: true,
        autoplay: true,

        pagination: {
          el: ".swiper-pagination",
        },
      });
    },
    toDetail(id,index) {
      this.$router.push('/detail?id=' + id + '&index=' + index)
    }
  },
  watch: {
    bannerList() {
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  // f4f4f4
};
</script>

<style lang="stylus" scoped>
img
  vertical-align middle
.homeItem
  background #f4f4f4
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
  .m-indexServicePolicy
    height 36px
    display flex
    padding 0 15px
    justify-content space-between
    background #fff
    .item
      flex 1
      display flex
      line-height 36px
      align-items center
      .icon
        width 16px
        height 16px
  .m-kingKongModule
    padding-bottom 16px
    background #fff
    display flex
    flex-wrap wrap
    .item
      padding 5px 10px 4.5px
      .icon
        img
          width 55px
          height 55px
      .txt
        text-align center
        margin-top 10px
        white-space nowrap
        font-size 12px
  .m-indexBigPromotionModule
    // background rgb(245, 100, 66)
    padding-bottom 10px
    .floorTop
      height 160px
      background url('https://yanxuan.nosdn.127.net/d9b021de430394e9b274bf0455b53120.gif') no-repeat
      background-size cover
    .floorFirst
      height 93px
      margin 10px
      margin-bottom 0
      display flex
      justify-content space-between
      .promItem
        width 175.5px
  .m-freshmanModule
    margin 10px 0
    background #fff
    padding-bottom 15px
    .moduleTitle
      width 100%
      padding 0 15px
      line-height 45px
      height 45px
      text-align center
      font-size 16px
      .txt
        display inline-block
        height 100%
        // padding 0 8px
        position relative
        &:after
          content ''
          width 12px
          height 1.5px
          background #000
          position absolute
          top 50%
          right -20px
          transform translateY(-50%)
        &:before
          content ''
          width 12px
          height 1.5px
          background #000
          position absolute
          top 50%
          left -20px
          transform translateY(-50%)
    .content
      padding-left 15px
      display flex
      .left
        width 171.5px
        height 217px
        margin-right 2px
        background #F9E9CF
        border-radius 2px
        .name
          margin 15px 0 0 15px
          font-size 16px
          line-height 1.5
        .imgWrap
          margin 18.5px auto
          width 129px
          height 128px
          position relative
          img
            width 100%
            height 100%
          .animate
            width 15px
            height 10px
            background url('http://yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png') no-repeat
            background-size 100% 100%
            position absolute
            top 109px
            left 81px
      .right
        display flex
        flex-direction column
        justify-content space-between
        line-height 1.5
        .picWrap
          .pic
            width 100px
            height 100px
            position absolute
            bottom 0
            right 0
            img
              width 100px
              height 100px
          .discount
            position absolute
            top 6px
            right 15px
            width 40px
            height 40px
            padding-top 5px
            background orange
            border-radius 50%
            color #ffffff
            text-align center
            .line1
              font-size 12px
            .line2
              font-size 10px
              text-decoration line-through
              line-height 1
        .cnt
          .title
            font-size 16px
          .subTitle
            color #999
            font-size 12px
          .tag
            display inline-block
            padding 0 4px
            background #CBB693
            border-radius 2px
            color #fff
        .up
          width 171.5px
          height 107px
          padding 0 2px 2px 0
          background #FBE2D3
          padding 10px 0 0 15px
          border-radius 2px
          position relative
        .down
          height 107px
          background #FFECC2
          padding 10px 0 0 15px
          border-radius 2px
          position relative
  .m-categoryHotSellModule
    background #fff
    margin-bottom 15px
    .moduleTitle
      height 50px
      padding 0 15px
      .left
        font-size 16px
        line-height 50px
    .content
      padding 0 10px 10px 15px
      .list1
        display flex
        .big
          width 170px
          height 100px
          margin 0 5px 5px 0
          position relative
          &.left
            background #F9F3E4
          &.right
            background #EBEFF6
          .name
            margin-top 33px
            padding-left 12px
            font-size 14px
            position relative
            &:before
              content ''
              position absolute
              bottom -14px
              left 12px
              width 24px
              height 2px
              background #333
        .imgWrap
          position absolute
          top 0
          right 0
          .pic
            img
              width 100px
              height 100px
      .list2
        display flex
        flex-wrap wrap
        .item
          width 82.5px
          height 90px
          margin 0 5px 5px 0
          background #F5F5F5
          .txt
            text-align center
            margin-top 5px
            line-height 1.5
          .img
            width 60px
            height 60px
            margin auto
            img
              width 60px
              height 60px
  .m-flashSaleModule
    margin-bottom 15px
    background #fff
    .moduleTitle
      display flex
      justify-content space-between
      padding 0 15px
      height 50px
      line-height 50px
      .left
        display flex
        font-size 16px
        .daojishi
          margin-left 6px
          span
            padding 2px
            border-radius 2px
            background #000
            color #fff
            font-size 12px
          .colon
            background #fff
            color #000
            margin 0 2px
      .right
        display flex
        align-items center
        font-size 14px
        i
          margin-left 4px
          width 6.5px
          height 11.5px
          background url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-caab97997c.png') no-repeat
          background-size 100% 100%
    .cnt
      padding 0 5px 0 15px
      display flex
      flex-wrap wrap
      .item
        margin-right 10px
        padding-bottom 15px
        .imgWrap
          width 108px
          height 108px
          background #F5F5F5
          border-radius 4px
          margin-bottom 6px
          img
            width 100%
            height 100%
        .price
          padding-left 10px
          .current
            color #DD1A21
            font-size 13px
            margin-right 6px
          .old
            color #7F7F7F
            font-size 10px
            text-decoration line-through
  .m-newItemModule
    margin-bottom 15px
    background #fff
    .moduleTitle
      display flex
      justify-content space-between
      padding 0 15px
      height 50px
      line-height 50px
      .left
        display flex
        font-size 16px
      .right
        display flex
        align-items center
        font-size 14px
        i
          margin-left 4px
          width 6.5px
          height 11.5px
          background url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-caab97997c.png') no-repeat
          background-size 100% 100%
    .con
      padding-left 5px
      display flex
      flex-wrap wrap
      .iteem
        margin-left 10px
        overflow hidden
        width 108px
        img
          margin-bottom 6px
          background #f5f5f5
          border-radius 2px
        .desc
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          overflow hidden
          line-height 1.5
          font-size 13px
        .price
          color #DD1A21
          font-size 16px
          line-height 1.5
        .tagWraper
          margin 2px 0 6px 0
          font-size 8px
          color #DD1A21
          .tag-status-new
            padding 0 4px
            margin 0 4px 2.5px 0
            &.anniversary
              border-radius 8px
              border 1px solid #DD1A21
            &.coupon
              background url('http://yanxuan.nosdn.127.net/ed89ab4f5ad97ad23257f635a9c2fdbb.png') no-repeat left center, url('http://yanxuan.nosdn.127.net/344655c651a5cf17b7d6096b69be7aba.png') no-repeat right center, url('http://yanxuan.nosdn.127.net/6dcff693a2be08725c1313c7e2390840.png')
              background-size contain
  .m-sceneLightShoppingGuideModule
    background #fff
    margin-bottom 15px
    padding 5px 15px 15px 13px
    display flex
    .m-styleBanner
      margin 2px 0 0 2px
      padding 10px 0 0 10px
      width 171.5px
      height 132px
      background url('https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png') no-repeat
      background-size 100% 100%
      line-height 1.5
      .title
        padding-left 5px
        font-size 16px
      .desc
        padding-left 5px
        font-size 12px
      .picList
        display flex
        img 
          width 75px
          height 75px
          margin-right 2px
  .footer
    padding 27px 10px 14px
    background #414141
    .download
      display flex
      align-items center
      justify-content center
      color #fff
      padding-bottom 18px
      .application
      .computer
        width 85px
        line-height 30px
        text-align center
        border 1px solid #999
        border-radius 2px
      .application
        margin-right 25px
    .copyright
      text-align center
      color #fff
      line-height 18px
      color #999
</style>
