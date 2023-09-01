import "./technology.css";

function List(props) {
  return (
    <ol className="order-list">
      <li onClick={props.click1} className="olist-item">
        <a className="tech-1">1</a>
      </li>
      <li onClick={props.click2} className="olist-item">
        <a className="tech-2">2</a>
      </li>
      <li onClick={props.click3} className="olist-item">
        <a className="tech-3">3</a>
      </li>
    </ol>
  );
}

export default List;
