<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>{{usuarioIdade}}</p>
        <button @click="mudarIdade">++</button>
    </div>
</template>

<script>
export default {
    props:{
        usuarioIdade: {
            type: Number,
            required: true
        }
    },
    methods: {
        mudarIdade() {
            var idadetxt = this.usuarioIdade++
            this.$emit('idadeMudou', idadetxt)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
