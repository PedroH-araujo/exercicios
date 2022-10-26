function fatorial(num){
   if(num < 0){
      console.log('Numero inválido')
   } else if (num == 0 || num == 1){
      console.log(1)
   } else {
      function fator(num){
         let fat = 1
         for(let c = num; c > 1; c--){
            fat = fat * c
         }
         return fat
      }console.log(fator(num));
      } 
   }

fatorial(4)