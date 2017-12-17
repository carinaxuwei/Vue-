import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import './assets/style/style.css'
import './assets/iconfont/iconfont.css'
import VueSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueSwiper)
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
