import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import './assets/css/animate.css'
import VueLazyload from 'vue-lazyload'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false

Vue.use(VueLazyload)
Vue.use(ViewUI)
Vue.use(Vant)

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
