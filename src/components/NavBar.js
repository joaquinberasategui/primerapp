import "./Navbar.css";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav className="nav">
            <ul>
                <li> <CartWidget /> </li>
                <li> Sillas </li>
                <li> Mesas </li>
                <li> Deco </li>
                <li> Contacto </li>
            </ul>
        </nav>
    );
};

export default NavBar;
