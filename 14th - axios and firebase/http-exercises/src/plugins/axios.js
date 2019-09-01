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
            /*             console.log(config.method)
                                    if(config.method == 'post')
                                        config.method = 'put'  */
            return config
        }, error => Promise.reject(error))
        
        Vue.prototype.axios.interceptors.response.use(res => {
            const arr = []

            for(let chave in res.data){
                arr.push({id: chave, ...res.data[chave]})
            }

        }, error => Promise.reject(error))
    }
})