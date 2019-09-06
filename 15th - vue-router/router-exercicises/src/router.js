import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/Usuario/Usuario'
import UsuarioLista from './components/Usuario/UsuarioLista'
import UsuarioEditar from './components/Usuario/UsuarioEditar'
import UsuarioDetalhes from './components/Usuario/UsuarioDetalhes'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Inicio
        },
        {
            path: '/usuario',
            component: Usuario,
            props: true,
            children: [
                { path: '', component: UsuarioLista },
                { path: ':id', component: UsuarioDetalhes, props: true },
                { path: ':id/edutar', component: UsuarioEditar, props: true },

            ]
        }
    ]
})