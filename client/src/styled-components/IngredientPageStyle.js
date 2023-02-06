import { createGlobalStyle } from "styled-components";

const IngredientPageStyle = createGlobalStyle`


.ingredient-button{
  background-color: tomato;
  border: 1px solid #dbdbdb; 
  border-radius: 4px; 
  box-sizing: border-box; 
  font-size: 14px; 
  padding: 8px; 
  width: 50%;
}


.button-div{
  display:flex;
  justify-content: center;
}
.button{
  margin-top: 45px;
  margin-bottom: 20px;
  border: none; 
  border-radius: 5px; 
  background: transparent; 
  color: balck; 
  font-size: 16px; 
  cursor: pointer; 
}

.add-ing{
  width: 100%; 
  border: none; 
  border-radius: 5px; 
  background: transparent; 
  color: balck; 
  cursor: pointer; 
}

.add-ing:hover{
  color: tomato;
}

.button:hover{
  color: tomato;
}
.ingredient-form {
  border-radius: 5px; 
  box-sizing: border-box; 
  display: flex; 
  flex-direction: column;
  padding: 10px; 
  margin: 0 auto; 
  max-width: 180px;
  gap: 10px; 
}

.ingredient-input {
  border: 1px solid #dbdbdb; 
  border-radius: 4px; 
  box-sizing: border-box; 
  font-size: 14px; 
  padding: 8px; 
  width: 100%; 
}

.ingredient-parent{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.ingredient-card {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: space-between; 
  width: 180px;
  height: 180px; 
  border: 1px solid #ccc; 
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); 
  padding: 20px; 
  margin: 10px; 
}

/* Style the image */
.ingredient-card img {
  width: 100px; 
  height: 100px; 
  border-radius: 50%; 
}


.ingredient-card form input {
  text-align: center;
  height: 30px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  padding: 0 10px; 
  font-size: 16px; 
}


/* Style the error messages */
.ingredient-card p {
  color: red; /* Set the text color of the error messages to red */
  font-size: 16px; /* Set the font size of the error messages */
}

`;

export default IngredientPageStyle;
