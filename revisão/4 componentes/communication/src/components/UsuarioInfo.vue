<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: {{ inverterNome() }} </p>
        <p>Idade: {{ usuarioIdade }} </p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar</button>
    </div>
</template>

<script>
export default {
    props:{
        usuarioNome: {
            type: String,
            required: true
        },
        usuarioIdade:{
            type: Number,
            required: true
        },
        reiniciarFn: Function
    },
    methods: {
        inverterNome(){
            return this.usuarioNome.split('').reverse().join('')
        },
        reiniciarNome(){
            //this.usuarioNome = 'Pedro'
            this.$emit('nomeMudou', 'Pedro')
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
