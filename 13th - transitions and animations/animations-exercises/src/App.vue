<template>
    <div id="app" class="container-fluid">
        <h1>Animações</h1>
        <hr />
        <b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>

        <transition name="fade">
            <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
        </transition>

        <transition name="slide">
            <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Mensagem de Usuário Aqui!",
            exibir: false
        }
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

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}

@keyframes slide-in {
	from{transform: translateY(40px);}
	to{transform: translateY(0px);}
}

@keyframes slide-out {
	from{transform: translateY(0px);}
	to{transform: translateY(40px);}
}

</style>
