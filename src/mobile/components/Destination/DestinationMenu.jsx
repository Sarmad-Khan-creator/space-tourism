import "./mobileDestination.css";

function DestinationMenu(props) {
  return (
    <ul className="destination-menu">
      <li className="destination-menu-item moon-item" onClick={props.clickMoon}>MOON</li>
      <li className="destination-menu-item mars-item" onClick={props.clickMars}>MARS</li>
      <li className="destination-menu-item europa-item" onClick={props.clickEuropa}>EUROPA</li>
      <li className="destination-menu-item titan-item" onClick={props.clickTitan}>TITAN</li>
    </ul>
  );
}

export default DestinationMenu;