<template>
    <div class="usuario-detalhe">
        <h2 v-if="!usuario">Usuário não selecionado!</h2>
        <div v-else>
            <h1>ID: {{ usuario.id }} </h1>
            <h2>Nome: {{ usuario.nome }} </h2>
            <h2>Idade: {{usuario.idade}} </h2>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
