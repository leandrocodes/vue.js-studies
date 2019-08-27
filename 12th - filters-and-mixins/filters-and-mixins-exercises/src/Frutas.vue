<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta"> {{ fruta }} </li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
import frutasMixins from './frutasMixins'
import usuarioMixins from './usuarioMixins'
export default {
    mixins:[frutasMixins, usuarioMixins],
	created(){
		// eslint-disable-next-line no-console
        console.log('created frutas.vue')
	}
}
</script>

<style>

</style>