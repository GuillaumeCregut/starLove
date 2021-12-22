import { NavLink} from "react-router-dom";
import "./Footer.css";


function Footer () {
    return(
        <div className="footer-bar">
            <ul className="footer-list">
                <NavLink to="" className="footer-navlink" style={{ textDecoration: 'none' }}><li className="footer-links">FAQ</li></NavLink>
                <NavLink to="" className="footer-navlink" style={{ textDecoration: 'none' }}><li className="footer-links">Contactez nous</li></NavLink>
                <li className="footer-links">Copyright</li>
            </ul>
        </div>

    );
}

export default Footer;
