const listaPokemon = document.querySelector('.pokemons')
const loadMoreButton = document.querySelector('#loadMoreButton')
const limit = 5
let offset = 0;




function loadPokemonItens(offset, limit) {
   function convertPokemonToLi(pokemon) {
      return `
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

   }



   pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
      const newHtml = pokemons.map(convertPokemonToLi).join('')
      listaPokemon.innerHTML += newHtml
   })
}

loadPokemonItens(limit, offset)

loadMoreButton.addEventListener('click', () => {
   loadPokemonItens()
})











/*.catch((error) => console.error(error))SE DER ERRO ELE EXECUTA ISSO
.finally(() => console.log('Requisição concluída')) DANDO CERTO OU ERRADO, APOS A REQUISIÇÃO ELE EXECUTA*/