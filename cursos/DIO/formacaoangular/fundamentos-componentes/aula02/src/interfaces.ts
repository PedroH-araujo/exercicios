//interface (type x interface)
type robot = {
   readonly id:number | string
   name: string
}

interface robot2 {
   readonly id: number | string
   name: string
   sayHello(): string
}

const bot2:robot2 ={
   id: 2,
   name: "Zord",
   sayHello: function (): string {
      throw new Error("Function not implemented.")
   }
}

const bot:robot ={
   id: 2,
   name: "Zord"
}

class Pessoa implements robot2{
   id: string | number
   name: string
   
   constructor(id: string | number , name: string){
      this.id = id
      this.name = name

   }

   sayHello(): string {
      return "Hello"
   }
}

const p = new Pessoa(1,"Pedro")