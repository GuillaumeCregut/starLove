import { NavLink} from "react-router-dom";
import "./Header.css";
import logo from "../img/flamingtext.png";

function Header () {
    return(
        <div className="navbar-container">
            <nav className="navbar">
                <NavLink to="/"className="navbar-logo"><img className="nav-logo" src={logo} alt="logo Star Love"/></NavLink>
                <ul className="navbar-list">
                    <NavLink to="/" style={{ textDecoration: 'none' }}><li className="navbar-links">Accueil</li></NavLink>
                    <NavLink to="/search" style={{ textDecoration: 'none' }}><li className="navbar-links">Recherche</li></NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Header;