import "./mobileDestination.css";

function MobileDestinationDetail(props) {
  return(
    <div className="mobile-destination-detail">
        <h1 className="destination-heading">{props.planetHeading}</h1>
        <p className="destination-description">{props.planetDescription}</p>
        <hr className="mobile-destination-line"/>
        <h3 className="mobile-average-distance">AVG. DISTANCE</h3>
        <h2 className="distance-value">{props.km}</h2>
        <h3 className="mobile-time">EST. TRAVEL TIME</h3>
        <h2 className="time-value">{props.time}</h2>
    </div>
  ) 
}

export default MobileDestinationDetail;
