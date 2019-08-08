import Vue from 'vue'
import Router from 'vue-router'
import Landing  from  './views/Landing.vue'
import SignIn   from  './views/SignIn.vue'
import SignUp   from  './views/SignUp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
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
