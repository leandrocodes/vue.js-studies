<template>
    <div id="app">
        {{ titulo }}
        <button @click="titulo += '#'">Alterar</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                titulo: 'Leandro Viana'
            }
        },
    }
</script>

<style lang="css">
    #app{
        background-color: chocolate;

    }
</style>