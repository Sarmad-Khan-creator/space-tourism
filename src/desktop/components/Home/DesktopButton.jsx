import "./desktop.css";

function DesktopButton(props) {
    return (
        <button onMouseOver={props.mouseover} onMouseOut={props.mouseout} className={props.classN}>{props.title}</button>
    );
}

export default DesktopButton;