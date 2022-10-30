const aprovados = ['Agatha', 'Aldo', 'Pedro', 'Rafael']

Array.prototype.forEach2 = function (callbac) {
   for(i = 0;i < aprovados.length;i++)
   callbac(this[i], i, this)
}

aprovados.forEach2(function(nome, indice){ 
   console.log(`${indice + 1}) ${nome}`)
})