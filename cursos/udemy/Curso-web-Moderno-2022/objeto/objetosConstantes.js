// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)


Object.freeze(pessoa) //Não da mais pra alterar nada no objeto após isso

pessoa.end = 'rua tal'
pessoa.nome = 'Maria'
console.log(pessoa.nome)
console.log(pessoa)