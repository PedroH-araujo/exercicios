let dobro = function (a) {
   return 2 * a
}

dobro = (a) => {
   return 2 * a
}

dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function (){
   return 'Olá'
}

ola = () => 'Olá' // não possui param
ola = _ => 'Olá' // posui param
console.log(ola())