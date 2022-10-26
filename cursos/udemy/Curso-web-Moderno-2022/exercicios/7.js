function bhaskara(ax2 = 0,bx = 0,c = 0){
   delta = (bx ** 2) - 4 * ax2 * c
   if (delta < 0){
      console.log('Delta é negativo')
   }else {
   let raizDelta = Math.sqrt(delta)
   x1 = (-bx + raizDelta) / (ax2 * 2)
   x2 = (-bx - raizDelta) / (ax2 * 2)
   console.log(`x1 = ${x1} e x2 = ${x2}`)
}
}

bhaskara(-5,-16,-18)