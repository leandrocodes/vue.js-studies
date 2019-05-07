new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife === 0 || this.monsterLife === 0
        }
    },
    methods: {
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        },
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        damage(atr, min, max, especial, source, target, cls) {
            const plus = especial ? 7 : 0
            const damage = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - damage, 0)
            this.registerLog(`${source} attacked ${target} with ${damage} damage points.`, cls)
        },
        attack(special) {
            this.damage('monsterLife', 1, 10, special, 'Player', 'Monster', 'player')
            if (this.monsterLife > 0) {
                this.damage('playerLife', 5, 12, false, 'Monster', 'Player', 'monster')
            }
        },
        heal(min, max) {
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Player heald with ${heal} HP.`, 'player')
        },
        healAndAttack() {
            this.heal(10, 12)
            this.damage('playerLife', 5, 12, false, 'Monster', 'Player', 'monster')
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    },
})