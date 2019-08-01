import Vue from 'vue'

export default new Vue({
    methods:{
        setUsuario(usuario){
            this.$emit('usuarioSelecionado', usuario)
        },
        onUsuario(callback){
            this.$on('usuarioSelecionado', callback)
        }
    }
})