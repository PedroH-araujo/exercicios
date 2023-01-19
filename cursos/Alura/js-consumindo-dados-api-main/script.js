var consultaCEP = fetch ('http://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())//COVERTI PARA JSON
.then(r => {
   if(r.erro) {
      throw Error('Esse cep não existe!')
   } else{
   console.log(r)}})//MOSTREI NO CONSOLE
.catch(erro => console.log(erro))//MOSTRAR O ERRO NO CONSOLE
.finally(mensagem => console.log('Processamento conluído')) //INDEPENDENTE DA RESPOSTA ELE ACONTECE


console.log(consultaCEP)