class Carro {
   marca
   cor
   gastoCombustivel
   distancia
   precoCombustivel

   constructor(distancia, precoCombustivel){
      this.distancia = distancia
      this.precoCombustivel = precoCombustivel
      return precoCombustivel * distancia
   }
}

const Sandero = new Carro(100,3.8)

console.log(Sandero)