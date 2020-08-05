<template>
  <div class="pubuliu" ref="pubuliu">
    <div class="lookList" ref="lookList" :style="{height: height + 'px'}">
      <div class="listItem" v-for="(item, index) in newPubuliuData" :key="index">
        <div class="lookBlock">
          <div class="imgWrap">
            <img :src="item.picUrl" alt @load="imgload" />
          </div>
          <div class="lookDesc">{{item.title}}</div>
          <div class="lookLine"></div>
          <div class="lookDetail">
            <div class="userInfo">
              <img :src="item.avatar" alt />
              <span class="userName">{{item.nickname}}</span>
            </div>
            <div class="upArea">
              <img
                src="data:image/png;base64,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"
                alt
              />
              <div class="upText">{{item.readCount | qian}}</div>
            </div>
          </div>
          <div class="singleGoods" v-if="item.buyNow">
            <div class="goodsname">{{item.buyNow.itemName}}</div>
            <div class="goBuy">
              <span>去购买</span>
              <img
                src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF
FmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0w
TXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRh
LyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2
LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3Jn
LzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0i
IiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRw
Oi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMu
YWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNv
bS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9z
VHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0Mg
KE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAzLTA2VDE2OjA0OjM2KzA4OjAwIiB4
bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNC0yM1QxMDo1MDoyOSswODowMCIgeG1wOk1ldGFkYXRhRGF0
ZT0iMjAxOS0wNC0yM1QxMDo1MDoyOSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rv
c2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIu
MSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMGQ3ZWRiMS0xMmUzLTRkOWEtYWI3Zi1hYTE1
ODE0MTcwMjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTBkN2VkYjEtMTJlMy00ZDlhLWFi
N2YtYWExNTgxNDE3MDIxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTBkN2Vk
YjEtMTJlMy00ZDlhLWFiN2YtYWExNTgxNDE3MDIxIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2Vx
PiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlp
ZDoxMGQ3ZWRiMS0xMmUzLTRkOWEtYWI3Zi1hYTE1ODE0MTcwMjEiIHN0RXZ0OndoZW49IjIwMTkt
MDMtMDZUMTY6MDQ6MzYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hv
cCBDQyAoTWFjaW50b3NoKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVz
Y3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5r+vIf
AAAAq0lEQVQokY3QsWoCQRAG4O+2TSFod4LgFmnFRxCSB0iXdxTfQPEBLNKK4HYXUqUNSXMW5kTw
3HWqKb75Z5jqWE+XGOA9NunbnQqY4BXrNI7DHHzDAfMcDrFJn1iUcIBHcOiaEg7XUzlctW17c3ga
xxpbPOMDL72wB29DrzrXL37++6d7q0fYYIY9FjeJfSg26Ss8grh6Tw5dYAlBdaynRdQlrkqog3/Y
5RCcAMqEXmta9JloAAAAAElFTkSuQmCC"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function debounce(func, wait = 1000) {
  let timeout;
  return function (event) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.call(this, event);
    }, wait);
  };
}
// import BScroll from 'better-scroll'
import { getDesevePuBuLiu } from "../../ajax/index";

export default {
  name: "pubuliu",
  data() {
    return {
      height: "",
      page: 1,
      size: 5,
      pubuliuData: [],
    };
  },
  created() {
    this.getDesevePuBuLiuData(this.page, this.size);
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.pubuliu, {
        scrollY: true,
        click: true,
      });
    },
    // imgload() {
    //   console.log(this.$refs.lookList)
    //   this.asd();
    // },
    imgload: debounce(function() {
      this.asd()
    },10),
    asd() {
      // 创建一个数组，存放图片高度
      let heightArr = [];
      // 获取所有item
      let items = Array.from(this.$refs.lookList.children);
      // console.log(items);
      // 循环遍历所有图片，判断如果是第一排不需要定位，直接把高度存放数组中。其他使用定位处理
      items.forEach((item, index) => {
        if (index < 2) {
          heightArr.push(item.offsetHeight);
        } else {
          // 最小图片的高度
          // console.log(heightArr);
          let minHeight = Math.min(...heightArr);
          // 数组最小的值
          var minBoxIndex = heightArr.indexOf(minHeight);
          item.style.position = "absolute";
          if (minBoxIndex == 0) {
            item.style.left = "0px";
          } else if (minBoxIndex == 1) {
            item.style.left = "182px";
          }
          item.style.top = minHeight + "px";
          heightArr[minBoxIndex] += item.offsetHeight;
          this.height = Math.max(...heightArr);
        }
      });
    },
    async getDesevePuBuLiuData(page, size) {
      const result = await getDesevePuBuLiu(page, size);
      this.page++;
      // console.log(result);
      this.pubuliuData.push(...result.data.result);
    },
    getScroll() {
      if (this.height - document.documentElement.scrollTop < 210) {
        this.getDesevePuBuLiuData(this.page, this.size);
      }
    },
    beforeDestroy() {
      console.log("pubuliu");
      window.removeEventListener("scroll", this.getScroll);
    },
  },
  computed: {
    newPubuliuData() {
      let arr = [];
      let data = this.pubuliuData;
      data.forEach((item, index) => {
        arr.push(...item.topics);
      });
      return arr;
    },
  },
  filters: {
    qian(value) {
      if (value > 1000) {
        return Math.floor(value / 1000) + "k";
      } else {
        return value;
      }
    },
  },
  watch: {

  },
};
</script>

<style lang="stylus" scoped>
.pubuliu
  padding-bottom 50px
  .lookList
    // margin 0 10px
    margin-top 15px
    // overflow hidden
    position relative
    background #eee
    .listItem
      float left
      margin-left 10px
      &:nth-of-type(2)
        margin-left 10px
      .lookBlock
        margin-bottom 10px
        border-radius 7px
        overflow hidden
        width 172.5px
        background #fff
        .imgWrap
          img
            vertical-align top
            width 100%
        .lookDesc
          margin 0 8px
          margin-top 9px
        .lookLine
          height 8px
        .lookDetail
          font-size 9px
          padding 8.5px 8px 12px 8px
          display flex
          justify-content space-between
          align-items center
          .userInfo
            display flex
            align-items center
            img
              width 24px
              height 24px
              border-radius 50%
            .userName
              color #7f7f7f
              font-size 12px
              margin-left 4px
              max-width 80px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
          .upArea
            display flex
            align-items center
            img
              width 16px
              height 16px
            .upText
              color #7f7f7f
              font-size 12px
              margin-left 1px
        .singleGoods
          border-top 1px solid #d9d9d9
          padding 10px 0
          width 152.5px
          margin 0 auto
          display flex
          justify-content space-between
          align-items center
          .goodsname
            font-size 12px
            width 103.5px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          .goBuy
            color #DD1A21
            display flex
            align-items center
            img
              margin-left 2px
              width 5px
              height 9px
</style>