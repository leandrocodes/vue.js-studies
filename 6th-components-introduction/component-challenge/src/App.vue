<template>
  <v-app>
    <!-- MENU -->

    <side-menu/>

    <!-- TOOLBAR -->
    <toolbar/>

    <!-- CAROUSEL -->
    <carousel/>

    <!-- FOOTER -->
    <footer-v/>
  </v-app>
</template>

<script>
import Menu from "./Menu.vue"
import Toolbar from "./Toolbar.vue"
import Carousel from "./Carousel.vue"
import Footer from "./Footer.vue"

export default {
  components: {
    'side-menu': Menu,
    'toolbar': Toolbar,
    'carousel': Carousel,
    'footer-v': Footer
  }
}
</script>
