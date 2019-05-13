<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <contador v-for="(item, index) in 5" :key="index"/>
    </div>
</template>

<script>

import Contador from './Contador.vue'

export default {
    components:{
        'contador': Contador
    }
}
</script>

<style>

</style>
