import React, {useEffect} from 'react'
import ShowCountryButton from './ShowCountryButton'

const CountryList = ({ data, filter, onShowCountry, searchTerms }) => {

    let filteredData = []
    if (data.length > 0 && searchTerms.length > 0) {
        filteredData = data.filter((country, i) => {
            return searchTerms[i].includes(filter.toLowerCase())
        })
    }

    useEffect( () => {
        if(filteredData.length === 1) {
            onShowCountry(filteredData[0])
        }
    })

    //if no matching countries exist in database
    if (filteredData.length === 0) {
        return (
            <>
                no country
            </>
        )
    }
    //too many countries
    if (filteredData.length > 10) {
        return (
            <>
                too many matches, please specify further.
            </>
        )
    }
    return (
        <ul>
            {filteredData.map((country) => {
                return (
                    <li key={country.name}>
                        {country.name}
                        <ShowCountryButton country={country} onClick={onShowCountry} />
                    </li>
                )
            })}
        </ul>
    )
}

export default CountryList
