import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import './assets/style/style.css'
import './assets/iconfont/iconfont.css'
import VueSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import store from './store/index'
Vue.config.productionTip = false
import VueLazyload from 'vue-lazyload'

/* eslint-disable no-new */
Vue.use(VueSwiper)
Vue.use(VueResource)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
  loading: 'http://img1.qunarzz.com/sight/p0/1604/1e/1e75f8e1af9fe81f90.img.jpg_140x140_b555f882.jpg',
  attempt: 1
})
FastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
