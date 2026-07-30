import "./Header.css";
import logo from "../assets/logo.png"

function Header(){
    return(
        <Header>
            <img id="logo" src={logo} alt="Logo SpotiPasFy"/>
        </Header>
    );
}

export default Header;