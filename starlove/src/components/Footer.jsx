import { NavLink} from "react-router-dom";

function Footer () {
    return(
        <div>
            <ul>
                <NavLink to=""><li>FAQ</li></NavLink>
                <NavLink to=""><li>Contactez nous</li></NavLink>
            </ul>
        </div>

    );
}

export default Footer;
