<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr />
        <p>
            <strong>Código</strong>
            {{id}}
        </p>
        <button sucesso @click="irInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number 
        }
    },
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