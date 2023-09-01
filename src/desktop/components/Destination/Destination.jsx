import "./destination.css";
import MoonImage from "./Moon";
import MoonDetail from "./MoonDetail";
import BackgroundDestination from "./assets/background-destination-desktop.jpg";
import moonImage from "../Destination/assets/image-moon.webp";
import marsImage from "../Destination/assets/image-mars.webp";
import europaImage from "../Destination/assets/image-europa.webp";
import titanImage from "../Destination/assets/image-titan.webp";
import detail from "./detail";
import { useState } from "react";

function Destination(props) {
  const [planetImage, setPlanetImage] = useState(moonImage);
  const [moon, mars, europa, titan] = detail;
  const [planetDetail, setPlanetDetail] = useState(moon);

  function showMoon() {
    setPlanetImage(moonImage);
    setPlanetDetail(moon);

    document.querySelector(".moon-item").style.borderBottomColor = "white";
    document.querySelector(".mars-item").style.borderBottomColor = "transparent";
    document.querySelector(".europa-item").style.borderBottomColor = "transparent";
    document.querySelector(".titan-item").style.borderBottomColor = "transparent";
  }
  function showMars() {
    setPlanetImage(marsImage);
    setPlanetDetail(mars);

    document.querySelector(".moon-item").style.borderBottomColor = "transparent";
    document.querySelector(".mars-item").style.borderBottomColor = "white";
    document.querySelector(".europa-item").style.borderBottomColor = "transparent";
    document.querySelector(".titan-item").style.borderBottomColor = "transparent";
  }
  function showEuropa() {
    setPlanetImage(europaImage);
    setPlanetDetail(europa);

    document.querySelector(".moon-item").style.borderBottomColor = "transparent";
    document.querySelector(".mars-item").style.borderBottomColor = "transparent";
    document.querySelector(".europa-item").style.borderBottomColor = "white";
    document.querySelector(".titan-item").style.borderBottomColor = "transparent";
  }
  function showTitan() {
    setPlanetImage(titanImage);
    setPlanetDetail(titan);

    document.querySelector(".moon-item").style.borderBottomColor = "transparent";
    document.querySelector(".mars-item").style.borderBottomColor = "transparent";
    document.querySelector(".europa-item").style.borderBottomColor = "transparent";
    document.querySelector(".titan-item").style.borderBottomColor = "white";
  }
  return (
    <div>
      <p className="desktop-destination-para">
        01 <span> PICK YOUR DESTINATION</span>
      </p>
      <MoonImage image={planetImage} />
      <ul className="un-list">
        <li className="ulist-item moon-item">
          <a onClick={showMoon} className="planet-a">
            MOON
          </a>
        </li>
        <li className="ulist-item mars-item">
          <a onClick={showMars} className="planet-a">
            MARS
          </a>
        </li>
        <li className="ulist-item europa-item">
          <a onClick={showEuropa} className="planet-a">
            EUROPA
          </a>
        </li>
        <li className="ulist-item titan-item">
          <a onClick={showTitan} className="planet-a">
            TITAN
          </a>
        </li>
      </ul>
      <MoonDetail
        heading={planetDetail.heading}
        description={planetDetail.description}
        km={planetDetail.km}
        days={planetDetail.days}
      />
      <img
        className="background-destination"
        src={BackgroundDestination}
        alt="destination background image"
      />
    </div>
  );
}

export default Destination;
