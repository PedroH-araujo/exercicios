const listaPokemon = document.querySelector('.pokemons')
const loadMoreButton = document.querySelector('#loadMoreButton')

const maxRecords = 151
const limit = 1
let offset = 0;
const details = document.querySelector('.pokemon-detail')
const showdetailBtn = document.querySelector('.showBtn')
const closedetailBtn = document.querySelector('.closeBtn')


details.style.display = 'none'
showdetailBtn.addEventListener('click', () => {
   console.log('click')
})
closedetailBtn.addEventListener('click', () => {
   details.style.display = 'none'
})



function loadPokemonItens(offset, limit) {
   pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
      const newHtml = pokemons.map((pokemon) => `
         <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
               <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
               </ol>
               <img src="${pokemon.photo}"   
               alt="${pokemon.name}">
            </div>
         </li>`
      ).join('')

      listaPokemon.innerHTML += newHtml
   })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
   offset += limit

   const qtdRecordNextPag = offset + limit

   if (qtdRecordNextPag >= maxRecords) { //LIMITAR A QUANTIDADE DE POKEMONS
      const newLimit = maxRecords - offset
      loadPokemonItens(offset, newLimit)

      loadMoreButton.parentElement.removeChild(loadMoreButton)
   } else {
      loadPokemonItens(offset, limit)

   }

})











/*.catch((error) => console.error(error))SE DER ERRO ELE EXECUTA ISSO
.finally(() => console.log('Requisição concluída')) DANDO CERTO OU ERRADO, APOS A REQUISIÇÃO ELE EXECUTA*/