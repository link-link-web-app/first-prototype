import Vue from 'vue'
import Router from 'vue-router'
import Discover  from  './windows/Discover.vue'
import SignIn   from  './windows/SignIn.vue'
import SignUp   from  './windows/SignUp.vue'

// for testing purposes
import Posts from './components/test-suite/components/Posts.vue'
import NewPost from './components/test-suite/components/NewPost.vue'
import EditPost from './components/test-suite/components/EditPost.vue'

//
Vue.use(Router)

const DEFAULT_TITLE = 'LINK LINK Web Application'

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "discover",
      component: Discover,
      meta: {
        title: "Dashboard"
      }
    },
    {
      path: "/signin",
      name: "Sign In",
      component: SignIn
    },
    {
      path: "/signup",
      name: "Sign Up",
      component: SignUp
    },
    // for testing purposes
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/posts/new",
      name: "NewPost", // don't mess up names again jeez
      component: NewPost
    },
    {
      path: "/posts/:id",
      name: "EditPost",
      component: EditPost
    }
  ]
});

router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
})

export default router
