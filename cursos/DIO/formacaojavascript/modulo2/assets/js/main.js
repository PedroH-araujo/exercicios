


function convertPokemonToLi(pokemon){
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

const listaPokemon = document.querySelector('.pokemons')

pokeApi.getPokemons().then((pokemons = []) => {
   listaPokemon.innerHTML = pokemons.map(convertPokemonToLi).join('')
})

  

    

      
      
      
      
      



   
   /*.catch((error) => console.error(error))SE DER ERRO ELE EXECUTA ISSO
   .finally(() => console.log('Requisição concluída')) DANDO CERTO OU ERRADO, APOS A REQUISIÇÃO ELE EXECUTA*/