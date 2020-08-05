import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    component: () => import('../views/home/home'),
    children: [
      {
        path: '',
        component: () => import('../views/home/homeItem.vue')
      },
      {
        path: 'item',
        component: () => import('../views/home/item.vue')
      }
    ]
  },
  {
    path: "/category",
    component: () => import('../views/category/category'),
    children: [
      {
        path: 'cateList',
        name: 'cateList',
        component: () => import('../views/category/cateList')
      },
      {
        path: "",
        redirect: "cateList"
      }
    ]
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
    path: "/search",
    name: "search",
    component: () => import('../views/search/search')
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/login/login'),
    meta: {
      isShowTabBar: true
    }
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import('../views/detail/detail'),
    meta: {
      isShowTabBar: true
    }
  },
  {
    path: "/",
    redirect: "/home"
  }
]

const router = new VueRouter({
  routes
})

export default router
