
const menos = document.querySelector('#subtrair')

const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach((elemento) => {
   elemento.addEventListener("click", (evento) => {
      manipulaDados(evento.target.textContent)
   })
})


function manipulaDados(operacao) {
   if(operacao === "-"){
      contador.value--
   } else {
      contador.value++
   }
}