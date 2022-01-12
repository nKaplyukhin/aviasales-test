import React from "react"
import './Header.css';
import logo from '../images/logo.svg'

const Header = (props) => {
    return (
        <div className="header">
            <img src={logo} alt="" className="header__logo"/>
        </div>
    )
}

export default Header
