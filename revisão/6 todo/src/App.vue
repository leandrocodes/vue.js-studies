<template>
	<div id="app">
		<h1>Tarefas</h1>
		<task-progress :progress="progress"></task-progress>
		<NewTask @taskAdded="addTask"></NewTask>
		<TaskGrid 
		@taskStateChanged="toggleState" 
		@taskDeleted="deleteTask" 
		:tasks="tasks"></TaskGrid>
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid'
import NewTask from './components/NewTask'
import TaskProgress from './components/TaskProgress'
export default {
	data(){
		return{
			tasks: []
		}
	},
	components:{
		TaskGrid,
		NewTask,
		TaskProgress
	},
	computed:{
		progress(){
			const total = this.tasks.length
			const done = this.tasks.filter(t=> !t.pending).length
			return Math.round(done/total * 100) || 0
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
		deleteTask(i){
			this.tasks.splice(i, 1)
		},
		toggleState(i){
			this.tasks[i].pending = !this.tasks[i].pending
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
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
		font-size: 3rem;
	}
</style>
