



function gasto(preco,gastoCombustivel,distancia){
   var litros = distancia / gastoCombustivel
   return litros * preco
}
var res = gasto(5.79,1,100)
console.log(res)
