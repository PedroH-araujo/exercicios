console.log(soma(3, 4))

// function declaration / funções declaradas dessa forma são carregadas antes e por isso da pra chamar ela na 1 linha
function soma(x, y) {
   return x + y
}

// function expression / funções dessa forma só são carregadas na própria linha, então tem q chamar depois
const sub = function (x, y) {
   return x - y
}

console.log(sub(8,7))

//named function expression / pouco usada
const mult = function mult(x, y) {
   return x * y
}

