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
.container::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
}

.container:hover{
  border: 4px solid tomato
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

.delete-button {
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 12px;
}

`;

export default UserPageStyle;
