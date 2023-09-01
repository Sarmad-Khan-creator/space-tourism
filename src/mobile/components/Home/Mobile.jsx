import Topbar from "../MobileTopbar";
import Menu from "./Menu";
import MobileHome from "./MobileHome";
import MobileDestination from "../Destination/MobileDestination";
import Crew from "../Crew/Crew";
import Technology from "../Technology/Technology";
import technologyBackground from "../Technology/assets/background-technology-mobile.jpg";
import crewBackground from "../Crew/assets/background-crew-mobile.jpg";
import "./mobileHome.css";
import { useState } from "react";

function Mobile() {
  const [tab, setTab] = useState("home");

  function clickHome() {
    setTab("home");
    document.querySelector(".menu-container").style.visibility = "hidden";
  }

  function clickDestination() {
    setTab("destination");
    document.querySelector(".menu-container").style.visibility = "hidden";
  }

  function clickCrew() {
    setTab("crew");
    document.querySelector(".menu-container").style.visibility = "hidden";

    document.querySelector(
      "body"
    ).style.background = `url(${crewBackground}) no-repeat`;
    document.querySelector("body").style.backgroundSize = "cover";
  }

  function clickTechnology() {
    setTab("technology");
    document.querySelector(".menu-container").style.visibility = "hidden";

    document.querySelector(
      "body"
    ).style.background = `url(${technologyBackground}) no-repeat`;
    document.querySelector("body").style.backgroundSize = "cover";
  }

  function renderConditionally() {
    if (tab === "home") {
      return <MobileHome />;
    } else if (tab === "destination") {
      return <MobileDestination />;
    } else if (tab === "crew") {
      return <Crew />;
    } else if (tab === "technology") {
      return <Technology />;
    }
  }
  return (
    <div className="position-relative">
      <Topbar />
      {renderConditionally()}
      <Menu
        clickHome={clickHome}
        clickDestination={clickDestination}
        clickCrew={clickCrew}
        clickTechnology={clickTechnology}
      />
    </div>
  );
}

export default Mobile;
