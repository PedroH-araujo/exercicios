const novotexto = document.querySelector('#novotexto')
const textopronto = document.querySelector('#textopronto')
const criptografa = document.querySelector('#criptografa')
const descriptografa = document.querySelector('#descriptografa')

criptografa.addEventListener('click', () => {
   let x = novotexto.value.split('')

   x.forEach(criptogrfia)

   textopronto.innerHTML = x.join('')
   

   function criptogrfia(element, index){
      if(element == 'a'){
         x.splice(index,1,'ai')
      }
      if(element == 'e'){
         x.splice(index,1,'enter')
      }
      if(element == 'i'){
         x.splice(index,1,'imes')
      }
      if(element == 'o'){
         x.splice(index,1,'ober')
      }
      if(element == 'u'){
         x.splice(index,1,'ufat')
      }
   }

})

descriptografa.addEventListener('click', () => {
   
   let x = novotexto.value
   textopronto.innerHTML = descriptografia(x)
   
   
   function descriptografia(texto){
      let t = texto.replaceAll('ai', 'a')
      .replaceAll('enter', 'e')
      .replaceAll('imes', 'i')
      .replaceAll('ober', 'o')
      .replaceAll('ufat', 'u')

      return t
   }
   
   
})