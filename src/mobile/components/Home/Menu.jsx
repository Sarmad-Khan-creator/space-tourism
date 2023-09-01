import "./mobileHome.css";
import close from "./assets/icon-close.svg";

function Menu(props) {
  function hideMenu() {
    document.querySelector(".menu-container").style.visibility = "hidden";
  }
  return (
    <div className="menu-container">
      <div className="close">
        <img src={close} className="close-icon" onClick={hideMenu} />
      </div>
      <div className="menu-item">
        <ol className="mobile-menu-list">
          <li className="mobile-menu-list-item" onClick={props.clickHome}>
            00 HOME
          </li>
          <li
            className="mobile-menu-list-item"
            onClick={props.clickDestination}
          >
            01 DESTINATION
          </li>
          <li className="mobile-menu-list-item" onClick={props.clickCrew}>
            02 CREW
          </li>
          <li className="mobile-menu-list-item" onClick={props.clickTechnology}>
            03 TECHNOLOGY
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Menu;
