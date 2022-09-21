function verificar() {
   var data = 2022
   var ano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (ano.value.length == 0 || ano.value > data) {
      window.alert('Verifique os dados e tente novamente!!')
   } else{
      var fsex = document.getElementsByName('radsex')
      var idade = data - Number(ano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked){
         genero = 'Homem'
         if (idade >= 0 && idade <=10) {
            //criança
            img.setAttribute('src', 'criançam.jpg')
         }else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovemm.jpg')
         }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'adultom.jpg')
         }else{
            //idoso
            img.setAttribute('src', 'idosom.jpg')
         }
      }else if (fsex[1].checked){
         genero = 'Mulher'
         if (idade >= 0 && idade <=10) {
            //criança
            img.setAttribute('src', 'criançaf.jpg')
         }else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovemf.jpg')
         }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'adultof.jpg')
         }else{
            //idoso
            img.setAttribute('src', 'idosof.jpg')
         }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `<p>${genero} e ${idade} anos.</p>`
      res.appendChild(img)
   }
}