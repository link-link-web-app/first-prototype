import Vue from 'vue'
import Router from 'vue-router'
import Landing  from  './views/Landing.vue'
import SignIn   from  './views/SignIn.vue'
import SignUp   from  './views/SignUp.vue'

Vue.use(Router)

const DEFAULT_TITLE = "LINK LINK Web Application";

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
      meta: {
        title: "LINK LINK Event Map"
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
});

router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
})

export default router;
