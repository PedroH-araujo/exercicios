//classes
/* Data modifiers
public(Consegue acessar a propriedade por fora da classe) É O DEFAULT
private(Só consegue acessar a propriedade por dentro da classe)
protected(Apenas a classe e a subclasse consegue acessar)
*/


class Character {
   private name?: string
   readonly strenght: number
   skill: number

   constructor(strenght: number, skill:number){
      this.strenght = strenght
      this.skill = skill
   }

   attack(): void{
      console.log(`Attack with ${this.strenght} points`)
   }
}

class Magician extends Character{
   magicPoints: number

   constructor(strenght:number, skill:number, magicPoints:number){
      super(strenght,skill) //construtor da classe PAI
      this.magicPoints = magicPoints
   }
}

const p1 = new Character(10, 98)
const p2 = new Magician(2,10,20)
console.log(p1)
console.log(p2)
p1.attack()
