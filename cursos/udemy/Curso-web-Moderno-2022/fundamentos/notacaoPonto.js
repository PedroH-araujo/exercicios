console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'      //os dois fazem a mesma coisas
obj1['name'] = 'Bola2'  //os dois fazem a mesma coisas
console.log(obj1.name)

function Obj(nome){
   this.nome = nome
   this.exec = function(){
      console.log('Exec...')
   }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
console.log(obj3)
