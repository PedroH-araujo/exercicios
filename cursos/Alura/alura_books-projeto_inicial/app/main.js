let lista = []
async function requisicao() {
   try {
      let req = await fetch("https://guilhermeonrails.github.io/casadocodigo/livros.json")
      let response = await req.json()

      for (let i = 0; i < response.length; i++) {
         lista.push(response[i])
      }
      
      lista.forEach(divLivro)
   } catch (error) {
      console.log(error)
   }
}

requisicao()