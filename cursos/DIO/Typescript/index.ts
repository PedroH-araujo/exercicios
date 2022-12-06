interface IConta {
   nomeTitular: string
   saldo?: number
}


class Conta {
   private nomeTitular: string
   private saldo: number

   constructor({
      nomeTitular,
      saldo = 0
   }: IConta) {
      this.nomeTitular = nomeTitular,
         this.saldo = saldo
      console.log(`Bem vindo ao DIO Bank ${nomeTitular}`)
   }

   meuSaldo = (): number => this.saldo
   depositar = (valor: number): void => {
      this.saldo += valor
      console.log(`Voce depositou ${valor}. Seu novo saldo é ${this.saldo}`)
   }
   sacar = (valor: number): void => {
      if (valor <= this.saldo) {
         this.saldo -= valor
         console.log(`Voce sacou ${valor}. Seu novo saldo é ${this.saldo}`)
      } 
         console.log('Seu saldo é insuficiente')
      
   }
}

const contaA: Conta = new Conta({ nomeTitular: 'Pedro' })
//const contaB: Conta = new Conta({nomeTitular: 'Peter', saldo: 10})

console.log('Antes do depósito', contaA.meuSaldo())
contaA.depositar(60)
console.log('Depois do depósito', contaA.meuSaldo())
contaA.sacar(70)
console.log('Depois do saque', contaA.meuSaldo())
//console.log(contaB)