import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Posts from "./components/Posts.vue";
import NewPost from "./components/NewPost.vue";
import EditPost from "./components/EditPost.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Hello",
      component: HelloWorld
    },
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
