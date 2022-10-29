const pessoa = {
   nome: 'Rebeca',
   idade: 2,
   peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
   console.log(`${e[0]}: ${e[1]}}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => { //destructuring
   console.log(`--->${chave}: ${valor}}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
   enumerable: true, //pode ser listada?
   writable: false, //pode ser modificada?
   value: '011/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //concatena todos os objetos dentro do PRIMEIRO

console.log(obj)