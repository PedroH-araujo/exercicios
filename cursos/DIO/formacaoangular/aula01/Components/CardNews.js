class CardNews extends HTMLElement { // HTMLElements faz a classe ter o comportamento de um HTML
   constructor(){
      super() //Super faz o construtor herdar o comportamento da classe

      const shadow = this.attachShadow({mode: "open"})//Faz uma sombra, anexa ela á classe, mode close é que o mundo exterior não pode mexer, só pode ser modificado ou manipulado aqui dentro;

      shadow.innerHTML = "<h1>Hello World</h1>"
      shadow.innerHTML += "<h1>Relaxa vai dar certo</h1>"

      const style = document.createElement("style")
      style.textContent = `
      h1{
         color:green;
         text-decoration:underline;
      }
      `
      shadow.appendChild(style)
   }
}

customElements.define('card-news',CardNews) //nome e depois a classe que ele vai chamar