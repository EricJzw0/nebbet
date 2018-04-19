import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Signin from '@/pages/signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/signin/',
      component: Signin
    },

  ]
})
