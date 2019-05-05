new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: false,
		classeUser:'',
		classeUser2:'',
		corUser:'',
		userStyle:{
			width: '125px',
			height: '100px',
			borderRadius: '10%'
		},
		width: '0',

	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.classe1 = this.classe1 == 'destaque' 
				? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0;
			const temp = setInterval(()=>{
				valor += 1
				this.width = `${valor}%`
				if(valor == 100){
					clearInterval(temp);
				} 
			}, 20)
		},
		setPerigo(event){
			if(event.target.value == "true"){
				this.perigo = true;
			}else if (event.target.value == "false"){
				this.perigo = false;
			}
		}
	}
})
