<template>
    <div class="new-task">
        <input class="form-element" placeholder="Adicionar nova tarefa! :)" 
        v-model="name"  @keydown.enter="add" type="text">
                <button class="form-element" @click="add">+</button>
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
            if(this.name != ''){
                this.$emit('taskAdded', {name: this.name})
            this.name = ''
            }
        }
    }
}
</script>

<style>
    .new-task{
        margin: 35px;
    }

    .form-element{
        outline: none;
        font-size: 2rem;
        border: 1px solid #fff;
        padding: 5px 10px 8px;
        color: #fff
    }
    input.form-element{
        width: 500px;
        background: #fff2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border-right: none;
    }
    button.form-element{
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-left: none;
        background-color: rgb(127, 176, 255);
    }

</style>
