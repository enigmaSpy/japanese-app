import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    background: #fff;
    display:flex;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ListItem = styled.li`
    list-style: none;
    display: inline-block;
    padding: 10px 20px;
    @media (max-width: 768px) {
        padding: 0 20px;
    
  }
`;

export const StyledNavLink = styled(NavLink)`
    color: #333;
    text-decoration: none;
    font-size: 1.5rem;
  &::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width .3s ease-in-out;
    }

    
    &:hover, 
    &:hover::after {
    color: #000;
    width: 100%;
    }

    &:focus {
        outline: none;
    }

    &.active, 
    &.active::after {
    color: #000;
    width: 100%;
    }

    @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

