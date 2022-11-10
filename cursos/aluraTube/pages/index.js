import config from "../config.json";
import styled from "styled-components";

function HomePage() {
   const estilosDaHomePage = { backgroundColor: "red"}
   return (
      <div style={estilosDaHomePage}>
         <Menu />
         <Header />
         <Timeline />
      </div>
   );
}
 
export default HomePage

function Menu() {
return (
   <div>
      Menu
   </div>
)
}

const StyledHeader = 
function Header() {
return (
   <div>
      <img src="banner" />
      <img src={`https://github.com/${config.github}.png`}/>
      {config.name}
      {config.job}
   </div>
)
}

function Timeline() {
return (
   <div>
      Timeline
   </div>
)
}