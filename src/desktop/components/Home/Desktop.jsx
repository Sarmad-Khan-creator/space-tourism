import Topbar from "../Topbar";
import Home from "./Home";
import Destination from "../Destination/Destination";
import Crew from "../Crew/Crew";
import Technology from "../Technology/Technology";
import "../Crew/crew.css";
import crewBackground from "../Crew/assets/background-crew-desktop.jpg";
import technologyBackground from "../Technology/assets/background-technology-desktop.jpg";
import { useState } from "react";

function Desktop() {
  const [tab, setTab] = useState("home");
  // document.querySelector(".list-item0").style.borderBottom = "4px solid white";

  function clickHome() {
    setTab("home");
    document.querySelector(".list-item0").style.borderBottomColor = "white";
    document.querySelector(".list-item1").style.borderBottomColor = "transparent";
    document.querySelector(".list-item2").style.borderBottomColor = "transparent";
    document.querySelector(".list-item3").style.borderBottomColor = "transparent";
  }

  function clickDestination() {
    setTab("destination");
    document.querySelector(".list-item0").style.borderBottomColor = "transparent";
    document.querySelector(".list-item1").style.borderBottomColor = "white";
    document.querySelector(".list-item2").style.borderBottomColor = "transparent";
    document.querySelector(".list-item3").style.borderBottomColor = "transparent";
  }

  function clickCrew() {
    setTab("crew");
    document.querySelector(".list-item0").style.borderBottomColor = "transparent";
    document.querySelector(".list-item1").style.borderBottomColor = "transparent";
    document.querySelector(".list-item2").style.borderBottomColor = "white";
    document.querySelector(".list-item3").style.borderBottomColor = "transparent";

    document.querySelector("body").style.background = `url(${crewBackground}) no-repeat`;
    document.querySelector("body").style.backgroundSize = "cover";
  }

  function clickTechnology() {
    setTab("technology");
    document.querySelector(".list-item0").style.borderBottomColor = "transparent";
    document.querySelector(".list-item1").style.borderBottomColor = "transparent";
    document.querySelector(".list-item2").style.borderBottomColor = "transparent";
    document.querySelector(".list-item3").style.borderBottomColor = "white";

    document.querySelector("body").style.background = `url(${technologyBackground}) no-repeat`;
    document.querySelector("body").style.backgroundSize = "cover";
  }

  function renderConditionally() {
    if(tab === "home") {
      return <Home />
    } else if(tab === "destination") {
      return <Destination />
    } else if(tab === "crew") {
      return <Crew />
      
    } else if(tab === "technology") {
      return <Technology />
    }
  }
  return (
    <div>
      <Topbar clickHome={clickHome} clickDestination={clickDestination} clickCrew={clickCrew} clickTechnology={clickTechnology}/>
      {renderConditionally()}
    </div>
  );
}

export default Desktop;
