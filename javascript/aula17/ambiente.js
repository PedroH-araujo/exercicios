let a = [1,3,2,4,5,7,8]
a.sort()
let total = a.length
let soma = 0

for(let i = 0;i < total; i++){
   soma += a[i]
}

console.log(soma);
