<template>
<div class="contador">
    <span>{{contador}}</span>
    <button @click="add">++</button>
    <button @click="del">--</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        add() {
            this.contador++
        },
        del() {
            this.contador--
        }
    }
}
</script>

<style>
.contador span {
    border: 1px solid purple;
    height: 30px;
    padding: 5px 25px;
}
.contador button{
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: cornflowerblue;
    margin: 5px;
    outline: none;
}
</style>
