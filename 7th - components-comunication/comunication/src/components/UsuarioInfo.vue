<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário:
      <strong>{{ nome }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: {
      nome: {
          type: String,
          //required: true,
          default: 'Leandro VM'
      }
  },
  methods: {
/*       inverterNome(){
        return this.nome.split('').reverse().join('')
      } */
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
