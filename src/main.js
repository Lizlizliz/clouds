// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //vue脚手架，帮我们将组件封装成.vue文件
import App from './App'
import router from './router'
import './assets/index.scss' //公用样式 
import './assets/font-awesome-4.7.0/scss/font-awesome.scss'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)//引用这个组件后页面会多一个全局的变量scroller
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
