<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr />
        <router-view></router-view>
        <button sucesso @click="irInicio">Voltar</button>
    </div>
</template>

<script>
export default {

    /*     data() {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        $route(to) {
            this.id = to.params.id
        }
    }, */
    methods: {
        irInicio() {
            this.$router.push('/')
        }
    }
}
</script>

<style>
</style>