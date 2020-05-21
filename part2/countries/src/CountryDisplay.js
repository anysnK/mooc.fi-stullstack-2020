import React from 'react'

const CountryDisplay = ({ country }) => {
    //console.log('Country Display rendering: ', country)

    const isEmpty = (obj) => {
        if (Object.keys(obj).length === 0) {
            return true
        }
        return false
    }

    if (isEmpty(country)) {
        //console.log('empty country received')
        return (<> </>)
    }

    return (
        <>
            <h3>{country.name}</h3>
            <div>
                capital: {country.capital}
            </div>
            <div>
                population: {country.population}
            </div>
            <h4>Languages</h4>
            <ul>
                {country.languages.map((language) => {
                    return (
                        <li key={language.iso639_2}>
                            {language.name}
                        </li>)
                })}
            </ul>
            <img src={country.flag} alt="country_flag" width="250" height="150" />
        </>
    )
}

export default CountryDisplay
