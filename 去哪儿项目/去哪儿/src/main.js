import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/base/reset.css'
import './assets/style/base/border.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=3d42be6de3f81a4c323fe49bb6430b3c/b3b7d0a20cf431adfa9e4f204336acaf2edd985e.jpg',
  loading: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=3d42be6de3f81a4c323fe49bb6430b3c/b3b7d0a20cf431adfa9e4f204336acaf2edd985e.jpg',
  attempt: 1
})
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
