import { createGlobalStyle } from "styled-components";

const LoginStyle = createGlobalStyle`

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

.button {
  background-color: #117777;
  border: none; 
  border-radius: 4px; 
  color: #ffffff; 
  font-size: 14px; 
  font-weight: 600; 
  padding: 12px 20px; 
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 400px;
  gap:20px;
}

.login-button:hover {
  background-color: #7BD5D5;
  cursor: pointer; 
}


.button:hover {
  background-color: #7BD5D5;
  cursor: pointer; 
}
`;

export default LoginStyle;
