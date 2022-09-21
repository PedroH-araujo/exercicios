function contar() {
   var inicio = document.getElementById('txtinicio')
   var x = Number(inicio.value)
   var fim = document.getElementById('txtfim')
   var y = Number(fim.value)
   var passo = document.getElementById('txtpasso')
   var z = Number(passo.value)
   var res = document.getElementById('res')
   
   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
   res.innerHTML = 'Impossível contar!'
   //se não digitou nada em algum espaço
   
} else if (passo.value <= 0 && x < y) {
      window.alert('Passo 0 impossível, fazendo a conta usando passo 1')
      res.innerHTML = 'Contando: '
      for (let c = x; c <= y; c += 1){
      res.innerHTML += `${c} 👉 `}
      res.innerHTML += `🏁`
     }//contagem crescente caso coloque passo 0 
     
   else if (passo.value <= 0 && x > y) {
      window.alert('Passo 0 impossível, fazendo a conta usando passo 1')
      res.innerHTML = 'Contando: '
      for (let c = x; c >= y; c -= 1){
      res.innerHTML += `${c} 👉 `}
      res.innerHTML += `🏁`
      }//contagem decrescente caso coloque passo 0
      
   else if (x < y){
      res.innerHTML = 'Contando: '
      for (let c = x; c <= y; c += z){
      res.innerHTML += `${c} 👉 `}
      res.innerHTML += `🏁`
   }//contagem crescente
      
   else if (x > y){
      res.innerHTML = 'Contando: '
      for (let c = x; c >= y; c -= z){
      res.innerHTML += `${c} 👉 `}
      res.innerHTML += `🏁`
   }//contagem decrescente
}