<template>
  <div class="cart">
    <div class="cartHeader">
      <div class="hLeft">购物车</div>
      <div class="hRight">
        <div class="hr-coupon">
          <span>领券</span>
        </div>
        <span v-show="!cartlist.length" style="fontSize: 16px">编辑</span>
      </div>
    </div>
    <div v-show="cartlist.length" class>
      <ul class="servicePolicy">
        <li class="sp-item">
          <i class="spi-icon"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="sp-item">
          <i class="spi-icon"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="sp-item">
          <i class="spi-icon"></i>
          <span>满99元免邮费</span>
        </li>
      </ul>
    </div>
    <div v-show="cartlist.length" class="notice">已满足免邮条件</div>
    <div v-show="!cartlist.length" class="defaultPage">
      <div class="container">
        <img
          src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png"
          alt
        />
        <h2 style="textAlign:center;color:#999;fontWeight:400;fontSize:14px;">去添加点什么吧</h2>
      </div>
    </div>
    <div v-show="cartlist.length" class="cartListWrap">
      <ul class="cartList">
        <li class="cl-item">
          <div class="cartGroup">
            <div class="cg-Header">
              <div class="cart-tag">全场换购</div>
              <div class="promTip">已满300元享低至3折超值换购</div>
              <div class="promBtn">
                再逛逛
                <i class="u-icon"></i>
              </div>
            </div>
            <div class="cg-Footer">
              <span>去换购商品</span>
              <i class="icon"></i>
            </div>
          </div>
          <div class="cartGood"></div>
        </li>
        <van-swipe-cell v-for="(item, index) in cartlist" :key="index">
          <li class="cl-item">
            <div class="cartGroup"></div>
            <div class="cartGood">
              <div class="cg-top">
                <div class="timingTag">特价抢购中</div>
                <div class="finishTips">距优惠结束</div>
                <div class="countdown-dayHour">7天4小时</div>
              </div>
              <div class="cg-bottom">
                <div
                  class="checkbox"
                  @click="isCheck(item.id,item.isCheck)"
                  :style="{backgroundPosition: item.isCheck?'0 -122px':'0 -97px'}"
                ></div>
                <div class="imgWrap">
                  <img :src="item.picUrl" alt />
                </div>
                <div class="cnt">
                  <div class="cnt-top">
                    <span>特价&nbsp;</span>
                    {{item.name}}
                  </div>
                  <!-- <div class="cnt-center">
                  <span>深海蓝</span>
                  <i class="cntc-icon"></i>
                  </div>-->
                  <div class="cnt-bottom">
                    <span class="currentPrice">¥{{item.price}}</span>
                    <!-- <span class="oldPrice">¥399</span> -->
                  </div>
                  <div class="cnt-count">
                    <div class="less" @click="lessClick(item.id,$event)"></div>
                    <div class="txtWrap">
                      <input type="text" class="tel" v-model="item.count" @change="inputChange" />
                    </div>
                    <div class="more" @click="moreClick(item.id,$event)"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div style="height: 59px;"></div> -->
          </li>
          <template #right>
            <van-button square type="danger" text="删除" @click="deleteClick(item.id)" />
          </template>
        </van-swipe-cell>
      </ul>
    </div>
    <div class="billingFt" v-show="cartlist.length">
      <div class="bft-left">
        <div class="bftl-left">
          <i
            class="bftll-icon"
            @click="allIsCheck"
            :style="{backgroundPosition: isAllCheck?'0 -122px':'0 -97px'}"
          ></i>
          <div class="bftll-txt">已选({{totalCount}})</div>
        </div>
        <div class="bftl-right">
          <div class="total-price" style="fontSize: 16px;">合计: ¥{{getTotal.toFixed(2)}}</div>
          <!-- <div class="promotionPrice" style="marginTop: 4px;">已优惠: ¥110</div> -->
        </div>
      </div>
      <div class="bft-btn">下单</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { Dialog } from "vant";

