import "./crew.css";

function Bullets(props) {
  return (
    <ul className="bullets">
      <li>
        <button onClick={props.clickButton1} className="button" />
      </li>
      <li>
        <button onClick={props.clickButton2} className="button"/>
      </li>
      <li>
        <button onClick={props.clickButton3} className="button"/>
      </li>
      <li>
        <button onClick={props.clickButton4} className="button"/>
      </li>
    </ul>
  );
}

export default Bullets;
