import { createGlobalStyle } from "styled-components";

const IngredientPageStyle = createGlobalStyle`

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
  width: 200px;
  height: 300px; 
  border: 1px solid #ccc; 
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); 
  padding: 20px; 
  margin: 10px; 
}

/* Style the image */
.ingredient-card img {
  width: 100px; /* Set the width of the image */
  height: 100px; /* Set the height of the image */
  border-radius: 50%; /* Round the corners of the image */
}

/* Style the form and its inputs */


.ingredient-card form label {
  margin-bottom: 5px; /* Add some margin below the label */
}

.ingredient-card form input {
  text-align: center;
  /* Set the width of the input to match the width of the card */
  height: 30px; /* Set the height of the input */
  border: 1px solid #ccc; /* Add a border around the input */
  border-radius: 5px; /* Round the corners of the input */
  padding: 0 10px; /* Add some padding inside the input */
  font-size: 16px; /* Set the font size of the input */
}

/* Style the button */
button {
  width: 100%; /* Set the width of the button to match the width of the card */
  height: 40px; /* Set the height of the button */
  border: none; /* Remove the default border */
  border-radius: 5px; /* Round the corners of the button */
  background: transparent; /* Set the background color of the button */
  color: balck; /* Set the text color of the button */
  font-size: 16px; /* Set the font size of the button */
  cursor: pointer; /* Add a cursor on hover */
}

/* Style the error messages */
.ingredient-card p {
  color: red; /* Set the text color of the error messages to red */
  font-size: 14px; /* Set the font size of the error messages */
}

`;

export default IngredientPageStyle;
