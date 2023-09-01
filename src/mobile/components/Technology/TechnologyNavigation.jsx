import "./mobileTechnology.css";

function TechnologyNavigation(props) {
    return (
        <ol className="mobile-tech-navigation">
            <li className="mobile-tech-nav-item nav1" onClick={props.click1}>1</li>
            <li className="mobile-tech-nav-item nav2" onClick={props.click2}>2</li>
            <li className="mobile-tech-nav-item nav3" onClick={props.click3}>3</li>
        </ol>
    )
}

export default TechnologyNavigation;