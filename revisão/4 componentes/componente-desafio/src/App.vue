<template>
<v-app>

    <Menu></Menu>
	<Toolbar></Toolbar>
	<Carousel></Carousel>
	<Footer></Footer>

</v-app>
</template>

<script>
import Menu from './Menu'
import Toolbar from './Toolbar'
import Carousel from './Carousel'
import Footer from './Footer'

export default {

    components: {
		Menu,
		Toolbar,
		Carousel,
		Footer
    },

}
</script>
