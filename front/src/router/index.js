import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/pages/home'
import Signin from '@/pages/signin'
import Signup from '@/pages/signup'

Vue.use(Router)
Vue.use(VueResource);

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
    {
      path: '/signup/',
      component: Signup
    },
  ]
})
