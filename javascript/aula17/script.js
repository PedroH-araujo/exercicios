function add(){
   let numbar = document.getElementById('txtnum')
   let n = Number(numbar.value)
   let res = document.getElementById('res')
   let select = document.getElementById('txts')
   if (n < 1 || n > 100){
      window.alert('Por favor digite um número entre 1 e 100')
   }else{
   select.options[select.options.length] = new Option(`valor ${n} adicionado.`, 'My value');

      
   }

}
function finalizar(){
   let numbar = document.getElementById('txtnum')
   let n = Number(numbar.value)
   let res = document.getElementById('res')
   

   let num = []
   num.push(n)
   res.innerHTML = ` ${num} ${num.length}`
}   