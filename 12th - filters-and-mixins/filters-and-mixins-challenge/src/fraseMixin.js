export default{
    computed:{
		espacoPorVirgulaComputada(){
			return this.fraseComputada.replace(/ /g, ", ");
		},
		contadorStringComputada(){
			return this.fraseComputada.split(' ').map(p => `${p} (${p.length})`).join(', ')
		}
	}
}