export default {
  name: "cart",

  data() {
    return {
      // value: 1
    };
  },

  created() {},

  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    isCheck(id,isCheck) {
      console.log("是否选中", id,isCheck);
      this.$store.dispatch("isCheck", { id,isCheck: !isCheck});
    },
    allIsCheck() {
      console.log("是否全选中");
      console.log(this.isAllCheck)
      let allCheck = !this.isAllCheck
      this.$store.commit('allCheck',allCheck)
    },
    lessClick(id, e) {
      let count = e.target.nextSibling.children[0].value;
      count--;
      if (count < 1) {
        count = 1;
      }
      let data = {
        id,
        count,
      };
      this.$store.dispatch("jianCount", data);
    },
    moreClick(id, e) {
      let count = e.target.previousSibling.children[0].value;
      count++;
      let data = {
        id,
        count,
      };
      this.$store.dispatch("jiaCount", data);
    },
    inputChange(e) {
      console.log("change事件", e.target.value);
    },
    inputInput() {
      console.log("input事件");
    },
    deleteClick(id) {
      console.log("删除",id);
      Dialog.confirm({
        message: "要删除所选的商品？",
      })
        .then(() => {
          console.log("queding");
          this.$store.dispatch('deleteProduce',{id})
        })
        .catch(() => {
          // on cancel
          console.log("quxiao");
        });
    },
  },

  computed: {
    ...mapState({
      cartlist: (state) => state.cartlist,
    }),
    // ...mapGetters(["getTotal","totalCount","isAllCheck"]),
    getTotal() {
      // let total = 0
      let arr = this.cartlist.filter(item => {
        return item.isCheck == true
      })
      return arr.reduce((pre, next) => {
        return pre += next.count * next.price
      },0)
    },
    totalCount() {
      let arr = this.cartlist.filter(item => {
        return item.isCheck == true
      })
      return arr.reduce((pre, next) => {
        return pre += next.count
      }, 0)
    },
    isAllCheck() {
      return this.cartlist.every(item => {
        return item.isCheck == true
      })
    }
  },
  watch: {},
};
</script>



<style lang="stylus" scoped>
.van-button--square
  height 100%
