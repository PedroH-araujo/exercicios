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
   
   let x = novotexto.value.split(' ')




   var str = x[];
   var chunks = [];
   for (var i = 0, charsLength = str.length; i < charsLength; i += 3) chunks.push(str.substring(i, i + 3));
   for (var i = 0; i < chunks.length; i++) console.log(chunks[i]);



   
   if(novotexto.value.indexOf('ai') != -1){
      x.splice(novotexto.value.indexOf('ai'), 2 , 'a')
   }
   if(novotexto.value.indexOf('enter') != -1){
      x.splice(novotexto.value.indexOf('enter'), 5 , 'e')
   }
   if(novotexto.value.indexOf('imes') != -1){
      x.splice(novotexto.value.indexOf('ime'), 4 , 'i')
   }
   if(novotexto.value.indexOf('ober') != -1){
      x.splice(novotexto.value.indexOf('ober'), 4, 'o')
   }
   if(novotexto.value.indexOf('ufat') != -1){
      x.splice(novotexto.value.indexOf('ufat'), 4 , 'u')
   }
   
   textopronto.innerHTML = x.join('')
   
})