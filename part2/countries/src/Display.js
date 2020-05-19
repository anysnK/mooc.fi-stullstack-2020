import React from 'react'
import CountryDisplay from './Display/CountryDisplay'
import CountryList from './Display/CountryList'
import Weather from './Display/Weather'

const Display = ({ data, filter, searchTerms, onShowCountryButton, showCountry }) => {


    let filteredData = []
    //do not try to create filtered data from empty searchTerms or data:
    if (data.length > 0 && searchTerms.length > 0) {
        filteredData = data.filter((country, i) => {
            return searchTerms[i].includes(filter.toLowerCase())
        })

    }



    //Rendering Components
    if (filter.length === 0) {
        return (
            <>
                please enter countryname.
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

    //if no matching countries exist in database
    if (filteredData.length === 0) {
        return (
            <>
                no such country found.
            </>
        )
    }

    //if you found the one your looking for
    if (filteredData.length === 1) {
        return (
            <>
                <CountryDisplay country={filteredData[0]} />
                
            </>
        )
    }

    // if you havent found the one, but few enough for a list
    return (
        <>
            found {filteredData.length} countries:
            <CountryList filteredData={filteredData} onShowCountryButton={onShowCountryButton}/>
            <CountryDisplay country={showCountry} />
            
        </>
    )
}

export default Display