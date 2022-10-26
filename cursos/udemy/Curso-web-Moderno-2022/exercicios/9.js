function prova(nota) {
   if(nota > 100 || nota < 0){
      console.log('Nota inválida')
   } else if (nota < 38){
      console.log('Aluno reprovado')
   } else {
      let digits = (""+nota).split("");
      if(digits[1] >= 3 && digits[1] <= 4 || digits[1] >= 8 && digits[1] <= 9) {
         const found = q.find(element => element > nota);
         console.log(`Sua nota foi arredondada para ${found}, Aprovado`);
      }else{
         console.log(nota)
      }
   }
}

const q = [40,45,50,55,60,65,70,75,80,85,90,95,100]

prova(38)