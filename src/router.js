import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tag from './views/Tag.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tag/:tagname',
      name: 'tag',
      component: Tag,
      props: true ,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/artikel/create',
      name: 'createArtikel',
      component: () => import(/* webpackChunkName: "about" */ './views/Insert.vue'),
    },
    {
      path: '/artikel/:artikel_id',
      name: 'content',
      props: true ,
      component: () => import(/* webpackChunkName: "about" */ './views/Content.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
