import { createGlobalStyle } from "styled-components";

const FavoriteStyle = createGlobalStyle`

.recipes{
  background-color: #F1F9F8;
  width: 300px;
  border: 2px solid #000000;
  box-shadow: rgba(0,0,0,0.403) 0px 10px 20px;
  text-align: center;
  margin: 60px;
  font-family: proza libre;
}

.recipe-favorites{
  margin-left: 50px;
  display: inline-block;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.recipes:hover {
   border-color: gold; 
}

img{
  width: 200px;
  height: 200px;
}

`;

export default FavoriteStyle;
