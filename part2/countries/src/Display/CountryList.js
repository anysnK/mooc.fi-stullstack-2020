import React from 'react'
import ShowCountryButton from './ShowCountryButton'

const CountryList = ({ filteredData, onShowCountryButton }) => {
    return (
        <ul>
            {filteredData.map((country) => {
                return (
                    <li key={country.topLevelDomain}>
                        {country.name}
                        <ShowCountryButton country={country} onClick={onShowCountryButton}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default CountryList
