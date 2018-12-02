import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})
