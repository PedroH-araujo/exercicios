
function passouDeAno(media){
   if(media < 5){
      console.log('Reprovado')
   } else if(media >= 5 && media < 7){
      console.log('Recuperação')
   }else{
   console.log('Aprovado')
   }
}

passouDeAno(8)