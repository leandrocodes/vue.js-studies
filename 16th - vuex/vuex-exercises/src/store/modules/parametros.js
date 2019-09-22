export default {
    state: {
        quantidade: 1,
        preco: 19.99
    },
    mutations: {
        setQuantidade(state, payload){
            state.quantidade = payload
        },
        setPreco(state, payload){
            state.preco = payload
        }
    }
}