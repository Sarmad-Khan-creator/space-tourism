import "./mobileCrew.css";

function NavigationDots(props) {
  return (
    <ul className="navigation-dots">
      <li className="navigation-dots-item">
        <button className="dots-button btn-1" onClick={props.click1}/>
      </li>
      <li className="navigation-dots-item">
        <button className="dots-button btn-2" onClick={props.click2}/>
      </li>
      <li className="navigation-dots-item">
        <button className="dots-button btn-3" onClick={props.click3}/>
      </li>
      <li className="navigation-dots-item">
        <button className="dots-button btn-4" onClick={props.click4}/>
      </li>
    </ul>
  );
}

export default NavigationDots;