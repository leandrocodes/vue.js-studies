<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>{{nome}}</p>
        <p>{{idade}}</p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info   :usuarioIdade="idade" :usuarioNome="nome" @nomeMudou="nome = $event" :reiniciarFn="reiniciarNome" />
            <app-usuario-editar :usuarioIdade="idade" @idadeMudou="idade=$event"/>
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return{
            nome: 'Mijaro Nomuro',
            idade: 22
        }
    },
    methods:{
        alterarNome(){
            this.nome = 'Kagaro Nakama'
        },
        reiniciarNome(){
            this.nome = 'Mijaro Nomuro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
