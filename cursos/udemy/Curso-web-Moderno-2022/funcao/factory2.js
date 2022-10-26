
const prod1 = {}
function criarProduto(nome, preco){
   return {
      nome,
      preco,
      desconto : 0.1
   }
}

console.log(criarProduto('salada',2))
console.log(criarProduto('bacon',8))