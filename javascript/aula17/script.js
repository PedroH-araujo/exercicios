function add(){
   let numbar = document.getElementById('txtnum')
   let n = numbar.value
   let res = document.getElementById('res')
   let select = document.getElementById('txts')
   let num = []
   num.push(n)
   select.options[select.options.length] = new Option(`valor ${n} adicionado.`, 'My value');
}
function finalizar(){
   res.innerHTML = `Os números são ${num}`
}
