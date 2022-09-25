let a = [1,3,7,9,8,]
a.sort()
let total = a.length
let maior = Number(total) - 1


for (c=0 ;c < maior;c++){
   let res = Number(a[c]) + Number(a[c + 1])
   console.log(`numero ${res}`);
}

