const cepform = document.querySelector("#cep")
const endform = document.querySelector("#endereco")
const bairroform = document.querySelector("#bairro")
const cidadeform = document.querySelector("#cidade")
const estadoselect = document.querySelector("#estado")




cepform.addEventListener('focusout', () => {
   Requisicao(cepform.value)
})

async function Requisicao(cep) {
   try {
      var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
      var consultaCEPConvertida = await consultaCEP.json()
      var pegaRua = consultaCEPConvertida.logradouro
      var pegaBairro = consultaCEPConvertida.bairro
      var pegaCidade = consultaCEPConvertida.localidade
      var pegaEstado = consultaCEPConvertida.uf

      endform.value = pegaRua
      bairroform.value = pegaBairro
      cidadeform.value = pegaCidade
      estadoselect.value = pegaEstado

      if (consultaCEPConvertida.erro){
         alert("Insira um CEP valido")
         throw Error('CEP não existente!')
      }
      
      return consultaCEPConvertida
   } catch (erro) {
      console.log(erro);
      
   }
}



/*
.then(resposta => resposta.json())//COVERTI PARA JSON
.then(r => {
   if(r.erro) {
      throw Error('Esse cep não existe!')
   } else{
   console.log(r)}})//MOSTREI NO CONSOLE
.catch(erro => console.log(erro))//MOSTRAR O ERRO NO CONSOLE
.finally(mensagem => console.log('Processamento conluído')) //INDEPENDENTE DA RESPOSTA ELE ACONTECE

*/