import { useState } from 'react'
import Home from './routes/Home.jsx';
import Posts from './routes/Posts.jsx';
import Persons from './routes/Persons.jsx';
import About from './routes/About.jsx';
import ErrorPage from './routes/ErrorPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root'

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

  const router = createBrowserRouter([
    /*     {
          path: '/auth', element: <AuthLayout />, children: [
            { path: '/login', element: <LogIn /> }, {}]
        }, */
    {
      path: '/', element: < Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: < Home /> },
        {
          path: '/persons',
          element: (
            <Persons
              searchHandler={searchHandler}
              eventHandler={eventHandler}
              search={search}
              persons={persons}
            />
          )
        },
        { path: '/about', element: <About /> },
        { path: '/posts', element: <Posts /> }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Header logo="Pinja Alanne" />
      <main>
        <h2>This is my Application</h2>
        <img src={image} alt="no img"></img>
        </div>
        <button onClick={eventHandler}>Click!</button>
      </main >
      <Footer copyright="Copyright 2023" /> */}
    </>
  )
}

export default App