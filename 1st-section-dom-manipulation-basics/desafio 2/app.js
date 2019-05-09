new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert('Button alertando');
        },
        store(){
           this.valor = event.target.value
        }
    }
})
