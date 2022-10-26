// novo recurso do ES2015

const pessoa ={
   nome: 'Ana',
   idade: 5,
   endereco:{
      logradouro: 'Rua ABC',
      numero: 1000
   }
}

console.log(pessoa.nome,pessoa.idade) //para não preciar fazer isso

const { nome, idade} = pessoa //retiro de dentro do objeto 'pessoa' o nome e idade
console.log(nome, idade)

const { nome: n, idade: i} = pessoa //retiro de dentro do objeto 'pessoa' o nome e idade e dou outros nomes pra eles
console.log(n,i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)