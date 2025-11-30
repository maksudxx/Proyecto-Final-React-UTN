import { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  IconLogoMobile,
  Menu,
  MenuItem,
  MenuItemLink,
  NavbarContainer,
  NavbarWrapper,
} from "./Header.element";

const Header = ({ isAuthenticated }) => {
  const [click, setClick] = useState(false);

  const changeClick = () => {
    setClick(!click);
    console.log(click);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <IconLogoMobile onClick={() => changeClick()}>
          <FaBars />
        </IconLogoMobile>
        <Menu click={click}>
          <MenuItem onClick={() => changeClick()}>
            <MenuItemLink to="/">Inicio</MenuItemLink>
          </MenuItem>
          <MenuItem onClick={() => changeClick()}>
            <MenuItemLink to="/videogames">Lista de Juegos</MenuItemLink>
          </MenuItem>
          {isAuthenticated ? (
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink to="/newGame">Agregar juego</MenuItemLink>
            </MenuItem>
          ) : null}
          <MenuItem onClick={() => changeClick()}>
            <MenuItemLink to="/about">Acerca de</MenuItemLink>
          </MenuItem>
          {!isAuthenticated ? (
            <MenuItem onClick={() => changeClick()}>
              <MenuItemLink to="/login">Iniciar Sesion</MenuItemLink>
            </MenuItem>
          ) : null}
        </Menu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Header;
