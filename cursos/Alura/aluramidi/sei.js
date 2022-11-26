const tecla = document.querySelectorAll('.tecla')
const som = document.getElementsByTagName('audio')

for (let c = 0; c < tecla.length; c++) {
   tecla[c].onclick = function(){
      som[c].play()
   }
}
