var temp = document.getElementById('temp')
var começar = document.getElementById('start')
var stop = document.getElementById('stop')
var tempo;

function relogio() {
    	var hora = new Date().toLocaleTimeString();
        document.getElementById('temp').innerHTML = hora;
}

function start(){
   tempo = setInterval(relogio,1000);
}
function parar(){
   clearTimeout(tempo);
}
