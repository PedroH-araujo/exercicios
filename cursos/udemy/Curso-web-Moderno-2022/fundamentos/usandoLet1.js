//LET TEM SCOPO DE BLOCO / DE FUNCAO / GLOBAL
var numero = 1
{
   let numero = 2 //LET TEM SCOPO DE BLOCO, ELE É VISIVEL APENAS NO BLOCO ONDE ESTA
   console.log('dentro =', numero)
}
console.log('fora =', numero)