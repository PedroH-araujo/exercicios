// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
   console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => { //é uma sintaxe reduzida
   return a + b
}

console.log (soma(4, 8))

// retorno implícito
const subtracao = (a, b) => a - b //É uma sintaxe de funcao mais reduzida, o que for colocado na frente de '=>' será retornado
console.log(subtracao(9, 1))

const imprimir2 = a => console.log(a) //Posso fazer isso quando for apenas um parametro
imprimir2('NICE!!!')