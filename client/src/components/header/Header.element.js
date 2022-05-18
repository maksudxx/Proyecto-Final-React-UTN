import { Link } from "react-router-dom";
import styled from "styled-components";
export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  position: sticky;
  text-transform: uppercase;
  top: 0;
  z-index: 99;
  background-color: #000;
  margin-bottom: 40px;
`;

export const NavbarWrapper = styled.div`
  margin: auto;
  max-width: 1000px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 100px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #141414;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  width: 150px;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  &:hover {
    background-color: #fe9f02;
    font-color: #000;
    border-bottom: 1rem solid #fff;
    transition: 0.4s ease-in;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 70px;
  }
`;

export const MenuItemLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const IconLogoMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    font-color: white important!;
    font-size: 2rem;
    color: white;
    margin-left: 10px;
  }
`;
