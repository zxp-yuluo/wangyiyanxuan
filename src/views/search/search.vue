<template>
  <div class="search">
    <div class="header">
      <div class="h-search">
        <div class="h-s-icon"></div>
        <input
          type="search"
          class="text"
          :placeholder="defaultKeyword.keyword"
          v-model="keyword"
          @input="hangleChange"
        />
        <div class="cha" v-show="keyword" @click="clearClick"></div>
      </div>
      <div class="esc" @click="quxiao">取消</div>
    </div>

    <div class="nav" v-if="!searchList.length">
      <div class="nav-header">热门搜索</div>
      <ul class="nav-list">
        <li
          class="nav-item"
          :class="{active: item.algSort}"
          v-for="(item,index) in hotKeywords"
          :key="index"
        >{{item.keyword}}</li>
      </ul>
    </div>

    <ul v-else class="searchList">
      <li class="searchItem" v-for="(item,index) in searchList" :key="index">
        <div class="left">{{item}}</div>

        <div class="right"></div>
      </li>
    </ul>
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
import { getSearch, getSearchList } from "../../ajax/index";

export default {
  name: "search",

  data() {
    return {
      keyword: "",
      defaultKeyword: {},
      defaultKeywords: [],
      hotKeywords: [],
      searchList: []
    };
  },
  created() {
    this.getSearchData();
    
  },
  mounted() {
    
  },

  methods: {
    async getSearchData() {
      const result = await getSearch();
      console.log(result.data);
      this.defaultKeyword = result.data.defaultKeyword;
      this.defaultKeywords = result.data.defaultKeywords;
      this.hotKeywords = result.data.hotKeywordVOList;
    },
    async getSearchListData(keywordPrefix) {
      const result = await getSearchList(keywordPrefix);
      console.log(result);
      this.searchList = result.data
    },
    hangleChange: debounce(function () {
      this.getSearchListData(this.keyword);
    },500),

    quxiao() {
      this.$router.back();
    },
    clearClick() {
      this.keyword = ''
      this.searchList = []
    }
  },

  computed: {

  },

  watch: {

  },
};
</script>

<style lang="stylus" scoped>
.search
  background #fff
  .header
    height 44px
    padding 0 15px
    display flex
    align-items center
    .h-search
      flex 1
      background #f4f4f4
      height 28px
      border-radius 4px
      padding 0 10px
      position relative
      display flex
      align-items center
      .cha
        width 25px
        height 25px
        background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/clearIpt-2154f24504.png') no-repeat
        background-size cover
      .h-s-icon
        width 14px
        height 14px
        background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp') no-repeat
        background-size cover
      .text
        flex 1
        height 20px
        font-size 14px
        line-height 20px
        margin-left 8px
        color #999
        border none
        outline none
        background transparent
        position relative
    .esc
      margin-left 15px
      font-size 14px
  .nav
    padding 15px
    padding-top 0
    margin-bottom 10px
    .nav-header
      height 45px
      line-height 45px
      font-size 16px
      color #666
    .nav-list
      display flex
      flex-wrap wrap
      .nav-item
        border 1px solid #999
        border-radius 4px
        padding 0 7.5px
        margin-right 16px
        margin-bottom 16px
        line-height 23px
        &.active
          border-color #DD1A21
          color #DD1A21
  .searchList
    .searchItem
      padding 0 15px
      display flex
      justify-content space-between
      align-items center
      height 45px
      .left
        flex 1
        font-size 16px
      .right
        width 25px
        height 25px
        background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp') no-repeat
        background-size cover
</style>