<template>
    <div id="app">
        <h1>Tarefas</h1>
        <tasks-progress :progress="progress"></tasks-progress>
        <new-task @taskAdded="addTask"></new-task>
        <task-grid :tasks="tasks" 
        @taskStateChanged="toggleTask"
        @taskDeleted="deleteTask">
        </task-grid>
    </div>
</template>

<script>
import NewTask from "./components/NewTask"
import TaskGrid from "./components/TaskGrid"
import TasksProgress from "./components/TasksProgress"

export default {
    components: {
        TaskGrid,
        NewTask,
        TasksProgress
    },
    data() {
        return {
            tasks: []
        }
    },
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},
    methods:{
        addTask(task){
            const sameName = t => t.name === task.name
            const reallyNew = this.tasks.filter(sameName).length == 0
             if(reallyNew){
                 this.tasks.push({
                     name: task.name,
                     pending: task.pending || true
                 })
             }
        },
        deleteTask(task){
            this.tasks.splice(this.tasks.indexOf(task), 1)
        },
        toggleTask(task){
            var i = this.tasks.indexOf(task)
            this.tasks[i].pending = !this.tasks[i].pending
        }
    }
}
</script>

<style>
body {
    font-family: "Lato", sans-serif;
    background: #2b5876; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to left,
        #4e4376,
        #2b5876
    );
    background: linear-gradient(
        to left,
        #4e4376,
        #2b5876
    );

    color: #fff;
}

#app {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#app h1 {
    margin-bottom: 5px;
    font-weight: 300;
    font-size: 3.5rem;
}
</style>
