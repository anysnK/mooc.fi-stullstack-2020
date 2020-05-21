import React, { useState, useEffect } from 'react'
import Phonebook from './App/Components/Phonebook'
import Input from './App/Components/Input'
import Filter from './App/Components/Filter'
import services from './App/services/server'


const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')


    useEffect(() => {
        services
            .getAll()
            .then(fetchedPersons => setPersons(fetchedPersons))
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        //console.log('button clicked', event.target)
        services
            .getAll()
            .then(fetchedPersons => setPersons(fetchedPersons))
            .catch((error) => { console.log('error while fetching data:', error) })
            .then(() => {
                let names = persons.map(person => person.name)
                if (names.includes(newName)) {
                    window.alert(`Phonebook already contains ${newName}`)
                    return
                }

                let numbers = persons.map(person => person.number)
                if (numbers.includes(newNumber)) {
                    window.alert(`Phonebook already contains person with number ${newNumber}`)
                    return
                }

                services.addPerson({ name: newName, number: newNumber, id: persons.length + 1 })
                    .then(() => setPersons([...persons].concat({ name: newName, number: newNumber, id: persons.length + 1 })))
            })
    }

    const handleNewNameChange = (event) => {
        event.preventDefault()
        //console.log('changed the newName', event.target.value)
        setNewName(event.target.value)
    }

    const handleNewNumberChange = (event) => {
        event.preventDefault()
        //console.log('changed the newNumber', event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        event.preventDefault()
        //console.log('changed the newNumber', event.target.value)
        setFilter(event.target.value)
    }

    const handleDeleteButton = (event) => {
        event.preventDefault()
        if (window.confirm('Do you really want to delete this person?')) {
            let targetId = event.target.value
            services.deletePerson(targetId)
                .then((response) => {
                    console.log(response)
                    services.getAll()
                        .then((updatedPersons) => setPersons(updatedPersons))
                })

        }
        //console.log(event.target.value)

    }


    return (
        <div>
            <h1>Phonebook</h1>
            <h3>Add a new person to Phonebook</h3>
            <Input onClick={addPerson}
                newName={newName}
                newNumber={newNumber}
                onNewNameChange={handleNewNameChange}
                onNewNumberChange={handleNewNumberChange}
            />

            <h3>Numbers:</h3>
            <Filter
                filter={filter}
                onFilterChange={handleFilterChange}
            />
            <Phonebook
                persons={persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()) || person.number.includes(filter))}
                onClick={handleDeleteButton} />
            {/* <div>debug: {newName}</div> */}
        </div>
    )
}

export default App