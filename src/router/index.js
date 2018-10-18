import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import LiveBoard from '@/components/LiveBoard'
import LiveBoardItem from '@/components/LiveBoardItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/',
      name: 'LiveBoard',
      component: LiveBoard
    },
    {
      path: '/',
      name: 'LiveBoardItem',
      component: LiveBoardItem
    }
  ]
})
