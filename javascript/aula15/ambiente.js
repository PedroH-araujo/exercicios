let num = [5,8,2,9,3]


num.push(98)
num[6] = 2
num.sort()
console.log(`Nosso vetor tem ${num.length} posições`);
console.log(`${num}`);

let pos = num.indexOf(5)
if(pos == -1){
   console.log('Número não esta na variável');
}else{
console.log(`O valor 5 esta na posição ${pos}`);  
}