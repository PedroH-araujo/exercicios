function add(){
   let numbar = document.getElementById('txtnum')
   let n = Number(numbar.value)
   let res = document.getElementById('res')
   let select = document.getElementById('txts')
   let num = []
   if (n < 1 || n > 100){
      window.alert('Por favor digite um número entre 1 e 100')
   }else{
   select.options[select.options.length] = new Option(`valor ${n} adicionado.`, 'My value');

   
   var addNum = function(x){
   return num.push(n)
   }



   res.innerHTML = ` ${addNum(n)} ${num.length}`
   }

}
function finalizar(){
   let numbar = document.getElementById('txtnum')
   let n = Number(numbar.value)
   let res = document.getElementById('res')
   


   res.innerHTML = ` ${num} ${num.length}`
}   