import { createGlobalStyle } from "styled-components";

const StepPageStyle = createGlobalStyle`

.step{
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
}

.remove-button{
  
  height: 30px
}


.recipe-form {
  background-color: #ffffff; 
  border: 1px solid #dbdbdb; 
  border-radius: 4px; 
  box-sizing: border-box; 
  display: flex; 
  flex-direction: column;
  padding: 20px; 
  margin: 0 auto; 
  max-width: 400px;
  gap: 25px; 
}
.recipe-label {
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 8px;
}

.recipe-input {
  border: 1px solid #dbdbdb; 
  border-radius: 4px; 
  box-sizing: border-box; 
  font-size: 14px; 
  padding: 8px; 
  width: 100%; 
}

.button {
  background-color: tomato;
  border: none; 
  border-radius: 4px; 
  color: #ffffff; 
  font-size: 14px; 
  font-weight: 600; 
  padding: 12px 20px; 
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 350px;
  gap:20px;
}
.error-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.errors {
  display: flex;
  flex-direction: column;
}

.error {
  color: #d0021b;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
  text-align: left;
  display: flex;
  align-items: center;
}

.error::before {
  content: '\u002A';
  color: #d0021b;
  margin-right: 8px;
  align-self: flex-start;
}

.recipe-button:hover {
  background-color: #7BD5D5;
  cursor: pointer; 
}


.button:hover {
  background-color: #7BD5D5;
  cursor: pointer; 
}

`;

export default StepPageStyle;
