import { NavLink} from "react-router-dom";

function Header () {
    return(
        <div>
            <nav>
                <ul>
                    <NavLink to="/"><li>Accueil</li></NavLink>
                    <NavLink to="/search"><li>Recherche</li></NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Header;