const imprimirResultado = function(nota){
   if(nota >= 7){
   console.log('Aprovado')
   } else {
      console.log('Reprovado, sua nota foi ' + nota)
   }
}

imprimirResultado(4)
imprimirResultado(10)
imprimirResultado('Epa!') //cuidado!!!!!