<template>
    <div class="contador">
        <span>{{contador}}</span>
        <button @click="adicionar">++</button>
        <button @click="remover">--</button>
    </div>
</template>

<script>
export default {
    data(){
        return { contador: 0 }
    },
    methods: {
        adicionar(){
            this.contador++
        },
        remover(){
            this.contador--
        }
    },
}
</script>

<style>
    
    .contador span{
        border-bottom: 1px solid #CCC;
        height: 30vh;
        padding: 5px 25px;
    }

    .contador button{
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background-color: blueviolet;
        border-color: #000;
        color: #FFF;
        margin-left: 10px;
        outline: none;
    }

</style>
