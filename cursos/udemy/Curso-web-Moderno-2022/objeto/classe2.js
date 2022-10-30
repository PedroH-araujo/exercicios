class Avo {
   constructor(sobrenome) {
      this.sobrenome = sobrenome
   }
}

class Pai extends Avo { //Avo se torna prototipo do Pai
   constructor(sobrenome, profissao = 'Professor') { //JOGOU O SILVA PRA CÁ ***SEGUNDO***
      super(sobrenome) //PEGOU O SILVA E JOGOU PRO AVO ***TERCEIRO***
      this.profissao = profissao
   }
}

class Filho extends Pai {
   constructor() {
      super('Silva') //O SUPER JOGA ESSE PARAMETRO PARA A CLASSE DE CIMA ***PRIMEIRO***
   }
}

const filho = new Filho
console.log(filho)