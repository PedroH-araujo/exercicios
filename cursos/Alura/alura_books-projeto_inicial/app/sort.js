/*
Ordenar livro pelo preço
*/
const btnValor = document.querySelector("#btnOrdenarPorPreco")
let precos = []

btnValor.addEventListener("click",  function ordenaPreco(){
   let xix = document.querySelectorAll("#preco")
   //(lista.map(e => e.preco)).sort((a,b) => a - b)
   xix.forEach(e => precos.push(e.innerHTML))
   console.log(precos)
   precos.sort((a,b) => a - b)
   console.log(precos)
})