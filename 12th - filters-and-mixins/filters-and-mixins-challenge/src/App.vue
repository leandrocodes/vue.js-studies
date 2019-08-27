<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
		
		
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{frase | espacoPorVirgula}}</p>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<div class="contadorDeString">
			<p>{{"Leandro Viana Martins" | contadorString}}</p>
		</div>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{espacoPorVirgulaComputada}}</p>
		<p>{{contadorStringComputada}}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
export default {
	data(){
		return{
			frase: 'Leandro Viana Martins',
			fraseComputada: 'Leandro Viana Martins',
		}
	},
	filters:{
		espacoPorVirgula(str){
			let newString = str.replace(/ /g, ", ");
			return newString
		}
	},
	computed:{
		espacoPorVirgulaComputada(){
			return this.fraseComputada.replace(/ /g, ", ");
		},
		contadorStringComputada(){
			return this.fraseComputada.split(' ').map(p => `${p} (${p.length})`).join(', ')
		}
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
</style>
