/*imc(85,1.86)

function imc(peso,altura){
   var res = peso / (Math.pow(altura,2))
   console.log(res.toFixed(2)) 
   if(res < 18.5){
      console.log('abaixo do peso')
   } else if(res >= 18.5 && res <= 25){
      console.log('Peso normal')
   } else if(res > 25 && res < 30){
      console.log('Acima do peso')
   }
}*/

pagamento(100,2)


function pagamento(valor,codigo){
   var pagamento = 0
   switch (codigo) {
      case 1:
         pagamento = valor - (valor*0.1)
         break;
      case 2:
         pagamento = valor - (valor*0.15)
      default:
         break;
   }
   console.log(pagamento)
}