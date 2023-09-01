import "./mobileDestination.css";
import MobileDestinationTitle from "./MobileDestinationTitle";
import moonImage from "./assets/image-moon.webp";
import marsImage from "./assets/image-mars.webp";
import europaImage from "./assets/image-europa.webp";
import titanImage from "./assets/image-titan.webp";
import DestinationMenu from "./DestinationMenu";
import MobileDestinationDetail from "./MobileDestinationDetail";
import { useState } from "react";
import mobileDetail from "./mobileDetail";

function MobileDestination() {
  const [moon, mars, europa, titan] = mobileDetail;
  const [planet, setPlanet] = useState(moon);
  const [planetImage, setPlanetImage] = useState(moonImage);
  function setMoon() {
    setPlanet(moon);
    setPlanetImage(moonImage);

    document.querySelector(".moon-item").style.borderBottomColor = "white";
    document.querySelector(".mars-item").style.borderBottomColor =
      "transparent";
    document.querySelector(".europa-item").style.borderBottomColor =
      "transparent";
    document.querySelector(".titan-item").style.borderBottomColor =
      "transparent";
  }
  function setMars() {
    setPlanet(mars);
    setPlanetImage(marsImage);

    document.querySelector(".moon-item").style.borderBottomColor =
      "transparent";
    document.querySelector(".mars-item").style.borderBottomColor = "white";
    document.querySelector(".europa-item").style.borderBottomColor =
      "transparent";
    document.querySelector(".titan-item").style.borderBottomColor =
      "transparent";
  }
  function setEuropa() {
    setPlanet(europa);
    setPlanetImage(europaImage);

    document.querySelector(".moon-item").style.borderBottomColor =
      "transparent";
    document.querySelector(".mars-item").style.borderBottomColor =
      "transparent";
    document.querySelector(".europa-item").style.borderBottomColor = "white";
    document.querySelector(".titan-item").style.borderBottomColor =
      "transparent";
  }
  function setTitan() {
    setPlanet(titan);
    setPlanetImage(titanImage);

    document.querySelector(".moon-item").style.borderBottomColor =
      "transparent";
    document.querySelector(".mars-item").style.borderBottomColor =
      "transparent";
    document.querySelector(".europa-item").style.borderBottomColor =
      "transparent";
    document.querySelector(".titan-item").style.borderBottomColor = "white";
  }
  return (
    <div className="mobile-destination">
      <MobileDestinationTitle />
      <img src={planetImage} className="mobile-moon-image" />
      <DestinationMenu
        clickMoon={setMoon}
        clickMars={setMars}
        clickEuropa={setEuropa}
        clickTitan={setTitan}
      />
      <MobileDestinationDetail
        planetHeading={planet.heading}
        planetDescription={planet.description}
        km={planet.km}
        time={planet.time}
      />
    </div>
  );
}

export default MobileDestination;
