import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscaVideo(evento) {
   evento.preventDefault()

   const dadosPesquisa = document.querySelector("[data-pesquisa]").value
   const busca = await conectaApi.buscaVideo(dadosPesquisa)

   const lista = document.querySelector("[data-lista]")

   while (lista.firstChild) {
      lista.removeChild(lista.firstChild)
   }

   busca.forEach(e => lista.appendChild(constroiCard(e.titulo, e.descricao, e.url, e.imagem)))
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")

botaoPesquisa.addEventListener("click", evento => buscaVideo(evento))