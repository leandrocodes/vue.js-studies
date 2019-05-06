new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
    },
    computed: {
        hasResult(){
            return this.playerLife === 0 || this.monsterLife === 0
        }
    },
    methods: {
        startGame(){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        damage(atr, min, max, especial){
            const plus  = especial ? 5 : 0
            const damage = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - damage, 0)
        },
            attack(special){
            this.damage('playerLife', 7, 12, false)
            this.damage('monsterLife', 5, 10, special)
        }
    },
    watch: {
        hasResult(value){
            if(value) this.running = false
        }
    },
})