import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

import './main.scss';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// TODO: Look for any missing things in the app @ https://github.com/adventurerlog/lbry-realm-client/tree/33abf5e638a535d3d5e6352b65fbc258a5c01dbd
