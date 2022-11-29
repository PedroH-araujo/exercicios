const form = document.getElementById('novoItem')
const lista = document.querySelector('.lista')

form.addEventListener("submit", (evento) => {
   evento.preventDefault()

   criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)

})

function criaElemento(nome, quantidade){
   const item = document.createElement('li')
   item.classList.add('item')

   const strong = document.createElement('strong')
   strong.innerHTML = quantidade
   item.appendChild(strong)
   item.innerHTML += nome

   lista.appendChild(item)
}