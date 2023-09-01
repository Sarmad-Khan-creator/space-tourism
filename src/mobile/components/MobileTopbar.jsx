import React from "react";
import logo from "../assets/logo.svg"
import menu from "../assets/icon-hamburger.svg";
import "./Home/mobileHome.css";

function MobileTopbar() {

    function showMenu() {
        document.querySelector(".menu-container").style.visibility = "visible";
    }
    return(
        <diiv className="topbar">
            <img className="logo" src={logo} alt="logo"/>
            <img className="menu" src={menu} alt="menu" onClick={showMenu}/>
        </diiv>
    )
}

export default MobileTopbar;