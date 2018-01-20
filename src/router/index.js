import Vue from 'vue'
import Router from 'vue-router'
import Home from 'containors/Home'
import List from 'containors/List'
import Collect from 'containors/Collect'
import Add from 'containors/Add'
import Update from 'containors/Update'
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
    {
      path: '/collect',
      component: Collect
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/update/:id', //this.$route.params.id
      component: Update
    },
    {//404路由
      path:'*',
      redirect:'/home'
    }
    ],
    linkActiveClass:'active'//设置选中样式
})
