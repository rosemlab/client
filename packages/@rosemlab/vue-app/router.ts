import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Greeting from './views/Greeting.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exactActive',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        splashScreen: Greeting,
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () =>
          import(/* webpackChunkName: "about" */ './views/About.vue'),
        splashScreen: Greeting,
      },
    },
  ],
})
