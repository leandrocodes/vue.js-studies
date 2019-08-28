<template>
    <div id="app" class="container-fluid">
        <h1>Animações</h1>
        <hr />
        <b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>

        <transition name="fade" appear>
            <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
        </transition>

        <transition name="slide" type="animation" appear>
            <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
        </transition>

        <transition enter-active-class="animated bounce" leave-active-class="animated shake" appear>
            <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
        </transition>
        <hr />

        <b-select v-model="tipoAnim" class="mb-4">
            <option value="fade">Fade</option>
            <option value="slide">slide</option>
        </b-select>

        <transition :name="tipoAnim" mode="out-in">
            <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
            <b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
        </transition>

        <hr />
        <b-button variant="primary" class="mb-4" @click="exibir2 = !exibir2">Alternar</b-button>
        <transition
			:css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled"
        >
            <div v-if="exibir2" class="caixa"></div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Mensagem de Usuário Aqui!",
            exibir: false,
            exibir2: true,
			tipoAnim: "fade",
			larguraBase: 0
        }
	},
	methods:{
		animar(el, done, negativo){
			let rodada = 1
			const temp = setInterval(()=>{
				const novaLargura = this.larguraBase + (negatio ? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30){
					clearInterval(temp)
					done()
				}
			}, 20)
		},
		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done){
			this.animar(el, done, false)
		},
		afterEnter(el){
			console.log('after enter')
		},
		enterCancelled(el){
			console.log('enter cancelled')
		},
		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done){
			this.animar(el, done, true)
		},
		afterLeave(el){
			console.log('after leave')
		},
		leaveCancelled(el){
			console.log('leave cancelled')
		},
	}
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 1.5rem;
}
.caixa {
    height: 100px;
	width: 300px;
    margin: 30px auto;
    background-color: #2c3e50;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}

@keyframes slide-in {
    from {
        transform: translateY(40px);
    }
    to {
        transform: translateY(0px);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(40px);
    }
}

.slide-enter-active {
    animation: slide-in 2s ease;
    transition: opacity 2s;
}

.slide-leave-active {
    animation: slide-out 2s ease;
    transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
}
</style>
