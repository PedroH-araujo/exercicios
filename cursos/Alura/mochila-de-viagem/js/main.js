const form = document.getElementById('novoItem')
const lista = document.querySelector('.lista')
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) => {
   criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {
   evento.preventDefault()

   const nome = evento.target.elements['nome']
   const quantidade = evento.target.elements['quantidade']
   
   const existe =itens.find(elemento => elemento.nome === nome.value)

   const itemAtual = {
      "nome": nome.value,
      "quantidade": quantidade.value
   }
   
   if(existe) {
      itemAtual.id = existe.id

      quantidadeAtualizada(existe,quantidade)

   } else {
      itemAtual.id = itens.length

      criaElemento(itemAtual)

      itens.push(itemAtual)
   }

   
   localStorage.setItem("itens", JSON.stringify(itens))
    
   nome.value = ''
   quantidade.value = ''
})

function criaElemento(item){
   const novoItem = document.createElement('li')
   novoItem.classList.add("item")

   const strong = document.createElement('strong')
   const fechar = document.createElement('span')
   
   fechar.classList.add('material-symbols-outlined')
   fechar.innerHTML = close
   strong.innerHTML = item.quantidade
   strong.dataset.id = item.id
   novoItem.appendChild(strong)
   
   novoItem.innerHTML += item.nome
   novoItem.innerHTML += fechar

   lista.appendChild(novoItem)

}

function quantidadeAtualizada(item,quantidade) {
   document.querySelector("[data-id='"+item.id+"']").innerHTML = quantidade.value
   itens[item.id].quantidade = quantidade.value
}