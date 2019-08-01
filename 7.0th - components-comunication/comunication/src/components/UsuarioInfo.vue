<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário:
      <strong>{{ nome }}</strong>
    </p>
    <p>
      Idade do usuário:
      <strong>{{idade}}</strong>
    </p>
    <button @click="reiniciarNome">Reset</button>
    <button @click="reiniciarFn">Restart ((Calback))</button>
  </div>
</template>

<script>
import bus from "@/bus";
export default {
  props: {
    nome: {
      type: String,
      //required: true,
      default: "Leandro VM"
    },
    //to use callback
    reiniciarFn: Function,
    idade: Number
  },
  methods: {
    /*       inverterNome(){
        return this.nome.split('').reverse().join('')
      } */
    reiniciarNome() {
      //this.nome = 'Leandro'
      this.$emit("nomeMudou", "Leandro")
    }
  },
  created(){
      bus.quandoIdademudar((idade) =>{
          this.idade = idade
      })
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
