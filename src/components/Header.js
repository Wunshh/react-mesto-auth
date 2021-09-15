import headerLogo from "../images/header__logo.svg";
import menuBotton from "../images/menu_button.svg";
import closeButton from "../images/Close_Icon2.svg";

function Нeader({ title, isOpen, onMenuClick, onClose, userData, onSignOut}) {

    return(
        <header className="header">
            <div className="header__logo-container">
                <img className="header__logo" src={headerLogo} alt="Место" />
                <button 
                    className="header__menu" 
                    type="button" 
                    onClick={isOpen ? onClose : onMenuClick} 
                    style={isOpen ? {backgroundImage: `url(${closeButton})`} : { backgroundImage: `url(${menuBotton})`} }
                />
            </div>
            <div className={`header__container ${isOpen ? "header__container_active" : ""}`}>
                <p className="header__user-email">{ userData }</p>
                <button type="button" className="header__button" onClick={onSignOut}>{title}</button>
            </div>

        </header>
    );  
}

export default Нeader;