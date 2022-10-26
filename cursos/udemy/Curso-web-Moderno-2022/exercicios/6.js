function JurosSimples(capI, juros, tempo){
   res = capI * juros * tempo
   console.log(res)
}

function JurosCompostos(capI, juros, tempo){
   res = capI * (1 + juros) ** tempo
   console.log(res)
}

JurosSimples(1000,50,2)