## Destructuring
```js
function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Pinja", title: "CEO", age: 31, number: "01" },
    { id: 2, name: "George", title: "CFO", age: 29, number: "02" },
    { id: 3, name: "Mychel", title: "COO", age: 35, number: "03" },
    { id: 4, name: "Pentti", title: "Assistant", age: 31, number: "04" },
    { id: 5, name: "Jouko", title: "IT specialist", age: 29, number: "05" },
    { id: 6, name: "Kalevi", title: "KAM", age: 35, number: "06" }
  ]); }
  ```
  ```js
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
```

## Images in react
```js
import image from './assets/react.svg'
<img src={image} alt="no img"></img>
```

## Styling in react
In style:
```js
return (<div style={age > 30 ? { background: "white", color: "black" } : { background: "lightpink", color: "white" }} )
```
Or outline using classNames:
```js
className={age > 30 ? "old" : "young"}
```
```css
.young {
  color: darkblue;
}
```
### Handling events:
```js
const eventHandler = (name) => {
    setPersons(persons => {
      return persons.filter(person => person.name !== name)
    })
    console.log(name);
  }
```
```js
<button className="close" onClick={click}>Remove</button>
```
### Passing to child component:
```js
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
```
```js
click={() => eventHandler(person.name)}
```
## Passing parameters to event handlers:
```js 
const eventHandler = (name) => {
    setPersons(persons => {
      return persons.filter(person => person.name !== name)
    })
    console.log(name);
  }
```
```js
click={() => eventHandler(person.name)}
```
```js
<button className="close" onClick={click}>Remove</button>
```
## Modifying states:
```js
 const [persons, setPersons] = useState([
    { id: 1, name: "Pinja", title: "CEO", age: 31, number: "01" }])
```
```js
const eventHandler = (name) => {
    setPersons(persons => {
      return persons.filter(person => person.name !== name)
    })}
```
## Conditional rendering:
```js
function Greeting({ name }) {
  return ((name === 'Pinja') ? <p> Welcome {name}!</p> : <p> Please log in!</p>)
}
```
