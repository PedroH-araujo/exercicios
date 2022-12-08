class Cardnews extends HTMLElement {
   constructor() {
      super()

      const shadow = this.attachShadow({ mode: "open" })
      shadow.appendChild(this.build())
      shadow.appendChild(this.styles())
   }

   build() {
      const componentRoot = document.createElement("div")
      componentRoot.classList.add("card")

      const cardLeft = document.createElement("div")
      cardLeft.classList.add("card_left")

      const autor = document.createElement("span")
      autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

      const linkTitle = document.createElement("a")
      linkTitle.textContent = this.getAttribute("title")
      linkTitle.href = this.getAttribute("link-url") || ("https://www.youtube.com")

      const newsContent = document.createElement("p")
      newsContent.textContent = this.getAttribute("content")

      cardLeft.appendChild(autor)
      cardLeft.appendChild(linkTitle)
      cardLeft.appendChild(newsContent)

      const cardRight = document.createElement("div")
      cardRight.classList.add("card_right")

      const newsImg = document.createElement("img")
      newsImg.src = this.getAttribute("photo")
      newsImg.alt = "Imagem Darth Vader"

      cardRight.appendChild(newsImg)

      componentRoot.appendChild(cardLeft)
      componentRoot.appendChild(cardRight)

      return componentRoot
   }

   styles() {
      const style = document.createElement("style")
      style.textContent = `
      .card{
         width: 80%;
         border: 1px solid black;
         box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
         display: flex;
         flex-direction: row;
         justify-content: space-between;
      }
      
      .card_left{
         display: flex;
         flex-direction: column;
         justify-content: center;
         padding-left: 10px;
      }
      
      .card_left > span {
         font-weight: 400;
      }
      
      .card_left > a {
         margin-top: 15px;
         font-size: 25px;
         text-decoration: none;
         color: black;
         font-weight: bolder;
      }
      
      .card_left > p{
         color: grey;
      }
      `


      return style
   }
}

customElements.define("card-news", Cardnews)