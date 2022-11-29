const form = document.getElementById('novoItem')
const lista = document.querySelector('.lista')
const itens = []

form.addEventListener("submit", (evento) => {
   evento.preventDefault()

   const nome = evento.target.elements['nome']
   const quantidade = evento.target.elements['quantidade']

   criaElemento(nome.value, quantidade.value)
   nome.value = ''
   quantidade.value = ''
})

function criaElemento(nome, quantidade){
   const item = document.createElement('li')
   item.classList.add('item')

   const strong = document.createElement('strong')
   strong.innerHTML = quantidade
   item.appendChild(strong)
   item.innerHTML += nome

   lista.appendChild(item)

   const itemAtual = {
      "nome": nome,
      "quantidade": quantidade
   }

   itens.push(itemAtual)

   localStorage.setItem("item", JSON.stringify(itens))
}


