import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/Home',
      name:'Home',
      component: Home
    }
  ]
})
