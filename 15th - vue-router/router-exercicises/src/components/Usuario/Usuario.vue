<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr />
        <button sucesso @click="irInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        irInicio(){
            this.$router.push('/')
        }
    }
}
</script>

<style>
</style>