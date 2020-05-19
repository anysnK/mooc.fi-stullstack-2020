import React from 'react'
//import PhonebookTable from './Phonebook/PhonebookTable'

const Filter = ({filter, onFilterChange }) => {


    return (
        <div>
            Filter: <input
                value={filter}
                onChange={onFilterChange}
            />
        </div>
    )
}

export default Filter