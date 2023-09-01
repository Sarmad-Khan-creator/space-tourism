import "./technology.css";
import technologyImage from "./assets/image-launch-vehicle-portrait.jpg";

function TechnologyImage(props) {
    return (
        <img src={props.src} alt="image" className="technology-image" />
    )
}

export default TechnologyImage;