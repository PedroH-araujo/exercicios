const aprovados = ['Agatha', 'Aldo', 'Pedro', 'Rafael']

aprovados.forEach(function(nome, indice){ //ForEach sempre manda o nome e depois o indice
   console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = passados => console.log(passados)
aprovados.forEach(exibirAprovados)