import Vue from 'vue'

export default new Vue({
    methods:{
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        qndIdadeMudar(callback){
            this.$on('idadeMudou', callback)
        }
    }
})