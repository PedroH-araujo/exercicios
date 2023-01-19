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
      var pegaRua = await consultaCEPConvertida.logradouro
      var pegaBairro = await consultaCEPConvertida.bairro
      var pegaCidade = await consultaCEPConvertida.localidade
      var pegaEstado = await consultaCEPConvertida.uf

      endform.value = pegaRua
      bairroform.value = pegaBairro
      cidadeform.value = pegaCidade

      for(var i = 0; i< estadoselect.options.length; i++){
         if (estadoselect.options[i].value === pegaEstado) {
            estadoselect.selectedIndex = i;
            break;
         }
      }
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