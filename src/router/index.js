import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 使用vue-Roter
Vue.use(Router)

// 使用vue-swiper
Vue.use(VueAwesomeSwiper);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
