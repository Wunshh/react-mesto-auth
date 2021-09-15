import headerLogo from "../images/header__logo.svg";
import { Link } from 'react-router-dom';

function NavBar({ title, url}) {
    return (
        <div className="navigation">
                <img className="header__logo" src={headerLogo} alt="Место" />
                <Link to={url} className="navigation__link">{title}</Link>
        </div>
    )
}

export default NavBar;