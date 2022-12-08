//variaveis
let ligado: boolean = false;
let nome: string = "Pedro"
let idade: number = 25
let altura: number = 1.9

let nulo:null = null
let indefinido: undefined = undefined

//objeto - em previsibilidade
let produto: object = {
   name: "felipe",
   cidade: "sp",
   idade: 30
};

//Objeto - com previsibilidade
type ProdutoLoja = {
   nome: string
   preco: number
   unidades: number
}

let meuProduto: ProdutoLoja = {
   nome: "Tênis",
   preco: 100,
   unidades: 54
}

/*
*ARRAYS
*/

let dados: string[] = ["Pedro","Paulo","Peter"]
let dados2: Array<string> = ["Pedro","Paulo","Peter"]

let num: number[] = [1,5,3,5,8,5]
let num2: Array<number> = [1,5,3,5,8,5]

let infos: (string | number)[] = ["Pedro", 25]

/*
*  TUPLAS
*/

let boleto:[string, number, number] = ["agua conta", 150.50, 354354]

// ARRAYS MÉTODOS


// DATAS
let aniversario:Date = new Date("2022-12-01 06:00")
console.log(aniversario.toString())