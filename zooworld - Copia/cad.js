let nome = document.querySelector('#nome')
let alimentacao = document.querySelector('#alimentacao')

function cadastrar(){
  let listaAnimais = localStorage.getItem('listaAnimais')

   let linha = `<tr>`
   linha += `<td>${nome.valeu}</td>`
   linha += `<td>${nomecientifico.valeu}</td>`
   linha += `<td>${especie.valeu}</td>`
   linha += `<td>${qtd.valeu}</td>`
   linha += `<td>${peso.valeu}</td>`
   linha += `<td>${alimentacao.valeu}</td>`


   linha += `</tr>`

   if(listaAnimais == null){ 
      listaAnimais = linha
}else{
      listaAnimais += linha
}

  localStorage.setItem('listaAnimais' ,listaAnimais)
  msgSucesso.innerHTML = '<strong>Cadastrado com Sucesso....</strong>'  
 setTimeout(() => {
    document.location.reload(true)
    
  }, 2000);


}