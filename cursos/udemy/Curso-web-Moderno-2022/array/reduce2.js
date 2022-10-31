const alunos = [
   { nome: 'João', nota: 7.3, bolsista: false},
   { nome: 'Maria', nota: 9.2, bolsista: true},
   { nome: 'Pedro', nota: 9.8, bolsista: false},
   { nome: 'Ronaldo', nota: 8.7, bolsista: true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(e => e.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(e => e.bolsista).reduce(algumBolsista))