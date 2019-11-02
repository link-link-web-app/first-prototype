import Vue from 'vue'
import Router from 'vue-router'
import Discover  from  './windows/Discover.vue'
import SignIn   from  './windows/SignIn.vue'
import SignUp   from  './windows/SignUp.vue'

Vue.use(Router)

const DEFAULT_TITLE = 'LINK LINK Web Application'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'discover',
      component: Discover,
      meta: {
      title: 'Dashboard',
      }
    },
    {
      path: '/signin',
      name: 'Sign In',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: SignUp
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
})

export default router
