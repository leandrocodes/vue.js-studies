<template>
    <div class="task" :class="stateClass">
        <p>
            {{task.name}}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        task: { type: Object, required: true }
    },
    computed:{
        stateClass(){
            return{
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
    .task{
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 5px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .pending{
        border-left: 12px solid rgb(211, 39, 39);
        background-color: rgb(199, 64, 64);
    }

    .done{
        border-left: 12px solid rgb(44, 130, 180);
        background-color: rgb(70, 161, 214);
        text-decoration: line-through;
    }
</style>
