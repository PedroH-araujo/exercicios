const array = [5,3,4,10,12,7,8]
const par = []
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
console.log(par[par.length - 1], impar[0])