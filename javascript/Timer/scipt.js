var temporizador = document.getElementById('temp')
var começar = document.getElementById('start')
var stop = document.getElementById('stop')

function relogio() {
    	var hora = new Date('December 25, 1995 23:15:30');
        var x = hora.getMinutes();
}

function start(hora){
   temporizador.innerHTML = hora
   tempo = setInterval(relogio,1000);
}
function parar(){
   clearTimeout(tempo);
}
