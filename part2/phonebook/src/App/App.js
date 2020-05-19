import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Phonebook from './Phonebook'
import Input from './Input'
import Filter from './Filter'



const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')


    useEffect(() => {
        console.log('fetching data from db.json')
        axios
            .get('http://localhost:3001/db')
            .then(response => {
                console.log('fetch successfull')
                setPersons(persons.concat(response.data.persons))
            })
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        //console.log('button clicked', event.target)
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

        setPersons([...persons].concat({ name: newName, number: newNumber }))
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
                persons={persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()) || person.number.includes(filter))} />
            {/* <div>debug: {newName}</div> */}
        </div>
    )
}

export default App