import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/Usuario/Usuario'
import UsuarioLista from './components/Usuario/UsuarioLista'
import UsuarioEditar from './components/Usuario/UsuarioEditar'
import UsuarioDetalhes from './components/Usuario/UsuarioDetalhes'
import Menu from './components/Template/Menu'
import MenuAlt from './components/Template/Alt'

Vue.use(Router)

export const router = new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
            return savedPosition
		}
		if (to.hash) {
			return {
				selector: to.hash
			}
		}
        return {x: 0, y: 0}
	},
	routes: [{
			path: '/',
			component: Inicio,
			name: 'inicio',
			components: {
				default: Inicio,
				menu: Menu
			}
		},
		{
			path: '/usuario',
			component: Usuario,
			props: true,
			children: [{
					path: '',
					component: UsuarioLista
				},
				{
					path: ':id',
					component: UsuarioDetalhes,
					props: true
				},
				{
					path: ':id/editar',
					component: UsuarioEditar,
					props: true,
					name: 'editarUsuario'
				},

			],
			components: {
				default: Usuario,
				menu: MenuAlt,
				menuInferior: Menu
			},
		},
		{
			path: '/redirecionar',
			redirect: '/usuario'
		},
		{
			path: '*',
			redirect: '/'
		}
	]
})


export default router