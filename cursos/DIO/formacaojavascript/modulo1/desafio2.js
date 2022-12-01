const array = [5,3,4,10,12,7,8]
/*const par = []
const impar = []

function sortfunction(a,b){
   return (a - b)
}

function adicionanumero(numeros){
   array.push(numeros)
}

   for (let c = 0; c < array.length; c++) {
      if(array[c] % 2 == 0){
         var n = array[c]
         par.push(n)
         par.sort(sortfunction)
      } else {
         var n = array[c]
         impar.push(n)
         impar.sort(sortfunction)
      }
      
   }

adicionanumero(26)
console.log(par[par.length - 1], impar[0])*/

let maiornumeropar = array[0]
var menornumeroimpar = array[0]

for (let c = 0; c < array.length; c++) {
   if(array[c] % 2 == 0 && maiornumeropar < array[c]){
      maiornumeropar = array[c]
   } else if (array[c] % 2 != 0 && menornumeroimpar > array[c]){
      var menornumeroimpar = array[c]
   }
   
}

console.log(maiornumeropar, menornumeroimpar)