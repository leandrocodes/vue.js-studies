<template>
  <div class="usuario-lista">
    <table>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.nome }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
.usuario-lista{
    flex: 1;
    display: flex;
}

table{
    flex: 1;
    border-spacing: 0px;
    border-collapse: separate;
    border-top: 1px solid #ccc;
}

th, td{
    padding: 15px;
    border-bottom: 1px solid #ccc;
}
tbody tr:hover{
    background: #00000001
}

</style>
