<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar v-if="!$route.meta.isShowTabBar" :count="totalCount" :isShow="Boolean(cartlist.length)" />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    TabBar: () => import("./components/common/tabbar/tabbar"),
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

<style>
@import "./assets/css/reset.css";
html,
body,
#app {
  height: 100%;
}
.detailHtml p img {
  width: 100%;
  vertical-align: middle;
}
</style>
