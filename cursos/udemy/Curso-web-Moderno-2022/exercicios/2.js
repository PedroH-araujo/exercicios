function triangulo(x, y, z){
   if(x == y && y == z){
      console.log(`Triângulo Equilátero, com lados ${x},${y},${z}`)
   } else if (x == y || x == z || y == z){
      console.log(`Triangulo Isóceles, com lados ${x},${y},${z}`)
   } else {
      console.log(`Triangulo Escaleno, com lados ${x},${y},${z}`)
   }
}

triangulo(5,2,1)
triangulo(2,2,2)
triangulo(2,2,1)