import "./mobileCrew.css";
import MobileCrewImage from "./MobileCrewImage";
import hurleyImage from "./assets/image-douglas-hurley.webp";
import markImage from "./assets/image-mark-shuttleworth.webp";
import victorImage from "./assets/image-victor-glover.webp";
import anoushehImage from "./assets/image-anousheh-ansari.webp";
import NavigationDots from "./NavigationDots";
import CrewDetail from "./CrewDetails";
import mobileCrewDetail from "./mobileCrewDetail";
import { useState } from "react";

function Crew() {
  const [hurley, mark, victor, anousheh] = mobileCrewDetail;
  const [detail, setDetail] = useState(hurley);
  const [crewImage, setCrewImage] = useState(hurleyImage);

  function setHurley() {
    setDetail(hurley);
    setCrewImage(hurleyImage);

    document.querySelector(".btn-1").style.backgroundColor = "white";
    document.querySelector(".btn-2").style.backgroundColor = "#d0d6f9";
    document.querySelector(".btn-3").style.backgroundColor = "#d0d6f9";
    document.querySelector(".btn-4").style.backgroundColor = "#d0d6f9";
  }
  function setMark() {
    setDetail(mark);
    setCrewImage(markImage);

    document.querySelector(".btn-1").style.backgroundColor = "#d0d6f9";
    document.querySelector(".btn-2").style.backgroundColor = "white";
    document.querySelector(".btn-3").style.backgroundColor = "#d0d6f9";
    document.querySelector(".btn-4").style.backgroundColor = "#d0d6f9";
  }
  function setVictor() {
    setDetail(victor);
    setCrewImage(victorImage);

    document.querySelector(".btn-1").style.backgroundColor = "#d0d6f9";
    document.querySelector(".btn-2").style.backgroundColor = "#d0d6f9";
    document.querySelector(".btn-3").style.backgroundColor = "white";
    document.querySelector(".btn-4").style.backgroundColor = "#d0d6f9";
  }
  function setAnousheh() {
    setDetail(anousheh);
    setCrewImage(anoushehImage);

    document.querySelector(".btn-1").style.backgroundColor = "#d0d6f9";
    document.querySelector(".btn-2").style.backgroundColor = "#d0d6f9";
    document.querySelector(".btn-3").style.backgroundColor = "#d0d6f9";
    document.querySelector(".btn-4").style.backgroundColor = "white";
  }
  return (
    <div className="mobile-crew">
      <MobileCrewImage src={crewImage} />
      <hr className="mobile-crew-line" />
      <NavigationDots
        click1={setHurley}
        click2={setMark}
        click3={setVictor}
        click4={setAnousheh}
      />
      <CrewDetail
        designation={detail.desig}
        name={detail.name}
        description={detail.detail}
      />
    </div>
  );
}

export default Crew;
