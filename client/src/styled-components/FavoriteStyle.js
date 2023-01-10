import { createGlobalStyle } from "styled-components";

const FavoriteStyle = createGlobalStyle`

.recipes-f{
  background-color: #FFFFFF;
  width: 300px;
  height: 100%;
  /* border: 2px solid #000000; */
  box-shadow: rgba(0,0,0,0.403) 0px 10px 20px;
  text-align: center;
  margin: 60px;
  font-family: "Frank Ruhl Libre",Georgia,serif;
  -webkit-font-smoothing: antialiased;
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
   border: 4px solid gold; 
}

.off{
  display: none;
}

.on{
  display: none;
}


img{
  display: block;
  margin: 0;
}

`;

export default FavoriteStyle;
