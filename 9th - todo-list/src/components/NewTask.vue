<template>
    <div class="new-task">
        <input class="form-element" placeholder="Adicione uma nova tarefa! 😀" v-model="name" type="text" @keydown.enter="add">
        <button class="form-element" @click="add">✔️</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: ''
        }
    },
    methods:{
        add(){
            this.$emit('taskAdded', {name: this.name})
            this.name = ''
        }
    }
}
</script>

<style>
    .new-task{
        margin: 2rem;
    }
    .form-element{
        outline: none;
        font-size: 2rem;
        border: 1px solid rgba(255, 255, 255, 0);
        padding: 5px 10px 8px;
        color: rgb(49, 49, 49);
    }
    input.form-element{
        width: 500px;
        background: rgba(255, 255, 255, 0.493);
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-right: none;
    }
    button{
        border-left: none;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        background-color: rgb(171, 241, 250);
    }
</style>
