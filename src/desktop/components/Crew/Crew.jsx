import Designation from "./Designation";
import Name from "./Name";
import Detail from "./Detail";
import CrewImage from "./CrewImage";
import Bullets from "./Bullets";
import hurleyImage from "./assets/image-douglas-hurley.webp";
import markImage from "./assets/image-mark-shuttleworth.webp";
import victorImage from "./assets/image-victor-glover.webp";
import anoushehImage from "./assets/image-anousheh-ansari.webp";
import crewDetail from "./crewDetail";
import crewBackgroundImage from "./assets/background-crew-desktop.jpg";
import { useState } from "react";
import "./crew.css";

function Crew() {

    const [hurley, mark, victor, anousheh] = crewDetail;
    const [detail, setDetail] = useState(hurley);
    const [background, setBackground] = useState(hurleyImage);

    function setHurley() {
        setDetail(hurley)
        setBackground(hurleyImage)
    }
    function setMark() {
        setDetail(mark);
        setBackground(markImage);
    }
    function setVictor() {
        setDetail(victor);
        setBackground(victorImage);
    }
    function setAnousheh() {
        setDetail(anousheh);
        setBackground(anoushehImage)
    }
  return (
    <div className="crew">
      <p className="desktop-destination-para">
        02 <span> MEET YOUR CREW</span>
      </p>
      <div className="flex-container">
      <div className="detail-container">
      <Designation desig={detail.desig} />
      <Name name={detail.name} />
      <Detail detail={detail.detail} />
      <Bullets 
        clickButton1={setHurley}
        clickButton2={setMark}
        clickButton3={setVictor}
        clickButton4={setAnousheh}
      />
      </div>
      <CrewImage src={background} />
      </div>
      {/* <img src={crewBackgroundImage} alt="crew background image" className="crew-background-image"/> */}
    </div>
  );
}

export default Crew;
