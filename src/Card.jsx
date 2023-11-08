function Card({ name, title, age, number, click }) {
  return (<div style={age > 30 ? { background: "lightblue", color: "purple" } : { background: "lightpink", color: "white" }} className="card">
    <h3>Name: {name}</h3>
    <p>Title: {title}</p>
    <p className={age > 30 ? "old" : "young"}>Age: {age}</p>
    <p>ID: {number}</p>
    <button className="close" onClick={click}>Remove</button>
  </div >
  );
}

export default Card