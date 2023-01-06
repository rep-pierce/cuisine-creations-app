import { createGlobalStyle } from "styled-components";

const RecipeViewStyle = createGlobalStyle`

div {
  margin: 0 auto;
  text-align: center;
  font-family: sans-serif;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 2em;
  font-weight: bold;
  margin: 20px 0;
  color: #333;
}

img {
  max-width: 100%;
  height: auto;
  border: 10px solid #333;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

button {
  background-color: #333;
  color: white;
  font-size: 1em;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  float: right;
}

button:hover {
  background-color: #444;
}

button:active {
  transform: translateY(2px);
}

p {
  font-size: 1.2em;
  line-height: 1.5;
  font-style: italic;
  margin: 20px 0;
}

.on{
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: default
}



`;

export default RecipeViewStyle;