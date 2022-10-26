//funcao em retorno
function imprimirSoma(a, b){
   console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,8,4,5,6,8)
imprimirSoma()

//Funcao com retorno
function soma(a, b = 7){ //se eu nao passar nada, B vai valer 7
   return a + b
}

console.log(soma(5,3))
console.log(soma(50))
console.log(soma())