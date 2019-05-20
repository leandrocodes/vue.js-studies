<template>
	<div>
		<rotulo nome="Nome:">
			<input type="text" :value="value.nome" @input="alterarNome">
		</rotulo>
		<rotulo nome="Sobrenome:">
			<input type="text" :value="value.sobrenome" @input="alterarSobrenome">
		</rotulo>
	</div>
</template>

<script>
import rotulo from "./Rotulo";
export default {
	props: {
		value: {
			type: Object,
			required: true
		}
	},
	components: { rotulo },
	methods: {
		alterarNome($event) {
			this.$emit("input", {
				nome: $event.target.value,
				sobrenome: this.value.sobrenome
			});
		},
		alterarSobrenome($event) {
			this.$emit("input", {
				nome: this.value.nome,
				sobrenome: $event.target.value
			});
		}
	}
};
</script>
<style>
</style>
