import { createGlobalStyle } from "styled-components";

const NavBarStyle = createGlobalStyle`

body{
  background-color: #FFFFE0
}

.nav-bar .nav-link {
    margin: 10px 0;
}

.nav-link{
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: black;
  font-family: playfair display;
  font-size: 18px;
}

.nav-bar {
    display: flex;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    background-color: #FF6347;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    z-index: 1;
    max-height: 40px;
    font-size: 18px;
    font-family: playball;
}


@media screen and (max-width: 768px) {
    .nav-bar {
        /* flex-direction: column; */
    }
    .nav-bar .nav-link {
        margin: 10px 0;
    }
}


.navbar {
  flex-direction: column;
  background-color: #FF6347;
  font-weight: 500;
  color: black; 
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  z-index: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  height: 40px; 
  gap: 30px;
  font-size: 28px;
  font-family: playball;
}

.navbar-item {
  margin-left: 10px; /* Adjust as needed */
  margin-right: 10px;
  background-color: transparent;
  border: none;
  top: 0;
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

.font-effect-3d-float{
  color: black

}

@media screen and (max-width: 768px) {
    .navbar {
        flex-direction: column;
    }
    .navbar .navbar-item {
        margin: 10px 0;
    }
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

`;

export default NavBarStyle;
