// Object.preventExtensions -> pode remover e alterar mas não pode adicionar novos atributos
const produto = Object.preventExtensions({
   nome: 'Qualquer', preco: 1.99, tag: 'promo'
})
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// object.seal -> altera mas não pode adicionar nem remover
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sovbrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// object.freeze = selado + valores constantes