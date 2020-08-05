<template>
  <div class="detail">
    <div class="login-header">
      <div class="login-header-left" @click="goHome">
        <i class="lhl-home"></i>
      </div>
      <div class="login-header-center"></div>
      <div class="login-header-right">
        <div class="lhrsearch" @click="goSearch"></div>
        <div class="lhrcart" @click="goCart">
          <div v-show="cartlist.length" class="num">{{totalCount}}</div>
          <!-- <div class="num">6</div> -->
        </div>
      </div>
    </div>
    <div class="swiper-container" ref="detailSwiper">
      <div class="swiper-wrapper" v-if="detailData.itemDetail">
        <div class="swiper-slide">
          <img :src="detailData.itemDetail.picUrl1" alt />
        </div>
        <div class="swiper-slide">
          <img :src="detailData.itemDetail.picUrl2" alt />
        </div>
        <div class="swiper-slide">
          <img :src="detailData.itemDetail.picUrl3" alt />
        </div>
        <div class="swiper-slide">
          <img :src="detailData.itemDetail.picUrl4" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="promBanner">
      <div class="left">
        <div class="xingou">{{detailData.promotionDesc}}</div>
        <div class="price">
          <div class="newPrice" v-if="detailData.detailPromBanner">
            <span>¥</span>
            {{detailData.detailPromBanner.activityPrice}}
          </div>
          <!-- <div class="oldPrice">¥299</div> -->
        </div>
      </div>
      <div class="right">
        <div class="countdown">
          <div class="dao">距结束</div>
          <div>5天4小时</div>
        </div>
        <div class="progress">
          <div class="line">
            <!-- <div class="remain" :style="{width: remainWidth + px}"></div> -->
            <div class="remain"></div>
          </div>
          <div
            class="txt"
            v-if="detailData.detailPromBanner"
          >{{detailData.detailPromBanner.sellVolumeDesc}}</div>
        </div>
      </div>
    </div>
    <div class="detailBaseInfo">
      <div class="content">
        <div class="baseInfo">
          <div class="info">
            <div class="name">{{detailData.name}}</div>
            <div class="desc">推荐理由</div>
          </div>
          <div class="comment">
            <div class="check-wrap">查看评价</div>
            <i class="icon"></i>
          </div>
        </div>
        <div class="rcmdBanner">
          <ul>
            <li>
              <div class="key">1</div>
              <div class="recommendReason">户外登山风，帅气时髦感</div>
            </li>
            <li>
              <div class="key">2</div>
              <div class="recommendReason">拼接设计，搭配出不同的层次感</div>
            </li>
            <li>
              <div class="key">3</div>
              <div class="recommendReason">橡胶大底，兼顾防滑耐磨</div>
            </li>
          </ul>
        </div>
      </div>
      <div style="borderTop: 10px solid rgb(244, 244, 244)">
        <div class="points">
          <div class="pcontent">邮费：免邮，合作仓直发</div>
          <div class="icon">
          </div>
        </div>
        <div class="hdrkDetail">
          <div class="pcontent">
            促销：
            <span>全场换购</span>低至3折超值换购
          </div>
          <div class="icon"></div>
        </div>
        <div class="shoppingReward">
          <div class="pcontent">
            购物返：最高返
            <span
              style="color: red"
              v-if="detailData.shoppingReward"
            >{{detailData.shoppingReward.rewardValue}}</span>
          </div>
          <div class="icon"></div>
        </div>
      </div>
      <div style="borderTop: 10px solid rgb(244, 244, 244)">
        <div class="specSelect">
          <div class="txt">请选择规格数量</div>
          <div class="icon"></div>
        </div>
      </div>
      <div class="youhui">
        <div class="txt">限制：该商品不可以使用优惠券</div>
        <!-- <div class="icon"></div> -->
      </div>
      <div class="address">
        <div class="txt">配送：请选择配送地址</div>
        <div class="icon"></div>
      </div>
      <div class="service">
        <div style="display: flex;">
          <div class="tex">服务：</div>
          <ul>
            <li class="item">
              <div class="dian"></div>
              <div class="ucontent">网易严选推荐</div>
            </li>
            <li class="item">
              <div class="dian"></div>
              <div class="ucontent">30天无忧退换</div>
            </li>
            <li class="item">
              <div class="dian"></div>
              <div class="ucontent">不可用券/红包</div>
            </li>
            <li class="item">
              <div class="dian"></div>
              <div class="ucontent">不享受企业折扣</div>
            </li>
            <li class="item">
              <div class="dian"></div>
              <div class="ucontent">不享受学生折扣</div>
            </li>
            <li class="item">
              <div class="dian"></div>
              <div class="ucontent">国内部分地区不可配送</div>
            </li>
          </ul>
        </div>
        <div class="icon"></div>
      </div>
    </div>
    <div
      class="adbanner"
      style="borderTop: 10px solid rgb(244, 244, 244); borderBottom: 10px solid rgb(244, 244, 244)"
    >
      <img
        v-if="detailData.adBanners"
        :src="detailData.adBanners[0]?detailData.adBanners[0].picUrl:''"
        alt
      />
    </div>
    <div class="detailComment">
      <div class="c-title">
        <div class="comment-title">用户评价(4)</div>
        <div class="comment-eye">
          <span>查看更多</span>
          <div class="icon"></div>
        </div>
      </div>
      <div class="comment-main">
        <div class="title">
          <img v-if="detailData.comments" :src="detailData.comments[0].frontUserAvatar" alt />
          <div v-if="detailData.comments" class="name">{{detailData.comments[0].frontUserName}}</div>
          <div class="vip"></div>
          <div class="commentRate">
            <ul class="rate" v-if="detailData.comments">
              <li class="star" v-for="(item, index) in detailData.comments[0].star" :key="index"></li>
              <li
                class="tstar"
                v-for="(item, index) in (5-detailData.comments[0].star)"
                :key="index"
              ></li>
            </ul>
          </div>
        </div>
        <div class="timeWrap">
          <div class="time">2020-07-19&nbsp;16:33:27</div>
          <div class="model" v-if="detailData.skuInfo">{{detailData.skuInfo[0]}}</div>
        </div>
        <div class="commet" v-if="detailData.comments">{{detailData.comments[0].content}}</div>
      </div>
    </div>
    <div
      class="detailParams"
      style="borderTop: 10px solid rgb(244, 244, 244); borderBottom: 10px solid rgb(244, 244, 244)"
    >
      <div class="attrList">
        <div class="tt">商品参数</div>
        <div class="item" v-for="(item, index) in detailData.attrList" :key="index">
          <div class="left">{{item.attrName}}</div>
          <div class="right">{{item.attrValue}}</div>
        </div>
      </div>
    </div>
    <div class="detailHtml" v-if="detailData.itemDetail" v-html="detailData.itemDetail.detailHtml"></div>
    <div class="commonIssues">
      <div class="title-is">
        <div class="line"></div>
        <div class="txt">常见问题</div>
      </div>
      <div class="lists">
        <div class="item" v-for="(item, index) in detailData.issueList" :key="index">
          <div class="tou">
            <div class="hdian"></div>
            <div class="ttext">{{item.question}}</div>
          </div>
          <div class="ti">{{item.answer}}</div>
        </div>
      </div>
    </div>
    <div class="guessLike">
      <div class="gl-title">
        <div class="tt">你可能还喜欢</div>
      </div>
    </div>

    <!-- -------------------------------------- -->
    <ul class="list">
      <li class="listItem">
        <div class="li-main">
          <div class="lim-goods" v-for="(item,index) in 8" :key="index">
            <div class="limg-hd">
              <div class="hd-top">
                <img
                  src="https://yanxuan-item.nosdn.127.net/0ad157da3e7dffea9957db26fa7b509f.png"
                  alt
                />
              </div>
              <div class="hd-bottom">撑腰护颈，舒适就坐一整天</div>
            </div>
            <div class="limg-name">【丁磊直播款】多功能人体工学转椅</div>
            <div class="limg-price">
              <span>¥1399</span>
              <span
                style="textDecoration: line-through;color: #999;fontSize: 12px; margin: 0 0 0 4px;"
              >¥1199</span>
            </div>
            <div class="limg-tag">
              <span>浙江制造</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- -------------------------------------- -->
    <div class="pushCart">
      <div class="er">
        <div class="er-icon"></div>
      </div>
      <div class="maimaimai">立即购买</div>
      <div class="jiaru" @click="jiaru">加入购物车</div>
    </div>
  </div>
