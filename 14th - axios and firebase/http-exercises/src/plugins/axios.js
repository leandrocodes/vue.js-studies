import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://vue-udemy-47d60.firebaseio.com/'

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios
        Vue.prototype.axios = axios.create({
            baseURL: 'https://vue-udemy-47d60.firebaseio.com/'

        })

        Vue.prototype.axios.interceptors.request.use(config => {
            console.log(config.method)
            /*             if(config.method == 'post')
                            config.method = 'put' */
            return config
        })
    }
})