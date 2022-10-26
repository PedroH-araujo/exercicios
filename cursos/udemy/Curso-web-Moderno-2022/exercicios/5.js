function valor(x){
   let res = x.toFixed(2).replace('.',',')
   return console.log(`R$${res}`)
}

valor(0.30000000000000004)