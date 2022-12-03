

function convertPokemonTypesToLi(pokemonTypes) {
   return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)}


function convertPokemonToLi(pokemon){
   return `<li class="pokemon">
      <span class="number">#${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>
      
      <div class="detail">
         <ol class="types">
            ${convertPokemonTypesToLi(pokemon.types).join('')}
         </ol>
         <img src="${pokemon.sprites.other.dream_world.front_default}"   
          alt="${pokemon.name}">
      </div>


   </li>`
   
}

const listaPokemon = document.querySelector('.pokemons')

pokeApi.getPokemons().then((pokemons = []) => {
   listaPokemon.innerHTML = pokemons.map(convertPokemonToLi).join('')
})

  

    

      
      
      
      
      



   
   /*.catch((error) => console.error(error))SE DER ERRO ELE EXECUTA ISSO
   .finally(() => console.log('Requisição concluída')) DANDO CERTO OU ERRADO, APOS A REQUISIÇÃO ELE EXECUTA*/