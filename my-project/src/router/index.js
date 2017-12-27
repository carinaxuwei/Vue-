import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index/index'
import music from '../page/music/music'
import scroller from '../page/scroller/index'
import detail from '../page/detail/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/scroller/:id',
      name: 'scroller',
      component: scroller,
      props: true
    },
    {
      path: '/detail/:sightId',
      name: 'detail',
      component: detail,
      props: true
    }
  ]
})
