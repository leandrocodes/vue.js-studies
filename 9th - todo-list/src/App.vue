<template>
  <div id="app">
    <h1>Tarefas</h1>
    <task-grid :tasks="tasks"></task-grid>
  </div>
</template>

<script>
import TaskGrid from "./components/TaskGrid";

export default {
  components: {
    TaskGrid
  },
  data() {
    return {
      tasks: [
        { name: "Lavar Louça", pending: false },
        { name: "Comprar comida", pending: true }
      ]
    };
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: #4776e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4776e6,
    #8e54e9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4776e6,
    #8e54e9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
