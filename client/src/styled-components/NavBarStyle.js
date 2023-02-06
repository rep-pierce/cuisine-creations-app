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
  font-weight: bold;
}

.nav-bar {
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
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



.nav-link:hover {
  color: #cccccc;
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
