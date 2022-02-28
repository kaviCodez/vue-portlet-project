import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


import Vue from 'vue/dist/vue.common';
import App from '../App.vue'
import VueRouter from 'vue-router'
//Component imports

export default function main({portletNamespace, contextPath, portletElementId}) {

  Vue.config.productionTip = false

  Vue.use(VueRouter)

  const router = new VueRouter({
      routes: [
          {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
      ]
  })
  new Vue({
    el: `#${portletElementId}`,
    render: h => h(App),
    router
  })
}


