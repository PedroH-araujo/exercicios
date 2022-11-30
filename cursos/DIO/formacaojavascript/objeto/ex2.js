class Pessoa {
   nome
   peso
   altura

   constructor(nome,peso,altura){
      this.nome = nome
      this.peso = peso
      this.altura = altura
   }

   calcularIMC(){
      return (this.peso / (this.altura * this.altura)).toFixed(2)
   }

   classificarIMC(){
      var res = this.calcularIMC()
         if(res < 18.5){
            console.log('abaixo do peso')
         } else if(res >= 18.5 && res <= 25){
            console.log('Peso normal')
         } else if(res > 25 && res < 30){
            console.log('Acima do peso')
         }
      }
}

const Jose = new Pessoa('José',70,1.75)
console.log(Jose)
console.log(Jose.calcularIMC())
Jose.classificarIMC()

const Pedro = new Pessoa('Pedro',80,1.8)
console.log(Pedro)
console.log(Pedro.calcularIMC())
Pedro.classificarIMC()