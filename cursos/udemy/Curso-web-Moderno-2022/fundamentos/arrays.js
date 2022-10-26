const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //me fala quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //me mostra o ultimo elemento do array
delete valores[0] //deleta o elemento de indice 0 do array
console.log(valores)