const ajustes = document.querySelectorAll('.controle-ajuste')
const valor = document.querySelectorAll('.controle-contador')


var menos = function(){
   valor[0].value--
}
var mais = function(){
   valor[0].value++
}

ajustes[0].addEventListener("click", menos)
ajustes[1].addEventListener("click", mais)



