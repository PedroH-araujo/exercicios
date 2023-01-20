/*
Filtrar cada Categoria
*/

const btnFront = document.querySelector("#btnFiltrarLivrosFront")
btnFront.addEventListener("click", function filterFront() {
   livroSection.innerHTML = ""
   let front = lista.filter(e => e.categoria == "front-end")
   front.forEach(divLivro)
})

const btnBack = document.querySelector("#btnFiltrarLivrosBack")
btnBack.addEventListener("click", function filterFront() {
   livroSection.innerHTML = ""
   let front = lista.filter(e => e.categoria == "back-end")
   front.forEach(divLivro)
})

const btnDados = document.querySelector("#btnFiltrarLivrosDados")
btnDados.addEventListener("click", function filterFront() {
   livroSection.innerHTML = ""
   let front = lista.filter(e => e.categoria == "dados")
   front.forEach(divLivro)
})