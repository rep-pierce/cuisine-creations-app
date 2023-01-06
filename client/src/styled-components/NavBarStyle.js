import { createGlobalStyle } from "styled-components";

const NavBarStyle = createGlobalStyle`

body{
  background-color: #FFFFE0
}


.navbar {
  background-color: #FF6347;
  font-weight: 500;
  color: black; 
  display: flex; 
  align-items: center;
  justify-content: center; 
  height: 60px; 
  gap: 50px;
  font-size: 28px;
  font-family: playball
}

.navbar-item {
  background-color: transparent;
  border: none;
  outline: none;
  display: inline-block;
  padding: 12px;
  text-decoration: none;
  margin: 0 6px 6px;
  color: black;
  border-radius: 10px;
  font-size: 20px;
  font-family: playfair display;
  font-weight: 600;
}

.navbar-item:hover {
  color: #cccccc; /* Change the color of the links on hover */
}



button {
  cursor: pointer;
}
.on {
  color: gold
}
.off {
  color: #ccc;
}

`

export default NavBarStyle