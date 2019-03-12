import Vue from 'vue'
import Router from 'vue-router'
import Index from 'com/index'
import Login from 'com/login'
import List from 'com/list'
import Detail from 'com/detail'
import Home from 'com/home'
import Actor from 'com/actor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/login',
      name:'',
      component:Login
    },
    {
      path:'/list/:id',
      name:'list',
      component:List
    },
    {
      path:'/detail/:num',
      name:'detail',
      component:Detail
    },
    {
      path:'/home',
      name:'page-navbar',
      component:Home
    },
    {
      path:'/actor/:id',
      name:'actor',
      component:Actor
    }
  ]
})
