//USADO NO EXERCICIO 9
/*var n =  19;
var digits = (""+n).split(""); //CRIA UM ARRAY SEPARANDO OS DIGITOS
console.log(digits[1])

let q = [40,45,50,55,60,65,70,75,80,85,90,95,100]
const found = q.find(element => element > 41);  //RETORNA O PRIMEIRO ELEMENTO DO ARRAY QUE SATISFAÇA O PARAMETRO
console.log(found);
*/
//----------------------------------------------------------------------------------------------------------------//
function fatorial(n){
   let fat = 1
   for(let c = n; c > 1; c--){
      fat = fat * c
   }
   return fat
}

console.log(fatorial(4));