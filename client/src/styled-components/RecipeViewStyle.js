import { createGlobalStyle } from "styled-components";

const RecipeViewStyle = createGlobalStyle`

.recipe-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.recipe-header {
  text-align: center;
}

.recipe-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  align-items: center;
}

.recipe-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}
.ingredients-steps {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  margin-top: 20px; /* add this line */
}

.ingredients {
  width: 22rem;
height: 26rem;
background: #FFFFFF;
overflow-x: scroll;
float: left;
text-align: center;
box-shadow: rgba(0,0,0,0.403) 0px 10px 20px;
gap: 20%
}

.steps{
    width: 22rem;
height: 26rem;
background: #FFFFFF;
overflow-x: scroll;
float: left;
text-align: center;
box-shadow: rgba(0,0,0,0.403) 0px 10px 20px;
}

.scrollable{
  width: 22rem;
height: 26rem;
background: #FFFFFF;
overflow-x: scroll;
float: left;
text-align: center;
box-shadow: rgba(0,0,0,0.403) 0px 10px 20px;
}
img {
  border: 4px solid tomato
}

.delete-button {
  position: absolute;
  top: 80px;
  right: 20px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  padding: 8px 12px;
}

.scrollable::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
}
.scrollable:hover{
  border: 4px solid tomato
}

.reviews {  
  width: 44em;
  height: 26rem;
  background: #FFFFFF;
  overflow-x: scroll;
  float: left;
  text-align: center;
  box-shadow: rgba(0,0,0,0.403) 0px 10px 20px;
}

.reviews::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
}
.reviews:hover{
  border: 4px solid tomato
}

.on{
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: default
}

.form {

  text-align: center;
}

.button {
  background-color: #FFFFE0;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 12px;
}

.rating-input {
  /* add your styles here */
  font-size: 16px;
  font-weight: 600;
  background-color: #ffffff;
  border: 2px solid tomato;
  border-radius: 4px;
  color: tomato;
  outline: none;
  cursor: pointer;
}

.rating-input:focus {
  border: 2px solid #333333;
  color: #333333;
}

.rating-input::-ms-expand {
  display: none;
}


`;

export default RecipeViewStyle;