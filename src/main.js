import Vue from 'vue'
import App from './App.vue'

// Design Dependencies
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/index.sass'

// Functional Dependencies
import router from './router'
import store from './store'

// Load Vue Bootstrap
Vue.use(BootstrapVue)

// Disable Development Mode
Vue.config.productionTip = false

// Mount vue on 'app' DOM
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
