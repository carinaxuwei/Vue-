import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/style.css'
import './assets/iconfont/iconfont.css'
import VueSwiper from 'vue-awesome-swiper'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueSwiper)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
