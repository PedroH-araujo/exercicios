const escola = "Cod3r"

console.log(escola.charAt(0)) //me da a letra que esta no indice 0
console.log(escola.charCodeAt(3)) //valor na tabela ASC
console.log(escola.indexOf('y')) //acha se tem 3 na constante e me da em que indice esta, se não tiver ele me da -1
console.log(escola.substring(1)) //me da a constante iniciando pelo indice 1
console.log(escola.substring(0,3)) //me da os indices de 0 a 3 da constante
console.log('Escola '.concat(escola).concat('!').concat('é isso'))
console.log('Escola '+ escola + '!' +'é isso')
console.log(escola.replace(3, 'e')) //trocar o numero 3 pelo 'e'
console.log('Ana,Maria,Pedro'.split(',')) //cria um array com o elementos