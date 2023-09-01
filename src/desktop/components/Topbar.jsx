import "./Home/desktop.css";
import logo from "../assets/logo.svg";

function Topbar(props) {
  function Data(event) {
    console.log(event.target);
  }
  return (
    <div className="desktopTopbar">
      <img className="logo" src={logo} alt="logo" />
      <hr className="top-line"/>
      <div className="desktopNavbar">
        <ol className="list">
          <li className="list-item list-item0">
            <a className="list-item-a a0" onClick={props.clickHome}>
              00 HOME
            </a>
          </li>

          <li className="list-item list-item1">
            <a className="list-item-a a1" onClick={props.clickDestination}>
              01 DESTINATION
            </a>
          </li>

          <li className="list-item list-item2">
            <a className="list-item-a a2" onClick={props.clickCrew}>
              02 CREW
            </a>
          </li>

          <li className="list-item list-item3">
            <a className="list-item-a a3" onClick={props.clickTechnology}>
              03 TECHNOLOGY
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Topbar;
