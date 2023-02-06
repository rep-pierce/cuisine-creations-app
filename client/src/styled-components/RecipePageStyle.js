import { createGlobalStyle } from "styled-components";

const RecipePageStyle = createGlobalStyle`

.recipes{
  background-color: #FFFFFF;
  width: 300px;
  height: 50%;
  /* border: 4px solid #4F4F4F; */
  box-shadow: rgba(0,0,0,0.403) 0px 10px 20px;
  text-align: center;
  margin: 60px;
  font-family: playfair display;
  padding: 0;
}

p{
  margin-right: 150px;
  font-weight: bold;
}
.bookmark{
  font-family: playfair display;
  border: none;
  background-color: transparent;
  font-weight: bold;
  margin-left: 240px;
  margin-bottom: 10px;
  font-size: 20px;
  color:  #FF6347;

}
.button{
  font-family: playfair display;
  border: none;
  background-color: transparent;
  font-weight: bold;
  margin-left: 200px;
  margin-bottom: 10px;
  font-size: 20px;
  color:  #FF6347;

}

.button:hover{
  color:  #FF7961;


}

.recipe-page{
  margin-left: 50px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:0;
}

.font-effect{
  display: flex;
  font-family: Pacifico;
  justify-content: center;
  font-size: 60px;
  /* color: #117777; */
  background: linear-gradient( #8B0000, #FFD700);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

img{
  display: block;
  margin: 0;
  height: 20rem;
  width: 100%; 
  /* object-fit: cover; */
}

.recipes:hover {
   border: 4px solid gold; 
}

.on{
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: default
}

`;

export default RecipePageStyle;
