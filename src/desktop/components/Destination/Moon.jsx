import "./destination.css";
import moon from "../Destination/assets/image-moon.webp";

function MoonImage(props) {
    return (
        <img className="moon-image" src={props.image} alt="moon image"/>
    )
}

export default MoonImage;