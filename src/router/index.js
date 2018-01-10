import Vue from 'vue'
import Router from 'vue-router'
import Home from 'containors/Home'
import List from 'containors/List'

Vue.use(Router);//router是一个vue插件 需要use一下才可以使用

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {//404路由
      path:'*',
      redirect:'/home'
    }
    ]
})
