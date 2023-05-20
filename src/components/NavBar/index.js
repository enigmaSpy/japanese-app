import { Outlet } from "react-router-dom"
import { Nav,ListItem ,StyledNavLink} from "./styled";

const NavBar = () =>{
    return (
        <>
           <Nav>
           <ul>
                <ListItem>
                    <StyledNavLink  to="hiraganaPage">Hiragana</StyledNavLink>
                </ListItem>
                <ListItem>
                    <StyledNavLink  to="katakanaPage">Katakana</StyledNavLink>
                </ListItem>
            </ul>
           </Nav>
            <Outlet/>
        </>
    );
};

export default NavBar;