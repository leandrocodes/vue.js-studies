// main.js

import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'

Vue.use(VueFire)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')