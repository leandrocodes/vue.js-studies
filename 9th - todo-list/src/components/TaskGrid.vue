<template>
    <div class="task-grid">
        <template v-if="tasks.length > 0">
            <task v-for="(task) in tasks" :key="task.name" :task="task" @taskDeleted="$emit('taskDeleted', $event)">{{task.name}}</task>
        </template>
        <p v-else lass="no-task">Sua vida está em dia! 😀</p>
    </div>
</template>

<script>
import Task from "./Task";
export default {
    components: {
        Task
    },
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
};
</script>

<style>
    .no-task{
        font-size: 2rem;
        color: #aaaaaa;
    }
    .task-grid{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .task-grid .task{
        margin: 1rem;
    }
</style>
