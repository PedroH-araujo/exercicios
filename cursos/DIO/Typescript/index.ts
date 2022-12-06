interface IConta {
   nomeTitular: string
   saldo?: number
}


class Conta {
   private nomeTitular: string
   private saldo: number
   private ativa: boolean = true

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
      if (!this.ativa) {
         console.log('Conta desativada,imposível realizar movimentação')
      } else {
         this.saldo += valor
         console.log(`Voce depositou ${valor}. Seu novo saldo é ${this.saldo}`)
      }
   }
   sacar = (valor: number): void => {
      if (!this.ativa) {
         console.log('Conta desativada,imposível realizar movimentação')
      }
      if (valor <= this.saldo) {
         this.saldo -= valor
         console.log(`Voce sacou ${valor}. Seu novo saldo é ${this.saldo}`)
      } else {
         console.log('Seu saldo é insuficiente')
      }
   }

   cancelarConta = () => {
      if (!this.ativa) {
         console.log('Conta desativada,imposível realizar movimentação')
      }

      if (this.saldo === 0) {
         this.ativa = false
         console.log('Conta desativada')
      } else if (this.saldo < 0) {
         console.log(`Ainda existe débitos em sua conta.Seu saldo é ${this.saldo}`)
      } else {
         console.log(`Ainda existe créditos em sua conta.Seu saldo é ${this.saldo}`)
      }
   }

   transferencia = (valor: number, destinatario: Conta) => {
      this.saldo -= valor
      destinatario.saldo += valor
      console.log(`Voce transferiu ${valor} para a conta de ${destinatario.nomeTitular}`)
   }

}

const contaA: Conta = new Conta({ nomeTitular: 'Pedro', saldo: 0 })
const contaB: Conta = new Conta({ nomeTitular: 'Bionda', saldo: 0 })


contaA.depositar(100)
contaA.transferencia(70,contaB)
console.log(contaA.meuSaldo())
console.log(contaB.meuSaldo())

