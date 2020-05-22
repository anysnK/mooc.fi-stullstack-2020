import React from 'react'



const Phonebook = ({ persons, onClick }) => {

    if (persons.length === 0) {
        return (
            <>
                No numbers found
            </>
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">name</th>
                    <th scope="col">phone number</th>
                </tr>
            </thead>
            <tbody>
                {persons.map((person) => {
                    return (
                        <tr key={person.id}>
                            <td>{person.name}</td><td>{person.number}</td>
                            <td>
                                <button 
                                    onClick={onClick}
                                    value={person.id}>
                                        delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Phonebook
