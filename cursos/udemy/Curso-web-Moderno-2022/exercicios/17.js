function plano(salario,plano) {
   switch (plano) {
      case 'A':
         res = salario + (0.1 * salario)
         console.log(res)
         break;
      case 'B':
         res = salario + (0.15 * salario)
         console.log(res)
         break;
      case 'C':
         res = salario + (0.2 * salario)
         console.log(res)
         break; 
      default:
         console.log('plano inválido')
         break;
   }
}

plano(1000,'E')