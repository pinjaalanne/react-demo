function Card({ name, title, age, number, click }) {
  return (<div style={age > 30 ? { background: "white", color: "#216a62" } : { background: "rgb(139, 82, 109)", color: "white" }} className="card">
    <h3>Name: {name}</h3>
    <p>Title: {title}</p>
    <p className={age > 30 ? "old" : "young"}>Age: {age}</p>
    <p>ID: {number}</p>
    <button className="close" onClick={click}>Remove</button>
  </div >
  );
}

export default Card