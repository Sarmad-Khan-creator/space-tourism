import "./mobileCrew.css";

function CrewDetail(props) {
  return (
    <div className="mobile-crew-detail">
      <h2 className="mobile-designation">{props.designation}</h2>
      <h1 className="mobile-name">{props.name}</h1>
      <p className="mobile-description">{props.description}</p>
    </div>
  );
}

export default CrewDetail;
