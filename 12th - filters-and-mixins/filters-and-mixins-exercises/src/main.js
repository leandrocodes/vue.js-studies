import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', (valor)=>{
	return valor.split('').reverse().join('')
})

Vue.mixin({
	data(){
		return{
			global: 'Usando Mixin Global'
		}
	},
	created(){
		console.log('created mixin global')
	}
})

new Vue({
	render: h => h(App),
	created(){
		console.log('created vue instance')
	}

}).$mount('#app')
