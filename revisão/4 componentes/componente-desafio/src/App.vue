<template>
<v-app>

    <Menu></Menu>

    <v-content>
        <v-carousel>
            <v-carousel-item v-for="(item,i) in fotos" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
    </v-content>

    <v-footer class="pa-3" app>
        <v-spacer></v-spacer>
        <div>Curso Vue &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
</v-app>
</template>

<script>
import Menu from './Menu'
export default {

    components: {
        Menu
    },
    data() {
        return {
            fotos: [{
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                }
            ]
        }
    }
}
</script>
