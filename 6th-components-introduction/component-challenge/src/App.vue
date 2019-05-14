<template>
  <v-app>
    <!-- MENU -->

    <app-menu/>

    <!-- TOOLBAR -->
    <app-toolbar/>

    <!-- CAROUSEL -->
    <app-carousel/>

    <!-- FOOTER -->
    <app-footer/>
  </v-app>
</template>

<script>
import Menu from "@/components/template/Menu.vue"
import Toolbar from "@/components/template/Toolbar.vue"
import Carousel from "@/components/widgets/Carousel.vue"
import Footer from "@/components/template/Footer.vue"

export default {
  components: {
    appMenu: Menu,
    appToolbar: Toolbar,
    appCarousel: Carousel,
    appFooter: Footer
  }
}
</script>
