import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://vue-udemy-47d60.firebaseio.com/'

Vue.use({
    install(vue){
        Vue.prototype.$http = axios
    }
})