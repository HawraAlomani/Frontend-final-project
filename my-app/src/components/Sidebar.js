import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #ff8087ff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity:  ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  font-family: "Yeseva One", cursive;
`;
const CloseIcon = styled(FaTimes)`
  color: black;
`;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: black;
`;

const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}
`;


// const SidebarLinkScroll = styled(LinkS)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.5rem;
//   text-decoration: none;
//   list-style: none;
//   transition: 0.2s ease-in-out;
//   text-decoration: none;
//   color: black;
//   cursor: pointer;
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     color: #fee07cff;
//   }
// `;
const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fee07cff;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #fee07cff;
white-space: nowrap;
padding: 16px 64px;
color: black;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    color: #ff8087ff;
}
`;

const Sidebar = ({isOpen, toggle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                
                   <SidebarLink to='/'  onClick={toggle}>
                  Home
                  </SidebarLink>
                  <SidebarLink to='/categories'  onClick={toggle}>
                  Categories
                  </SidebarLink>
                  <SidebarLink to='/requests'  onClick={toggle}>
                  Requests
                  </SidebarLink>
                  <SidebarLink to='/deliv-info'  onClick={toggle}>
                  Delivery Information
                  </SidebarLink>
  
              </SidebarMenu>
              <SideBtnWrap>
                  <SidebarRoute to='/login'>
                  Log in
                  </SidebarRoute>
              </SideBtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
    )
  }

export default Sidebar;
  