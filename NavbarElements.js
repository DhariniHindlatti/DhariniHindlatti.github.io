//import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
//<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>


export const Nav = styled.nav`
  background: #d6a9f5; //BGCOLOR OF THE NAV BAR
  height: 100px;
  display: flex;
  //justify-content:space-between;
  justify-content:center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: #FFFFFF;
  //font-family: 'Pacifico', cursive;
  //font-family: 'Lobster', cursive;
  font-family: 'Comfortaa';
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
`;
//own//
/*
export const Navvvv = styled.nvn`
{
position: absolute;
left: 50px;
top: 10px;
}
`;
*/
 /* 
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
*/

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw; white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/*
export const NV=styled.div`
{
  
    position: absolute;
    top: 0;
    left: 0;
}
  `;
*/
