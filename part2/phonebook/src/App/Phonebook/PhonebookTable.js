import React from 'react'

/* const TableContent = ({persons}) => {

} */

const PhonebookTable = ({ persons }) => {

    /* const tableContent = persons.map((person) => {
        return (
            <tr key={person.name + person.number}>
                <td>{person.name}</td><td>{person.number}</td>
            </tr>
        )
    }) */

    //console.log(tableContent)

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
                        <tr key={person.name + person.number}>
                            <td>{person.name}</td><td>{person.number}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default PhonebookTable
