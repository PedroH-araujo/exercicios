const notas = [5,7,8,2,5,8,2,8]
var res = 0

for(let c = 0;c < notas.length;c++){
   
   res += notas[c]
}

console.log(res/notas.length)