.cart
  min-height 100%
  background #eee
  padding 44px 0 109px 0
  .cartHeader
    padding 0 15px
    line-height 44px
    display flex
    justify-content space-between
    align-items center
    background #fff
    position fixed
    left 0
    right 0
    top 0
    z-index 3
    .hLeft
      font-size 16px
    .hRight
      display flex
      .hr-coupon
        position relative
        span
          padding 2px 6px
          margin-right 15px
          color #ffffff
          font-size 10px
          background-image linear-gradient(-45deg, #FC865F 0, #FC625F 100%)
          &:after
            content ''
            width 8px
            height 8px
            position absolute
            top 50%
            transform translateY(-50%)
            right 8px
            border-radius 50%
            background #fff
            z-index 2
          &:before
            content ''
            width 8px
            height 8px
            position absolute
            top 50%
            left -6px
            transform translateY(-50%)
            background #fff
            z-index 2
            border-radius 50%
  .servicePolicy
    list-style none
    display flex
    justify-content space-between
    padding 0 15px
    height 35px
    background #eeeeee
    position relative
    z-index 1
    .sp-item
      display flex
      align-items center
      color #666
      .spi-icon
        width 5px
        height 5px
        background url('/img/servicePolicy.webp')
        background-size cover
        margin-right 3px
  .notice
    padding 0 15px
    background #fff8d8
    color #f48f18
    line-height 40px
  .defaultPage
    position fixed
    top 44px
    bottom 0
    left 0
    right 0
    background #f4f4f4
    display flex
    justify-content center
    align-items center
    .container
      display flex
      flex-direction column
      // justify-content center
      align-items center
      img
        width 124px
        height 124px
        margin-bottom 40px
  .cartListWrap
    .cartList
      .cl-item
        margin-bottom 10px
        .cartGood
          background #fff
          padding-left 43px
          .cg-top
            padding-top 10px
            display flex
            .timingTag
              padding 0 4px
              border 1px solid #F48F18
              color #F48F18
              border-radius 2px
              font-size 8px
            .finishTips
              margin 0 4px 0 6px
          .cg-bottom
            padding 12px 15px 0 0
            position relative
            height 110px
            // overflow hidden
            .checkbox
              position absolute
              left -33px
              top 33px
              width 20px
              height 20px
              line-height 20px
              background url('/checkbox.webp') no-repeat
              background-size cover
              background-position 0 -122px // 97px
              z-index 2
            .imgWrap
              float left
              background #eee
              width 86px
              height 86px
              margin-right 10px
              img
                width 100%
            .cnt
              margin-left 96px
              position relative
              height 86px
              .cnt-top
                font-size 14px
                span
                  color #f48f18
              .cnt-center
                display inline-block
                margin-top 5px
                padding 0 5px
                color #7F7F7F
                background #FAFAFA
                background 1px solid #EFEFEF
                border-radius 1px
                .cntc-icon
                  display inline-block
                  background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow_black_ic-b6eb851bba.png?imageView&type=webp') no-repeat
                  width 5px
                  height 9px
                  transform rotate(90deg)
                  background-size contain
                  background-position center
                  margin 5px 5px 0 6.5px
              .cnt-bottom
                position absolute
                bottom 0
                left 0
                line-height 20px
                .currentPrice
                  font-size 14px
                .oldPrice
                  text-decoration line-through
                  margin-left 4px
                  color #999
              .cnt-count
                background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/selnum-s47503e6ace-b4dda2963a.png?imageView&type=webp') no-repeat
                width 89px
                height 26px
                background-size 154.5px 500px
                background-position 0 -342px
                position absolute
                right 0
                bottom 0
                display flex
                .less
                  width 29.5px
                  height 26px
                .more
                  width 29.5px
                  height 26px
                .txtWrap
                  width 29px
                  line-height 26px
                  .tel
                    text-align center
                    width 100%
                    border none
                    outline none
                    height 100%
                    box-sizing border-box
                    background transparent
        .cartGroup
          background #fff
          .cg-Header
            display flex
            margin 0 15px
            padding 10px 0
            .promTip
              line-height 20px
              font-size 14px
              // width 454px
              flex 1
            .cart-tag
              background-color #FC865F
              background-image linear-gradient(-225deg, #FC865F 0, #FC625F 100%)
              border-radius 2px
              color #ffffff
              padding 0 4px
              margin 0 8px 0 2px
            .promBtn
              margin-left 15px
              color #DD1A21
              .u-icon
                display inline-block
                width 5px
                height 9px
                background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow_red_ic-8ef796200c.png?imageView&type=webp') no-repeat
                background-size contain
          .cg-Footer
            display flex
            margin 0 15px 0 43px
            padding 0 10px
            justify-content space-between
            line-height 28px
            box-sizing border-box
            align-items center
            background-image linear-gradient(-225deg, rgba(252, 134, 95, 0.05), rgba(252, 98, 95, 0.05) 100%)
            .icon
              width 5px
              height 9px
              background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow_black_ic-b6eb851bba.png?imageView&type=webp')
              background-size cover
  .billingFt
    position fixed
    left 0
    right 0
    bottom 49px
    display flex
    justify-content space-between
    height 59px
    background #fff
    z-index 9
    .bft-left
      padding 0 15px
      flex 1
      display flex
      justify-content space-between
      align-items center
      .bftl-left
        display flex
        justify-content space-between
        .bftll-icon
          width 20px
          height 20px
          line-height 20px
          background url('/checkbox.webp') no-repeat
          background-size cover
          background-position 0 -122px
          margin-right 8px
        .bftll-txt
          font-size 14px
      .bftl-right
        .total-price
          color #DD1A21
        .promotionPrice
          text-align right
          color #7F7F7F
    .bft-btn
      width 113px
      background #DD1A21
      line-height 59px
      text-align center
      font-size 16px
      color #fff
</style>