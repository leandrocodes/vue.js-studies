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
import Menu from "@/components/template/Menu.vue"
import Toolbar from "@/components/template/Toolbar.vue"
import Carousel from "@/components/widgets/Carousel.vue"
import Footer from "@/components/template/Footer.vue"

export default {
  components: {
    'side-menu': Menu,
    'toolbar': Toolbar,
    'carousel': Carousel,
    'footer-v': Footer
  }
}
</script>
