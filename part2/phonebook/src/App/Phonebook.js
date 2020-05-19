import React from 'react'

import PhonebookTable from './Phonebook/PhonebookTable'


const Phonebook = ({ persons }) => {

    if (persons.length === 0) {
        return(
            <>
                No numbers found
            </>
        )
    }

    return (
        <>
            <PhonebookTable persons={persons} />
        </>
    )
}

export default Phonebook
