import React from 'react'

const Filter = ({onFilterChange, filter }) => {

    return (
        <>
            find country:
            <input
                value={filter}
                onChange={onFilterChange}
            />

        </>
    )
}

export default Filter
