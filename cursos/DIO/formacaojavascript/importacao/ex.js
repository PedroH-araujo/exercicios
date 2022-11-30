const numeros = [5,50,18,90,23]
function sortfunction(a,b){
   return (a - b)
}

numeros.sort(sortfunction)

console.log(numeros[numeros.length - 1])