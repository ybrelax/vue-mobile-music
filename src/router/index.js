import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/view/recommend/recommend.vue'
import rank from '@/view/rank/rank.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'recommend',
        component: recommend
    }, {
        path: '/recommend',
        name: 'recommend',
        component: recommend
    }, {
        path: '/rank',
        name: 'rank',
        component: rank
    }]
})