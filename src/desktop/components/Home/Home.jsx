import Space from "./Space";
import DesktopButton from "./DesktopButton";
import DesktopImage from "./DesktopImage";

function Home() {
  function hoverButton() {
    document.querySelector(".hoverDesktopBtn").style.visibility = "visible";
  }
  function hoverLeave() {
    document.querySelector(".hoverDesktopBtn").style.visibility = "hidden";
  }
  return (
    <div>
      <Space />
      <DesktopButton
        mouseover={hoverButton}
        mouseout={hoverLeave}
        classN="desktopBtn"
        title="EXPLORE"
      />
      <DesktopButton classN="hoverDesktopBtn" />
      <DesktopImage />
    </div>
  );
}

export default Home;
