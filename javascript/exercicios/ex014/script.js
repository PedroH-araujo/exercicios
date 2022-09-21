function carregar() {
   var hr = new Date()
   var horario = hr.getHours()
   var hora = document.getElementById('msg')

   var img = document.getElementById('imagem')
   hora.innerHTML = `<p>Agora são ${horario} horas.<p>`
   if (horario < 12) {
      img.src = 'fotodia.jpg'
      document.body.style.background = '#e2dea2'
   }else if (horario < 18) {
      img.src = 'fototarde.jpg'
      document.body.style.background = '#e6880f'
   }else{
      img.src = 'fotonoite.jpg'
      document.body.style.background = '#141233'
   }
}