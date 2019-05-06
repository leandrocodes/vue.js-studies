new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
    },
    computed: {
        hasResult(){
            return this.playerLife === 0 || this.monsterLife === 0
        }
    },
    methods: {

    },
    watch: {
        
    },
})