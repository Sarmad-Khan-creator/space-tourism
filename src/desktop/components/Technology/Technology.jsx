import "./technology.css";
import List from "./List";
import VehicleDetail from "./VehicleDetail";
import TechnologyImage from "./TechnologyImage";
import vehicleImage from "./assets/image-launch-vehicle-portrait.jpg";
import spaceportImage from "./assets/image-spaceport-portrait.jpg";
import spaceCapsuleImage from "./assets/image-space-capsule-portrait.jpg";
import technology from "./technologyDetail";
import { useState } from "react";

function Technology() {
  const [vehicle, spacePort, spaceCapsule] = technology;
  const [detail, setDetail] = useState(vehicle);
  const [image, setImage] = useState(vehicleImage);
  function setVehicle() {
    setDetail(vehicle);
    setImage(vehicleImage);

    document.querySelector(".tech-1").style.backgroundColor = "white";
    document.querySelector(".tech-1").style.color = "black";

    document.querySelector(".tech-2").style.backgroundColor = "transparent";
    document.querySelector(".tech-2").style.color = "#d0d6f9";

    document.querySelector(".tech-3").style.backgroundColor = "transparent";
    document.querySelector(".tech-3").style.color = "#d0d6f9";
  }
  function setSpaceport() {
    setDetail(spacePort);
    setImage(spaceportImage);

    document.querySelector(".tech-1").style.backgroundColor = "transparent";
    document.querySelector(".tech-1").style.color = "#d0d6f9";

    document.querySelector(".tech-2").style.backgroundColor = "white";
    document.querySelector(".tech-2").style.color = "black";

    document.querySelector(".tech-3").style.backgroundColor = "transparent";
    document.querySelector(".tech-3").style.color = "#d0d6f9";
  }
  function setSpaceCapsule() {
    setDetail(spaceCapsule);
    setImage(spaceCapsuleImage);

    document.querySelector(".tech-1").style.backgroundColor = "transparent";
    document.querySelector(".tech-1").style.color = "#d0d6f9";

    document.querySelector(".tech-2").style.backgroundColor = "transparent";
    document.querySelector(".tech-2").style.color = "#d0d6f9";

    document.querySelector(".tech-3").style.backgroundColor = "white";
    document.querySelector(".tech-3").style.color = "black";
  }
  return (
    <div className="technology">
      <p className="desktop-destination-para">
        03 <span> SPACE LAUNCH 101</span>
        <div className="flex">
          <List
            click1={setVehicle}
            click2={setSpaceport}
            click3={setSpaceCapsule}
          />
          <VehicleDetail
            heading={detail.heading}
            description={detail.description}
          />
          <TechnologyImage src={image} />
        </div>
      </p>
    </div>
  );
}

export default Technology;
