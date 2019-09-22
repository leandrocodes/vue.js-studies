<template>
  <div class="contador">
    <span>{{contador}}</span>
    <button @click="adicionar">++</button>
    <button @click="remover">--</button>
  </div>
</template>

<script>
export default {
  data() {
    return { contador: 0 };
  },
  methods: {
    adicionar() {
      this.contador++;
    },
    remover() {
      this.contador--;
    }
  }
};
</script>

<style scoped>
span {
  border-bottom: 1px solid #ccc;
  height: 30vh;
  padding: 5px 25px;
}

button {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: blueviolet;
  border-color: #000;
  color: #fff;
  margin-left: 10px;
  outline: none;
}
</style>
