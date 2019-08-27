import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contadorString', (string)=>{
	return string.split(' ').map(p => `${p} (${p.length})`).join(', ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
