class Carro {
   marca
   cor
   gastoCombustivel

   constructor(marca,cor,gastoCombustivel){
      this.marca = marca
      this.cor = cor
      this.gastoCombustivel = gastoCombustivel
   }
   realizarPercurso(distancia,precoCombustivel){
      return precoCombustivel * (distancia / this.gastoCombustivel)
   }
}

const Sandero = new Carro('Fiat','azul',2)

console.log(Sandero)
console.log(Sandero.realizarPercurso(100,3.8))
