import React from "react";
import backgroundImage from "../Home/assets/background-home-mobile.jpg";
import "./mobileHome.css";

function Background() {
    return (
        <img className="background-image" src={backgroundImage} alt="background-image" />
    )
}

export default Background;