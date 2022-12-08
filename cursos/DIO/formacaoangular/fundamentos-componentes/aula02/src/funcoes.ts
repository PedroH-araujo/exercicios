//funções
function addNumber(x: number, y:number): number {
   return x + y
}

function addHello(name: string){
   return `Hello ${name}`
}

function CallPhone(phone: number | string) {
   return phone
}

async function getDatabase(id:number): Promise<string> {
   return "Pedro"
}

CallPhone(5468867678)

let soma: number = addNumber(4,7)