function aplicaDesconto (livros) {
   const desconto = 2
   livroDesconto = livros.map(livro => {
      return {...livro, preco: livro.preco (livro.preco / desconto)}
   })
   return livroDesconto
}