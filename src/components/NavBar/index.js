import { Outlet } from "react-router-dom"
import { Nav,ListItem ,StyledNavLink,NavList} from "./styled";

const NavBar = () =>{
    return (
        <>
           <Nav>
           <NavList>
                <ListItem>
                    <StyledNavLink  to="hiraganaPage">Hiragana</StyledNavLink>
                </ListItem>
                <ListItem>
                    <StyledNavLink  to="katakanaPage">Katakana</StyledNavLink>
                </ListItem>
            </NavList>
           </Nav>
            <Outlet/>
        </>
    );
};

export default NavBar;