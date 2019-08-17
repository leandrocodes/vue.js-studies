<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{usuarioLogado}}</p>
		<p>{{ CPF | filtroCPF | inverter }}</p>
		<input type="text" :value="CPF | filtroCPF | inverter">
		<hr>
		<Frutas></Frutas>
		
		<hr>
		
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta"> {{ fruta }} </li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add">
		</div>
	</div>
</template>

<script>
import Frutas from './Frutas'
import frutasMixins from './frutasMixins'
import usuarioMixins from './usuarioMixins'
export default {
	mixins:[frutasMixins, usuarioMixins],
	filters:{
		filtroCPF(valor){
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data(){
		return{
			CPF: '00100200304'
		}
    },
	created(){
		// eslint-disable-next-line no-console
        console.log('created app.vue')
	},
	components:{
		Frutas
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
input{
	font-size: 2.5rem;
}
</style>
