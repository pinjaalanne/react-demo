import './App.css'
import { useState } from 'react'
import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import image from './assets/react.svg'


function Greeting({ name }) {
  return ((name === 'Pinja') ? <p> Welcome {name}!</p> : <p> Please log in!</p>)
}

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Pinja", title: "CEO", age: 31, number: "01" },
    { id: 2, name: "George", title: "CFO", age: 29, number: "02" },
    { id: 3, name: "Mychel", title: "COO", age: 35, number: "03" },
    { id: 4, name: "Pentti", title: "Assistant", age: 31, number: "04" },
    { id: 5, name: "Jouko", title: "IT specialist", age: 29, number: "05" },
    { id: 6, name: "Kalevi", title: "KAM", age: 35, number: "06" }
  ]);

  const [search, setSearch] = useState('');

  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  const eventHandler = (name) => {
    setPersons(persons => {
      return persons.filter(person => person.name !== name)
    })
    console.log(name);
  }

  return (
    <>
      <Header logo="Pinja Alanne" />
      <main>
        <Greeting name="Pinja" />
        <h2>This is my Application</h2>
        <img src={image} alt="no img"></img>
        <div>
          <input type="text" onChange={searchHandler} placeholder="Search"></input>
          <div className="cards">
            {persons
              .filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))
              .map((person) => <Card key={person.id} {...person}
                click={() => eventHandler(person.name)} />)}
          </div>
        </div>
        <button onClick={eventHandler}>Click!</button>
      </main >
      <Footer copyright="Copyright 2023" />
    </>
  )
}

export default App