# pdd

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

------

# 使用vue-cli初始化项目

```shell
vue create 项目名
```

# 初始化git远程仓库

- 在GitHub上创建一个空仓库

![](media\1.png)

**点击new**

![](media\2.png)

![](media\3.png)

**创建完成根据下列提示连接仓库**

![](media\4.png)

我们是创建一个新的仓库，所以用第一个

打开项目文件夹 shift + 右键，点击菜单中的 '在此处打开Powershell'

由于使用vue-cli初始化的项目``` git init git add README.md```不用执行。

依次执行（**注释这种东西不要太认真，对就对了，错就当个笑话过了**）

```shell
# 将更新的内容从工作目录添加到暂存区
git add . 
# 把暂存区的内容提交到本地仓库
git commit -m '提交说明'
# 连接远程仓库地址
git remote add origin git@github.com:zxp-javascript/wyyx.git
# 把本地仓库的代码提交到远程仓库
git push -u origin master
```

# 下面是一些准备工作(适配、请求)

## 适配(第三方库适配[postcss-px2rem、lib-flexible])

1. 先下载postcss-px2rem和lib-flexible(安装依赖)

```shell
yarn add postcss-px2rem lib-flexible --save
```

2. 配置说明
   - 在项目入口文件 main.js 里引入 lib-flexible，flexible会自动根据情况设置rem值的大小
   - 创建一个vue.config.js，在vue.config.js中添加配置

```JS
// main.js
import 'lib-flexible/flexible.js'
```

```js
// vue.config.js
const px2rem = require('postcss-px2rem')
// 配置 postcss-px2rem
const postcss = px2rem({
    remUnit: 37.5    // 基准大小 baseSize，需要和rem.js中单位rem值占比一样(就是设计稿10等分后的值)
})
module.exports = {
  css: {
    // 添加 postcss 配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}
```

3. 开发阶段为了方便，把代码检查关掉。

```js
// vue.config.js
module.exports = {
  lintOnSave: false,  // 关闭eslint
  css: {
    // 添加 postcss 配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}
```

## axios

1. 安装依赖

```shell
yarn add axios
```

2. 创建一个ajax文件夹专门用来发请求
3. ajax中建一个index.js，请求全写在这里。建一个ajax.js，引用axios
4. 需要发请求时，只要引入index.js 就可以使用了

```js
// ajax.js
import axios from 'axios'
const instance = axios.create({
  baseURL: '',
});

// Add a request interceptor  添加请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent 在发送请求之前做点什么
  return config;
}, function (error) {
  // Do something with request error  请求错误时做点什么
  return Promise.reject(error);
});

// Add a response interceptor   添加响应拦截器
instance.interceptors.response.use(function (response) {
  // Do something with response data  对响应数据进行处理
  return response.data;
}, function (error) {
  // Do something with response error   响应错误时做点什么
  return Promise.reject(error);
}); 

export default instance
```

```js
// index.js

import ajax from './ajax'

export const getTest = () => ajax({
  url: 'localhost:3000'
})
```

# 配置一级路由(首页、分类、值得买、购物车、个人)

配置路由，创建对应文件

```
const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import('../views/home/home')
  },
  {
    path: "/category",
    name: "category",
    component: () => import('../views/category/category')
  },
  {
    path: "/deserve",
    name: "deserve",
    component: () => import('../views/deserve/deserve')
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import('../views/cart/cart')
  },
  {
    path: "/profiles",
    name: "profiles",
    component: () => import('../views/profiles/profiles')
  },
  {
    path: "/",
    redirect: "/home"
  }
]
```

# home页面

## 简单封装个tabbar

```vue
// tabbar.vue  图标使用的是背景图片，所以没有继续抽取
<template>
  <div class="tabbar">
    <router-link class="tabbar-item" to="/home">
      <div class="icon home"></div>
      <div class="text">首页</div>
    </router-link>
    <router-link class="tabbar-item" to="/category">
      <div class="icon category"></div>
      <div class="text">分类</div>
    </router-link>
    <router-link class="tabbar-item" to="/deserve">
      <div class="icon deserve"></div>
      <div class="text">值得买</div>
    </router-link>
    <router-link class="tabbar-item" to="/cart">
      <div class="icon cart"></div>
      <div class="text">购物车</div>
    </router-link>
    <router-link class="tabbar-item" to="/profiles">
      <div class="icon profiles"></div>
      <div class="text">个人</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
.tabbar
  position fixed
  bottom 0
  left 0
  right 0
  height 50px
  display flex
  align-items center
  .tabbar-item
    flex 1
    height 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    &.router-link-active
      .text
        color #DD1A21;
      .icon
        &.home
          background-position-y -100px
        &.category
          background-position-y -50px
        &.deserve
          background-position-y -150px
        &.profiles
          background-position-y -200px
        &.cart
          background-position-y 0px
    .text
      color #999
      font-size 13px
    .icon
      width 20px
      height 20px
      margin-bottom 6px
      background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp') no-repeat
      background-size cover
      
      &.home
        background-position-y -125px
      
      &.category
        background-position-y -75px
      
      &.deserve
        background-position-y -175px
      
      &.cart
        background-position-y -25px
      
      &.profiles
        background-position-y -225px
</style>
```

## home页面的导航栏



