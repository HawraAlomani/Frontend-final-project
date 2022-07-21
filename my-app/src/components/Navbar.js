import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";
import { FaBars} from "react-icons/fa";
import LogoImg from "./images/logoToys2.png";

const Nav = styled.nav`
  backdrop-filter: blur(14px);
  background-color: rgba(255, 255, 255, 0.2);
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  font-family: "Yeseva One", cursive;
`;

const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

const SidebarIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    height: 80px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -19px;
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavItem = styled.li`
  height: 80px;
`;

// const NavLinksScroll = styled(LinkS)`
//   color: black;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   padding-top: 40px;
//   height: 80px;
//   cursor: pointer;

//   &.active {
//     border-bottom: 3px solid #ff8087ff;
//   }
//   &:hover {
//     border-bottom: 3px solid #ff8087ff;
//     color: black;
//   }
// `;
const NavLinks = styled(LinkR)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  padding-top: 40px;
  height: 80px;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #ff8087ff;
  }
  &:hover {
    border-bottom: 3px solid #ff8087ff;
    color: black;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 40px;
  height: 80px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #ff8087ff;
  white-space: nowrap;
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fee07cff;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img
            src={LogoImg}
            style={{ width: 190, padding: 10, marginTop: 20, marginBottom: 10 }}
            alt="Logo"
          />
        </NavLogo>
        <SidebarIcon onClick={toggle}>
          <FaBars />
        </SidebarIcon>
        <NavMenu>
          {/* <NavItem>
            <NavLinksScroll to="about">About</NavLinksScroll>
          </NavItem> */}
          <NavItem>
            <NavLinks to="/categories">Categories</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/requests">Requests</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/deliv-info">Delivery Information</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Log in</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
