import "./destination.css";

function MoonDetail(props) {
  return (
    <div className="moon-detail">
      <h1 className="moon-heading">{props.heading}</h1>
      <p className="moon-description">{props.description}</p>
      <hr />
      <div className="distance-container">
        <p className="distance">AVG. DISTANCE</p>
        <p className="km">{props.km}</p>
      </div>
      <div className="time-container">
        <p className="time">EST. TRAVEL TIME</p>
        <p className="days">{props.days}</p>
      </div>
    </div>
  );
}

export default MoonDetail;
