<template>
    <div class="task" :class="stateClass">
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
            };
        }
    }
};
</script>

<style>
.task {
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
    border-left: solid 8px #2E7D32;
    background-color: #4CAF50;
    color: #ccc;
    text-decoration: line-through;
}
</style>
