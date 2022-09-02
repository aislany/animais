function listar(){
listaAnimais = localStorage.getItem('listaAnimais')

if(listaAnimais == null){
   msgError.innerHTML = 'Nenhum animal Cadastrado'
   return
}
const listardados =localStorage.getItem('listaAnimais')
msgLista.innerHTML = listardados




}