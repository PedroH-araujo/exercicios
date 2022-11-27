const tecla = document.querySelectorAll('.tecla')
const som = document.getElementsByTagName('audio')

for (let c = 0; c < tecla.length; c++) {
   tecla[c].onclick = function(){
      som[c].play()

   tecla[c].onkeydown = function(evento){
      if(evento.code === 'Space' || evento.code === 'Enter')
      tecla[c].classList.add('ativa')
   }
   
   tecla[c].onkeyup = function(){
      tecla[c].classList.remove('ativa')
   }

   }

}
