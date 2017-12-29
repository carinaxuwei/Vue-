import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import detail from '@/pages/detail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})