</template>

<script>
import {
  getDetailDataOne,
  getDetailDataTwo,
  getDetailDataThree,
  getDetailDataFour,
  getDetailDataFive,
  getDetailDataSix,
} from "../../ajax/index";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { mapState } from "vuex";

export default {
  name: "detail",
  data() {
    return {
      detailData: {},
      remainWidth: "",
      index: 0,
      show: false,
    };
  },
  created() {
    console.log(this.$route.query.id, this.$route.query.index);
    this.index = this.$route.query.index;
    if (this.$route.query.index == 0) {
      this.getDetailDataOneData();
    } else if (this.$route.query.index == 1) {
      this.getDetailDataTwoData();
    } else if (this.$route.query.index == 2) {
      this.getDetailDataThreeData();
    } else if (this.$route.query.index == 3) {
      this.getDetailDataFourData();
    } else if (this.$route.query.index == 4) {
      this.getDetailDataFiveData();
    } else if (this.$route.query.index == 5) {
      this.getDetailDataSixData();
    }
  },
  mounted() {
    // console.log(this.$refs.detailSwiper);
  },
  methods: {
    jiaru() {
      console.log("加入购物车");
      let produceInfo = {
        id: this.index,
        isCheck: true,
        count: 1,
        price: this.detailData.detailPromBanner.activityPrice,
        name: this.detailData.name,
        picUrl: this.detailData.primaryPicUrl,
      };
      this.$store.dispatch("addCart", produceInfo);
    },
    goHome() {
      this.$router.replace("/home");
    },

    goSearch() {
      this.$router.replace("/search");
    },

    goCart() {
      this.$router.replace("/cart");
    },
    initSwiper() {
      new Swiper(this.$refs.detailSwiper, {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      });
    },
    async getDetailDataOneData() {
      const result = await getDetailDataOne();
      console.log(result);
      this.detailData = result.data;
    },
    async getDetailDataTwoData() {
      const result = await getDetailDataTwo();
      console.log(result);
      this.detailData = result.data;
    },
    async getDetailDataThreeData() {
      const result = await getDetailDataThree();
      console.log(result);
      this.detailData = result.data;
    },
    async getDetailDataFourData() {
      const result = await getDetailDataFour();
      console.log(result);
      this.detailData = result.data;
    },
    async getDetailDataFiveData() {
      const result = await getDetailDataFive();
      console.log(result);
      this.detailData = result.data;
    },
    async getDetailDataSixData() {
      const result = await getDetailDataSix();
      console.log(result);
      this.detailData = result.data;
    },
  },
  watch: {
    detailData() {
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  computed: {
    ...mapState({
      cartlist: (state) => state.cartlist,
    }),
    totalCount() {
      let arr = this.cartlist.filter((item) => {
        return item.isCheck == true;
      });
      return arr.reduce((pre, next) => {
        return (pre += next.count);
      }, 0);
    },
  },
};
</script>

<style lang="stylus" scoped>
img
  width 100%
  vertical-align middle
.swiper-pagination-fraction
  color #fff
.detail
  padding-top 44px
  padding-bottom 52px
  .login-header
    background #fff
    height 44px
    padding 0 8px 0 12px
    display flex
    justify-content space-between
    position fixed
    width 100%
    top 0
    left 0
    z-index 9
    .login-header-left
      .lhl-home
        display inline-block
        width 22px
        height 100%
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=')
        background-size 20px 20px
        background-position center
        background-repeat no-repeat
    .login-header-center
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 86px
      height 27px
      background url('/hd.png.webp') no-repeat
      background-size cover
      background-position 0 -64px
    .login-header-right
      .lhrsearch
        display inline-block
        width 30px
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAKlBMVEUAAAA0NDQ0NDQ0NDQ0NDQ0NDQzMzMUFBQ0NDROTk4zMzMzMzMzMzM2NDTc2xHNAAAADXRSTlMAbezXT6YsFM0O+L+FggY9rwAAAP5JREFUOMtjIBOwiTat0ghMQBeeaHsXBC5Logoz6l4KTGcoE9W9JIBiSO9tBzCDZe8NZKOcLgOFIRK2KghhlrWRcPbUWw5wttcdJL1nl8BN1z2AJM5zCWYDx1UUt8U2QBmylijiky9CaE5dBxRxlksTIH66jeb3vRC/MV9BE/c1AFO5CmjiTNcg1gagibNCLI4VQBNnhLi7NwE9Km6AKd0CNHH2S2BqLUbc3cIljsscXPbicicuf+EKB1zhhiuc8cYLZjzij3fMdII9XV3Bng7vXi7Amm4Vbc2xp/NisAbMfMEO0YCZj8AaMPMdTAMmQGhAAPwabmAXZ+9mIBUAAIJuXNa9gIYoAAAAAElFTkSuQmCC')
        background-size 20px 20px
        background-position center
        background-repeat no-repeat
        height 100%
        margin-right 7.5px
      .lhrcart
        display inline-block
        width 24.5px
        height 100%
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII=')
        background-size 20px 20px
        background-position center
        background-repeat no-repeat
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
          top 6px
          right 0px
  .promBanner
    height 60px
    padding-right 15px
    background orange
    display flex
    align-items center
    color #fff
    .left
      height 60px
      flex 1
      .xingou
        margin 6px 0 0 6px
        font-size 12px
        font-weight 500
      .price
        display flex
        margin-left 5px
        .newPrice
          font-size 24px
          margin-right 5px
          span
            font-size 12px
            margin-right 2px
        .oldPrice
          font-size 12px
          line-height 42px
    .right
      .countdown
        display flex
        align-items center
        .dao
          margin-right 4px
      .progress
        display flex
        align-items center
        margin-top 6.5px
        .line
          width 57px
          background #ED6D2A
          position relative
          height 5px
          border-radius 5px
          .remain
            position absolute
            left 0
            top 0
            height 5px
            width 75%
            background #FFF
            border-radius 5px
  .detailBaseInfo
    .content
      padding 13px 0 18px 15px
      .baseInfo
        display flex
        align-items center
        .info
          flex 1
          margin-right 12px
          .name
            font-size 14px
            margin-bottom 2px
            line-height 1.5
            font-weight 600
          .desc
            font-size 12px
            color #999
        .comment
          display flex
          align-items center
          margin-right 10px
          .check-wrap
            font-size 14px
          .icon
            width 25px
            height 25px
            background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp') no-repeat
            background-size cover
            background-position center
      .rcmdBanner
        width 344px
        margin-top 6px
        padding 10px
        background #fafafa
        border 1px solid #E6E6E6
        ul
          li
            display flex
            align-items center
            .key
              color #DD1A21
              border 1px solid #DD1A21
              margin-right 4px
              border-radius 50%
              width 12px
              height 12px
              line-height 12px
              text-align center
              font-size 10px
            .recommendReason
              font-size 12px
              color #333
    .points
      display flex
      justify-content space-between
      align-items center
      padding 0 15px
      height 52.5px
      line-height 52.5px
      .pcontent
        font-size 14px
    .icon
      flex-shrink 0
      width 25px
      height 25px
      background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp') no-repeat
      background-size cover
    .hdrkDetail
      display flex
      height 52.5px
      line-height 52.5px
      justify-content space-between
      padding 0 15px
      align-items center
      .pcontent
        font-size 14px
        span
          color #ffffff
          background red
          border-radius 10px
          font-size 10px
          padding 2px 4px
          position relative
          top -2px
    .shoppingReward
      display flex
      height 52.5px
      line-height 52.5px
      justify-content space-between
      align-items center
      padding 0 15px
      .pcontent
        font-size 14px
    .specSelect
      display flex
      height 52.5px
      line-height 52.5px
      justify-content space-between
      align-items center
      padding 0 15px
      .txt
        font-size 14px
    .youhui, .address
      display flex
      height 52.5px
      line-height 52.5px
      justify-content space-between
      align-items center
      padding 0 15px
      border-top 1px solid #d9d9d9
      .txt
        font-size 14px
    .service
      display flex
      padding 0 15px
      border-top 1px solid #d9d9d9
      align-items center
      padding-top 12px
      .tex
        font-size 14px
        white-space nowrap
      ul
        display flex
        flex-wrap wrap
        .item
          font-size 14px
          white-space nowrap
          display flex
          align-items center
          margin 0 20px 8px 0
          color #999
          .ucontent
            line-height 1
          .dian
            width 4px
            height 4px
            border-radius 50%
            background #DD1A21
            margin-right 8px
  .adbanner
    margin-top 10px
  .detailComment
    .c-title
      display flex
      height 45px
      padding 0 15px
      justify-content space-between
      border-bottom 1px solid #d9d9d9
      .comment-title, .comment-eye
        font-size 14px
        display flex
        align-items center
        .icon
          width 25px
          height 25px
          background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp') no-repeat
          background-size cover
    .comment-main
      padding 0 15px
      margin-bottom 15px
      .title
        padding 10px 0 2px 0
        display flex
        align-items center
        img
          width 32px
          height 32px
          border-radius 50%
          margin-right 8px
        .name
          margin-right 6px
        .commentRate
          .rate
            display flex
            .star
              margin-right 6px
              width 13px
              height 13px
              background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/star-smallYellow-2a20c63768.png?imageView&type=webp') no-repeat
              background-size cover
            .tstar
              margin-right 6px
              width 13px
              height 13px
              background url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/star-smallGrey-0cadc0b2de.png?imageView&type=webp') no-repeat
              background-size cover
      .timeWrap
        margin-top 9px
        font-size 12px
        color #999
        display flex
        .model
          margin-left 8px
      .commet
        margin-top 9px
        padding-right 15px
        font-size 14px
        color #333333
  .detailParams
    padding 15px
    .attrList
      .tt
        font-size 14px
        line-height 1
        padding 20px 0 12px 0
      .item
        padding 5px 15px 5px 0
        font-size 12px
        display flex
        // height 32px
        border-top 1px dashed #eee
        .left
          color #999
          width 74px
          flex-shrink 0
        .right
          flex 1
  .commonIssues
    padding 0 15px
    .title-is
      padding 27px 0
      font-size 16px
      position relative
      .txt
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        text-align center
        padding 0 10px
        background #fff
      .line
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
        height 1px
        width 149px
        background #666
    .lists
      .item
        padding-bottom 13px
        .tou
          padding 0 0 7.5px 9px
          position relative
          .hdian
            position absolute
            top 7px
            left 0
            width 4px
            height 4px
            background #DD1A21
            border-radius 50%
          .ttext
            font-size 12px
        .ti
          padding 0 9px
          font-size 12px
          color #999
  .guessLike
    .gl-title
      padding 27px 0
      font-size 16px
      position relative
      .tt
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        &:after
          position absolute
          right -30px
          top 50%
          transform translateY(-50%)
          content ''
          height 1px
          width 20px
          background #ddd
        &:before
          position absolute
          content ''
          height 1px
          width 20px
          background #ddd
          left -30px
          top 50%
          transform translateY(-50%)
  .list
    margin-top 6px
    .listItem
      // margin-bottom 10px
      background #fff
      // .li-header
      // height 60px
      // display flex
      // flex-direction column
      // justify-content center
      // align-items center
      // // line-height 1.5
      // .lih-name
      // font-size 16px
      // font-weight 600
      // .lih-desc
      // margin-top 8px
      // color #999
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
  .pushCart
    position fixed
    left 0
    bottom 0
    width 100%
    height 52px
    display flex
    .er
      width 78px
      display flex
      justify-content center
      align-items center
      background #fff
      .er-icon
        width 25px
        height 25px
        background url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/detail-kefu-d10f0489d2.png?imageView&type=webp') no-repeat // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/detail-kefu-d10f0489d2.png?imageView&type=webp) no-repeat
        background-size cover
    .maimaimai
      width 148px
      text-align center
      line-height 52px
      font-size 16px
      background #fff
    .jiaru
      flex 1
      text-align center
      line-height 52px
      background #DD1A21
      color #fff
      font-size 16px
</style>