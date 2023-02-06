import { createGlobalStyle } from "styled-components";

const FavoriteStyle = createGlobalStyle`

.recipes{
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
.button{
  font-family: playfair display;
  border: none;
  background-color: transparent;
  font-weight: bold;
  margin-bottom: 10px;
  color:  #FF6347;
  font-size: 20px;

  
}

.confetti {
  max-height: 100%;
	min-height: 100vh;
}
.button:hover{
  color:  #FF7961;

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
