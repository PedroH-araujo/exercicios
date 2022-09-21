function gerar() {
   var tabuada = document.getElementById('txts')
   var numero = window.document.getElementById('txtn')
   var n = numero.value
   if (n.length == 0) {
      window.alert('Por favor digite um número!')
   }else{
   tabuada.length = 0 //reseta o quadro
   tabuada.style.width = "120px"
   for (var c = 1; c <= 10; c++){
      var res = n * c
      tabuada.options[tabuada.options.length] = new Option(`${n} x ${c} = ${res}`, 'My value');
      //adiciona 1 option em cada loop
   }}
}