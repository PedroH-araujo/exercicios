const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona no primeiro elemento
console.log(pilotos)

// splice pode adicionar e remover

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1,) //A partir do indice 3 remove 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Faz um novo array a partir do indice 2
console.log(pilotos,algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //Faz um novo array do indice 1 até o indice 3
console.log(pilotos,algunsPilotos2)