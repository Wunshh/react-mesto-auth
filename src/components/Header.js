import headerLogo from "../images/header__logo.svg";
import menuBotton from "../images/menu_button.svg";
import closeButton from "../images/Close_Icon2.svg";
import { Route, Link } from 'react-router-dom';

function Нeader({ title, isOpen, onMenuClick, onClose, userData, onSignOut}) {

    return(
        <header className="header">
            <Route exact path="/">
                <div className="header__menu">
                    <div className="header__logo-container">
                        <img className="header__logo" src={headerLogo} alt="Место" />
                        <button 
                            className="header__menu-button" 
                            type="button" 
                            onClick={isOpen ? onClose : onMenuClick} 
                            style={isOpen ? {backgroundImage: `url(${closeButton})`} : { backgroundImage: `url(${menuBotton})`} }
                        />
                    </div>
                    <div className={`header__container ${isOpen ? "header__container_active" : ""}`}>
                        <p className="header__user-email">{ userData }</p>
                        <button type="button" className="header__button" onClick={onSignOut}>{title}</button>
                    </div>
                </div>
            </Route>

            <Route exact path="/signin">
                <div className="header__mob-menu">
                    <img className="header__logo" src={headerLogo} alt="Место" />
                    <Link to={"/signup"} className="header__link">Регистрация</Link>
                </div>
            </Route>

            <Route exact path="/signup">
                <div className="header__mob-menu">
                    <img className="header__logo" src={headerLogo} alt="Место" />
                    <Link to={"/signin"} className="header__link">Войти</Link>
                </div>
            </Route>
        </header>
    );  
}

export default Нeader;