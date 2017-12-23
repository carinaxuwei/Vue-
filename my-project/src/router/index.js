import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index/index'
import music from '../page/music/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/music',
      name: 'music',
      component: music
    }
  ]
})
