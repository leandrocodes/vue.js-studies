<template>
	<div class="citacoes">
		<span>
			<button @click="numero--">&lt;</button>
			<button @click="numero++">&gt;</button>
		</span>
		<!-- melhor do que passar a prop por aqui (:citacao='citacoes[indice]')-->
		<citacao>
			<p slot="autor">Autor: </p>
			<p slot="autor">{{citacoes[indice].autor}}</p>
			<p>{{citacoes[indice].texto}}</p>
			<p slot="fonte">{{citacoes[indice].fonte}}</p>
		</citacao>
	</div>
</template>

<script>
import citacao from "./Citacao";
export default {
	data() {
		return {
			numero: 0,
			citacoes: [
				{
					fonte: "Jornal do Empreendedor",
					texto:
						"Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
					autor: "Margaret Mead"
				},
				{
					fonte: "Frases de Mãe",
					texto: "Isso não é um quarto, é um chiqueiro.",
					autor: "Roberta"
				},
				{
					fonte: "Frases de Pai",
					texto: "Vou contar até 3! 1, 2, 2...",
					autor: "Gustavo"
				}
			]
		};
	},
	computed: {
		indice() {
			return Math.abs(this.numero % 3);
		}
	},
	components: {
		citacao
	}
};
</script>

<style scoped>
.citacoes {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
