import "./mobileTechnology.css";
import vehicleImage from "./assets/image-launch-vehicle-landscape.jpg";
import spaceportImage from "./assets/image-spaceport-landscape.jpg";
import spaceCapsuleImage from "./assets/image-space-capsule-landscape.jpg";
import TechnologyNavigation from "./TechnologyNavigation";
import mobileTechnology from "./mobileTechnologyDetail";
import { useState } from "react";

function Technology() {
  const [vehicle, spacePort, spaceCapsule] = mobileTechnology;
  const [detail, setDetail] = useState(vehicle);
  const [image, setImage] = useState(vehicleImage);
  function setVehicle() {
    setDetail(vehicle);
    setImage(vehicleImage);

    document.querySelector(".nav1").style.backgroundColor = "white";
    document.querySelector(".nav1").style.color = "black";

    document.querySelector(".nav2").style.backgroundColor = "transparent";
    document.querySelector(".nav2").style.color = "#d0d6f9";

    document.querySelector(".nav3").style.backgroundColor = "transparent";
    document.querySelector(".nav3").style.color = "#d0d6f9";
  }
  function setSpaceport() {
    setDetail(spacePort);
    setImage(spaceportImage);

    document.querySelector(".nav1").style.backgroundColor = "transparent";
    document.querySelector(".nav1").style.color = "#d0d6f9";

    document.querySelector(".nav2").style.backgroundColor = "white";
    document.querySelector(".nav2").style.color = "black";

    document.querySelector(".nav3").style.backgroundColor = "transparent";
    document.querySelector(".nav3").style.color = "#d0d6f9";
  }
  function setSpaceCapsule() {
    setDetail(spaceCapsule);
    setImage(spaceCapsuleImage);

    document.querySelector(".nav1").style.backgroundColor = "transparent";
    document.querySelector(".nav1").style.color = "#d0d6f9";

    document.querySelector(".nav2").style.backgroundColor = "transparent";
    document.querySelector(".nav2").style.color = "#d0d6f9";

    document.querySelector(".nav3").style.backgroundColor = "white";
    document.querySelector(".nav3").style.color = "black";
  }
  return (
    <div className="mobile-technology">
      <h2 className="title">
        03 <span className="title-span"> SPACE LAUNCH 101</span>
      </h2>
      <img className="mobile-tech-image" src={image} alt="" />
      <TechnologyNavigation
        click1={setVehicle}
        click2={setSpaceport}
        click3={setSpaceCapsule}
      />
      <div className="technology-detail">
        <h4 className="mobile-terminology">THE TERMINOLOGY</h4>
        <h1 className="mobile-vehicle-title">{detail.heading}</h1>
        <p className="mobile-vehicle-description">{detail.description}</p>
      </div>
    </div>
  );
}

export default Technology;
