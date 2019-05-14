import Vue from 'vue'

export default new Vue({
    methods:{
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        quandoIdademudar(callback){
            this.$on('idadeMudou', callback)
        }
    }
})