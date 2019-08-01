import Vue from 'vue'

export default new Vue({
    methods:{
        selectUser(usuario){
            this.$emit('selectedUser', usuario)
        },
        getUsuario(callback){
            this.$on('selectedUser', callback)
        }
    }
})