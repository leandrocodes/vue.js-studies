<template>
<v-app>

    <Menu></Menu>
	<Toolbar></Toolbar>
	<Carousel></Carousel>


    <v-footer class="pa-3" app>
        <v-spacer></v-spacer>
        <div>Curso Vue &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
</v-app>
</template>

<script>
import Menu from './Menu'
import Toolbar from './Toolbar'
import Carousel from './Carousel'

export default {

    components: {
		Menu,
		Toolbar,
		Carousel
    },

}
</script>
