

function calculaSalario(valorBrutoSalario,adicionalBeneficio){
   let percentualImposto = 0
   if(valorBrutoSalario <= 1100){
      percentualImposto = 0.05 * valorBrutoSalario
      salario = valorBrutoSalario - percentualImposto + adicionalBeneficio
   } else if (valorBrutoSalario > 1100 && valorBrutoSalario <= 2500){
      percentualImposto = 0.1 * valorBrutoSalario
      salario = valorBrutoSalario - percentualImposto + adicionalBeneficio
   } else if (valorBrutoSalario > 2500){
      percentualImposto = 0.15 * valorBrutoSalario
      salario = valorBrutoSalario - percentualImposto + adicionalBeneficio
   }
   return console.log(salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
}

(calculaSalario(2000,250))