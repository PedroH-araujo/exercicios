const menorValor = 10
const maiorValor = 100
const numeroSecreto = gerarNumero(menorValor,maiorValor)

function gerarNumero(min,max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroSecreto);

const elementoMenorValor = document.querySelector("#menor-valor")
const elementoMaiorValor = document.querySelector("#maior-valor")

elementoMaiorValor.innerHTML = maiorValor
elementoMenorValor.innerHTML = menorValor
