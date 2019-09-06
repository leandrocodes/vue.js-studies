<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr />
        <p> <strong>Código</strong> {{id}}</p>
        <button sucesso @click="irInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id
        }
    },
    methods: {
        irInicio(){
            this.$router.push('/')
        }
    },
    watch: {
        $route(to){
            this.id = to.params.id
        }
    }
}
</script>

<style>
</style>