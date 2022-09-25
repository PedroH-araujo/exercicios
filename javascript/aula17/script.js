
   let numbar = document.getElementById('txtnum')
   let res = document.getElementById('res')
   let select = document.getElementById('txts')
   let valores = []


   function isNumero(n){
      if(Number(n) >= 1 && Number(n) <= 100){
         return true

      }else {

         return false
      }
   }

   function inLista(n, l){
      if (l.indexOf(n) != -1){
         
      return true
   } else {
      
      return false
   }
   }

   function add(){
      if(isNumero(numbar.value) && !inLista(numbar.value, valores)){
         
         valores.push(numbar.value)
         select.options[select.options.length] = new Option(`Valor ${numbar.value} adicionado`, 'My value');
         
      }else{
         window.alert('Valor inválido ou já encontrado na lista')
      }
   }
   
   function finalizar(){
      valores.sort()
      let total = valores.length
      let maior = Number(total) + 1
      let menor = valores[0]
      
      for (c=0 ;c < maior;c++)
      
      
      res.innerHTML = 
      `Ao todo, temos ${total} números cadastrados. <br>
      O maior valor informado foi ${maior}. <br>
      O menor valor informado foi ${menor}. <br>
      Somando todos os valores, temos 
   }