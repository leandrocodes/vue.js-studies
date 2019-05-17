<template>
    <div class="task" :class="stateClass" @click="$emit('taskStateChanged', task)">
        <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>
        <p>{{task.name}}</p>
    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
.task {
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

.pending {
    border-left: solid 8px #c62828;
    background-color: #f44336;
}

.done {
    border-left: solid 8px #2e7d32;
    background-color: #4caf50;
    color: #ccc;
    text-decoration: line-through;
}

.pending .close {
    background-color: #c62828;
}

.done .close {
    background-color: #2e7d32;
}

.close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 1rem;
    font-weight: 600;
    color: #ccc;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
}
</style>
