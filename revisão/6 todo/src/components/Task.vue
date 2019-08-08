<template>
    <div class="task" :class="stateClass">
        <span class="close" @click="$emit('taskDeleted', task)">x</span>
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
        position: relative;
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
    
    .pending .close{
        background-color: rgb(211, 39, 39);
    }

    .done .close{
        background-color: rgb(44, 130, 180);
    }

    .close{
        position: absolute;
        right: 10px;
        top: 10px;
        border-radius: 50%;
        font-size: .9rem;
        font-weight: 600;
        width: 20px;
        height: 20px;
        text-align: center;
        color: rgba(255, 255, 255, 0.712);
    }

</style>
