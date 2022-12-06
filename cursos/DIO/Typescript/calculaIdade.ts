interface ICalcularIdade {
   nome: string
   anoNascimento: number
   profissao?:string
}


function calculaidade({
   nome,
   anoNascimento,
   profissao
}: ICalcularIdade): string{
   const idade:number = 2022 - anoNascimento
   if(profissao != undefined){
      return `Seu nome é ${nome}, tem ${idade}, e trabalha de ${profissao}`
   } 
      return `Seu nome é ${nome}, tem ${idade} anos`
}

const nome = 'Pedro'
const anoNascimento = 1997
const profissao = 'Desenvolvedor'


console.log(calculaidade({nome, anoNascimento}))
console.log(calculaidade({nome: 'Pedro', anoNascimento: 1997,profissao: 'Desenvolvedor'}))

