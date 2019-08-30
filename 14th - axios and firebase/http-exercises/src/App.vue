<template>
    <div id="app" class="container">
        <h1>HTTP com Axios</h1>
        <b-card>
            <b-form-group label="Nome: ">
                <b-form-input
                    type="text"
                    size="lg"
                    v-model="usuario.nome"
                    palceholder="Informe o nome aqui"
                ></b-form-input>
            </b-form-group>
            <b-form-group label="Email: ">
                <b-form-input
                    type="email"
                    size="lg"
                    v-model="usuario.email"
                    palceholder="Informe o email aqui"
                ></b-form-input>
            </b-form-group>
            <hr />
            <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    /* 	created(){
		this.axios.post('usuarios.json', {
			nome: 'maria',
			email: 'maria@maria.com',
		}).then(res => console.log(res))
	} */
    data() {
        return {
            usuario: {
                nome: "",
                email: ""
            }
        }
    },
    methods: {
        salvar() {
            console.log(this.usuario)
        }
    }
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 1.5rem;
}

#app h1 {
    text-align: center;
    margin: 50px;
}
</style>
