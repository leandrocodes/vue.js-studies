<template>
    <div class="task-grid">
        <template>
            <task v-for="task in tasks" :key="task.name" :task="task">{{task.name}}</task>
        </template>
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
</style>
