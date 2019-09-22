new Vue({
    el:"#desafio",
    data:{
        nome: 'Leandro Viana',
        idade: 20,
        img: 'https://images.pexels.com/photos/2037796/pexels-photo-2037796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        valor: 'value="leandro"'
    },
    methods: {
        rrandom(){
            return Math.random();
        }
    },
})