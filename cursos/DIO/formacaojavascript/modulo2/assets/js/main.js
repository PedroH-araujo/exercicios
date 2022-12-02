

const listaPokemon = document.querySelector('.pokemons')

function convertPokemonToLi(pokemon){
   return `<li class="pokemon">
      <span class="number">#001</span>
      <span class="name">${pokemon.name}</span>
      
      <div class="detail">
         <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
         </ol>

         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
      </div>


   </li>`
}


pokeApi.getPokemons().then((pokemons = []) => {
   listaPokemon.innerHTML = pokemons.map(convertPokemonToLi).join('')
})

  

    

      
      
      
      
      



   
   /*.catch((error) => console.error(error))SE DER ERRO ELE EXECUTA ISSO
   .finally(() => console.log('Requisição concluída')) DANDO CERTO OU ERRADO, APOS A REQUISIÇÃO ELE EXECUTA*/