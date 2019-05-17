<template>
    <div id="app">
        <h1>Tarefas</h1>
        <new-task @taskAdded="addTask"></new-task>
        <task-grid :tasks="tasks"></task-grid>
    </div>
</template>

<script>
import NewTask from "./components/NewTask"
import TaskGrid from "./components/TaskGrid"

export default {
    components: {
        TaskGrid,
        NewTask
    },
    data() {
        return {
            tasks: [
                { name: "Lavar Louça", pending: false },
                { name: "Comprar comida", pending: true }
            ]
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
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to left,
        #4e4376,
        #2b5876
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
