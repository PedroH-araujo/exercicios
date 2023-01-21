/*
Pegar os dadosda Requisição
Fazer forEach para mostrar todos os livros
*/

let livroSection = document.querySelector("#livros")

function divLivro(element,index) {
   let livro = document.createElement("div")
   livro.innerHTML =
      `
         <div class="livro" id = "${index}">
            <img class="livro__imagens" src="${element.imagem}" alt="${element.alt}" />
            <h2 class="livro__titulo">
              ${element.titulo}
            </h2>
            <p class="livro__descricao">${element.autor}</p>
            <p class="livro__preco" id="preco">R$${element.preco}</p>
            <div class="tags">
              <span class="tag">${element.categoria}</span>
            </div>
      `
   livroSection.appendChild(livro)
}