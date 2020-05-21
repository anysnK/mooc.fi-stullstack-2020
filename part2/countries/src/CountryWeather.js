import React, {useEffect} from 'react'

const CountryWeather = ({ country, weather }) => {

    

    const isEmpty = (obj) => {
        if (Object.keys(obj).length === 0) {
            return true
        }
        return false
    }

    if (isEmpty(country) || isEmpty(weather)) {
        return (
            <>
            </>
        )
    }

    const componentDidCatch = (error, info) => {    
        // Display fallback UI    
        this.setState({ hasError: true });    
        // You can also log the error to an error reporting service
        console.log(error, info)  
    }

    return (
        <>
            <h4>Weather in {country.capital}:</h4>
            <div>
                Temperature: {weather.current.temperature}° C,
                Humidity: {weather.current.humidity}%,
                pressure: {weather.current.pressure} hPa
            </div>
            <div>
                {weather.current.weather_description}
            </div>
            <div>
                <img src={weather.current.weather_icons[0]} alt={'weather icon'} />

            </div>
        </>
    )
}

export default CountryWeather
