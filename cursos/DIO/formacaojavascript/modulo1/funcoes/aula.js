function Escreva(nome){
   console.log('nome é ' + nome)
   return nome
}



function verificaIdade(idade){
   if(idade < 18){
      console.log(Escreva('Pedro') + ' é menor de idade')
   } else{
      console.log(Escreva('Pedro') + ' è maior de idade')
   }
}

verificaIdade('Pedro',19)