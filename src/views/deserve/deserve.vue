<template>
  <div class="deserve">
    <div class="nav">
      <div class="left" @click="toHome"></div>
      <div class="center">值得买</div>
      <div class="right">
        <div class="search" @click="toSearch">
          
        </div>
        <div class="cart" @click="toCart">
          <div v-show="cartlist.length" class="num">{{totalCount}}</div>
        </div>
      </div>
    </div>
    <div class="swiperTab-container">
      <div class="swiperTab-title">
        <img class="title" src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" />
        <div class="txt">严选好物 用心生活</div>
        <div class="bg">
          <img src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt />
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in newNavList" :key="index">
            <div class="group">
              <div class="item" v-for="(item, index) in item" :key="index">
                <div class="imgWrap">
                  <img :src="item.picUrl" alt />
                </div>
                <div class="detail">
                  <div class="text">{{item.mainTitle}}</div>
                  <div class="desc">{{item.viceTitle}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <pubuliu></pubuliu>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
import { getDeseveSwiper } from "../../ajax";
import _ from "lodash";
import {mapState} from 'vuex'

export default {
  name: "deserve",
  data() {
    return {
      navList: [],
    };
  },
  created() {
    this.getDeseveSwiperData();
  },
  methods: {
    async getDeseveSwiperData() {
      const result = await getDeseveSwiper();
      console.log(result);
      this.navList = result.data.navList;
    },
    initSwiper() {
      new Swiper(".swiper-container", {
        slidesPerView: 4,
        pagination: {
          el: ".swiper-pagination",
        }
      });
    },
    toHome() {
      this.$router.push('/home')
    },
    toSearch() {
      this.$router.push('/search')
    },
    toCart() {
      this.$router.push('/cart')
    }
  },
  components: {
    pubuliu: () => import('../../components/content/pubuliu')
  },
  computed: {
    newNavList() {
      return _.chunk(this.navList, 2);
    },
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
  watch: {
    newNavList() {
      this.$nextTick(() => {
        this.initSwiper()
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
img
  vertical-align middle
.deserve
  padding 50px 0
  background #eee
  padding-bottom 0
  .nav
    height 50px
    padding 0 12px
    display flex
    justify-content space-between
    align-items center
    position fixed
    left 0
    right 0
    top 0
    z-index 9
    background #fff
    .left
      height 50px
      width 23px
      background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=') no-repeat
      background-position center
      background-size 23px 23px
    .center
      position absolute
      left 50%
      top 50%
      transform translate(-50%, -50%)
      font-size 18px
      font-weight 500
    .right
      display flex
      .search
        height 50px
        width 23px
        background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAKlBMVEUAAAA0NDQ0NDQ0NDQ0NDQ0NDQzMzMUFBQ0NDROTk4zMzMzMzMzMzM2NDTc2xHNAAAADXRSTlMAbezXT6YsFM0O+L+FggY9rwAAAP5JREFUOMtjIBOwiTat0ghMQBeeaHsXBC5Logoz6l4KTGcoE9W9JIBiSO9tBzCDZe8NZKOcLgOFIRK2KghhlrWRcPbUWw5wttcdJL1nl8BN1z2AJM5zCWYDx1UUt8U2QBmylijiky9CaE5dBxRxlksTIH66jeb3vRC/MV9BE/c1AFO5CmjiTNcg1gagibNCLI4VQBNnhLi7NwE9Km6AKd0CNHH2S2BqLUbc3cIljsscXPbicicuf+EKB1zhhiuc8cYLZjzij3fMdII9XV3Bng7vXi7Amm4Vbc2xp/NisAbMfMEO0YCZj8AaMPMdTAMmQGhAAPwabmAXZ+9mIBUAAIJuXNa9gIYoAAAAAElFTkSuQmCC') no-repeat
        background-position center
        background-size 23px 23px
        margin-right 15px
      .cart
        height 50px
        width 23px
        background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII=') no-repeat
        background-position center
        background-size 23px 23px
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
  .swiperTab-container
    padding-top 72.5px
    position relative
    background #eee
    .swiper-pagination
      left 50%
      bottom 15px
      transform translateX(-50%)
      /deep/.swiper-pagination-bullet
        width 20px
        height 2px
        border-radius 0
        padding 0
        margin 0
      /deep/.swiper-pagination-bullet-active
        background #DD1A21 !important 
    .swiperTab-title
      position absolute
      left 0
      top 0
      .title
        position absolute
        left 6px
        top 30px
        width 65px
      .txt
        position absolute
        top 39.5px
        left 73px
        height 22px
        line-height 22px
        color #fff
        font-size 16px
      .bg
        img
          width 100%
    .swiper-container
      margin 0 auto
      width 355px
      height 270px
      background #fff
      border-radius 8px 8px 0 0
      .group
        width 90px
        padding 18px 3px 3px 3px
        .item
          text-align center
          .imgWrap
            width 60px
            height 60px
            margin 0 auto
            img
              width 100%
              height 100%
          &:nth-of-type(2)
            margin-top 14px
          .detail
            margin-top 4px
</style>