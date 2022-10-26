//VAR TEM SCOPO DE FUNCAO / GLOBAL
{
   {
      {
         {
             var sera = 'Será???' //variavel criada dentro de bloco tem o escopo GLOBAL
             console.log(sera)
         } 
      } 
   } 
}

console.log(sera)

function teste(){
   var local = 123 //Variavel criada dentro de funcao só aparece dentro da funcao
   console.log(local)
}

teste()
console.log(local)