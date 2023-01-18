window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

const chute = document.querySelector("#chute")
const num = document.querySelector(".box")

function onSpeak(e) {
   var palpite = (e.results[0][0].transcript)
   validaNumero(palpite)
}

function validaNumero(palpite) {
   if (palpite < maiorValor && palpite > menorValor) {
      exibeChuteNaTela(palpite)
      comparaNumero(palpite)
      setTimeout(novoPalpite, 1000)
      exibirPalpites(palpite)
   } else {
      alert(`Diga um numero entre ${menorValor} e ${maiorValor}`)
   }
}

function exibeChuteNaTela(palpite) {
   chute.innerHTML = `
   <div>Você disse:</div>
   <span class="box">${palpite}</span>
   `
}

function novoPalpite() {
   recognition.start()
}

function comparaNumero(palpite) {
   if (palpite == numeroSecreto) {
      alert("Parabéns voce acertou")
      chute.innerHTML += `
   <div>O número secreto é ${numeroSecreto}</div>
   `
   }
   else if (palpite > numeroSecreto) {
      chute.innerHTML += `
   <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
   `
   } else {
      chute.innerHTML += `
   <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
   `
   }
}

const meuspalpites = document.querySelector("#escolhas")
function exibirPalpites(palpite) {
   meuspalpites.innerHTML += `
   <span class="box">${palpite}</span>
   `
}