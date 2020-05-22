import React, { useState, useEffect } from 'react'
import Phonebook from './App/Components/Phonebook'
import Input from './App/Components/Input'
import Filter from './App/Components/Filter'
import services from './App/services/server'
import Notification from './App/Components/Notification'


const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [notification, setNotification] = useState({})


    useEffect(() => {
        services
            .getAll()
            .then(fetchedPersons => setPersons(fetchedPersons))
    }, [])

    const addPerson = (event) => {
        event.preventDefault()

        //update persons from server
        services
            .getAll()
            .then(fetchedPersons => setPersons(fetchedPersons))
            .then((response) => {
                //check if person exists already and has the same number at the same time
                if (personExists()) {
                    //person already exists with same number
                    displayNotification('error', 'identical entry already exists')
                } else if (persons.map(person => person.name).includes(newName)) {

                    if (window.confirm('Person already exists with different number. Update?')) {
                        //update number
                        let singlePerson = persons.filter(person => person.name === newName)[0]
                        services
                            .updateNumber(singlePerson, newNumber)
                            .then((response) => {
                                //console.log('success?', response)
                                let helper = [...persons]
                                let index = helper.findIndex(person => person.name === newName)
                                helper[index].number = newNumber
                                setPersons(helper)
                                displayNotification('success', 'Number updated')
                            })
                            .catch((error) => {
                                console.log(error)
                                displayNotification('error', 'couldnt update number, entry not found')
                            })
                    }
                } else {
                    //person doesnt exist 
                    services
                        .addPerson({
                            name: newName,
                            number: newNumber
                        })
                        .then((response) => {
                            displayNotification('success', `added ${newName}`)
                            setPersons([...persons].concat(response))
                        })
                        .catch(error => displayNotification('error', `there was a problem adding ${newName} to the server`))
                }
            })
    }

    const personExists = () => {
        return persons.reduce((exists, person) => {
            return (exists
                || (person.name === newName
                    && person.number === newNumber))
        }, false)
    }

    const displayNotification = (type, message) => {
        setNotification({ type: type, message: message })
        setTimeout(() => {
            //console.log('resetting notification')
            setNotification({})
        }, 5000)
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
        if (window.confirm('Do you really want to delete this entry?')) {

            let targetId = Number(event.target.value)

            services
                .deletePerson(targetId)
                .then((response) => {
                    setPersons(persons.filter(p => { return (p.id !== targetId) }))

                })
                .then(() => displayNotification('success', 'person was deleted'))
                .catch((error) => {
                    displayNotification('error', 'could not delete this entry, not present on the server')
                    setPersons(persons.filter(person => person.id !== targetId))
                })

        }
        //console.log(event.target.value)

    }




    return (
        <div>
            <h1>Phonebook</h1>
            <Notification notification={notification} />
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