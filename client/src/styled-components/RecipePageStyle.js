import { createGlobalStyle } from "styled-components";

const RecipePageStyle = createGlobalStyle`

.recipes{
  background-color: #F1F9F8;
  width: 300px;
  border: 2px solid #000000;
  box-shadow: rgba(0,0,0,0.403) 0px 10px 20px;
  text-align: center;
  margin: 60px;
  font-family: proza libre;
}

.recipe-page{
  margin-left: 50px;
  display: inline-block;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.font-effect{
  display: flex;
  font-family: Pacifico;
  justify-content: center;
  font-size: 50px;
  /* color: #117777; */
  background: linear-gradient( #004D4D, #A0D3E8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}


.recipes:hover {
   border-color: gold; 
}

img{
  width: 200px;
  height: 200px;
}

`;

export default RecipePageStyle;
