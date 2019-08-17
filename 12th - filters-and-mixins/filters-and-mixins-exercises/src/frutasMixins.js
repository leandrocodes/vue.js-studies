export default{
    data(){
        return{
            fruta: '',
            frutas: ['banana', 'manga', 'maçã']
        }
    },
    methods:{
        add(){
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}