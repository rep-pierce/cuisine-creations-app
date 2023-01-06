import { createGlobalStyle } from "styled-components";

const UserPageStyle = createGlobalStyle`

.login-form {
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
.login-label {
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 8px;
}

.login-input {
  border: 1px solid #dbdbdb; 
  border-radius: 4px; 
  box-sizing: border-box; 
  font-size: 14px; 
  padding: 8px; 
  width: 100%; 
}

.login-button {
  background-color: #117777;
  border: none; 
  border-radius: 4px; 
  color: #ffffff; 
  font-size: 14px; 
  font-weight: 600; 
  padding: 12px 20px; 
  width: 100%; 
}

.login-button:hover {
  background-color: #7BD5D5;
  cursor: pointer; 
}

.parent-div{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
}
.container {
width: 22rem;
height: 26rem;
background: #FFFFFF;
overflow-x: scroll;
float: left;
text-align: center;
box-shadow: rgba(0,0,0,0.403) 0px 10px 20px;
}

.container div {

}



.on{
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: default
}
.off{
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: default
}

`;

export default UserPageStyle;