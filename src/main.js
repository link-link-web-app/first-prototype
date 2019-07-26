import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/index.sass'

import * as VueGoogleMaps from "vue2-google-maps"
import router from './router'
import store from './store'

// Load Google Maps API
Vue.use( VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: "places"   // Allows autocomplete for "places" when searching
  }
})

// Use Vue Bootstrap
Vue.use(BootstrapVue)

// Disable Development Mode
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
