import React from "react";
import desktopImage from "./assets/background-home-desktop.jpg";
import "./desktop.css";

function DesktopImage() {
    return (
        <img className="desktopImage" src={desktopImage} alt="desktop-image" />
    );
}

export default DesktopImage;