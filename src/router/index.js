import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/components/view/main'
import page2 from '@/components/view/page2'
import home from '../components/view/home'
import about from '../components/view/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: main
    },
    {
      path:"/page2",
      name:"page2",
      component:page2
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/about',
      component:about
    }
  ]
})
