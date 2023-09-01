import "./technology.css";

function VehicleDetail(props) {
    return(
        <div className="vehicle-detail">
            <p className="terminology">THE TERMINOLOGY</p>
            <h1 className="vehicle-heading">{props.heading}</h1>
            <p className="vehicle-description">{props.description}</p>
        </div>
    )
}

export default VehicleDetail;