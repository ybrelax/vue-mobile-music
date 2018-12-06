import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/view/recommend/recommend.vue'
import rank from '@/view/rank/rank.vue'
import singer from '@/view/singer/singer.vue'
import detail from '@/view/detail/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: recommend
  }, {
    path: '/recommend',
    name: 'recommend',
    component: recommend
  }, {
    path: '/rank',
    name: 'rank',
    component: rank
  }, {
    path: '/singer',
    name: 'singer',
    component: singer
  }, {
    path: '/detail',
    name: 'detail',
    component: detail
  }]
})
