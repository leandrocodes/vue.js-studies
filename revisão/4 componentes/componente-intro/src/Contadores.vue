<template>
    <div class="contadores">
        <contador v-for="c in 5" :key="c"></contador> 

    </div>
</template>

<script>
import Contador from './Contador'
export default {
    components:{
        Contador
    }
}
</script>

<style>

</style>
