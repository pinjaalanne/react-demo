import Card from '../components/Card.jsx'

function Persons({ persons, searchHandler, search, eventHandler }) {

    return (
        <>
            <main>
                <h2>
                    Persons
                </h2>
                <div>
                    <input type="text" onChange={searchHandler} placeholder="Search"></input>
                    <div className="cards">
                        {persons
                            .filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))
                            .map((person) => <Card key={person.id} {...person}
                                click={() => eventHandler(person.name)} />)}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Persons