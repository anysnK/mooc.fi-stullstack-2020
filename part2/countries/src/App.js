import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './Filter'
import CountryList from './CountryList'
import CountryDisplay from './CountryDisplay'
import CountryWeather from './CountryWeather'
import ErrorBoundary from './ErrorBoundary'

function App() {

  //const weatherAPIKey = process.env.REACT_APP_API_KEY
  //console.log(weatherAPIKey)
  const [searchTerms, setSearchTerms] = useState([])
  const [data, setData] = useState([])

  //import data from countries server
  useEffect(() => {

    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setData(response.data)
      })
  }, [])

  // create search terms on data change
  useEffect(() => {
    if (data.length > 0) {
      let newSearch = data.map(country => country.name.toLowerCase())

      for (let i = 0; i < data.length; i++) {
        newSearch[i] = newSearch[i]
          .concat(
            Object.values(data[i].translations)
              .toString()
              .toLowerCase())
      }

      setSearchTerms(newSearch)

    }

  }, [data])


  const [filter, setFilter] = useState('')
  const [showCountry, setShowCountry] = useState({})
  const [Weather, setWeather] = useState({})


  const handleFilterChange = (event) => {

    setFilter(event.target.value)
  }



  const handleShowCountry = (event) => {
    /* api call http://api.weatherstack.com/current
        ? access_key = YOUR_ACCESS_KEY
        & query = New York */
    setShowCountry(event)
  }

  const isEmpty = (obj) => {
    if (Object.keys(obj).length === 0) {
      return true
    }
    return false
  }

  useEffect(() => {
    if (isEmpty(showCountry)) {
      return
    }
    console.log('fetching weather data')
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${showCountry.capital}`)
      .then((response) => {
        console.log('weather data: ', response)
        if (response.data.hasOwnProperty('error')) {
          
          setWeather({})
          console.log('error response triggered:', response.data.error)
          return
        }
        setWeather(response.data)
      })
      .catch((error) => {
        setWeather({})

        console.log(error)
      })
  }, [showCountry])



  return (
    <>
      <div>
        <Filter filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <div>
        <CountryList data={data} filter={filter} searchTerms={searchTerms} onShowCountry={handleShowCountry} />
      </div>
      <div>
        <CountryDisplay country={showCountry} />
      </div>
      <ErrorBoundary>
        <div>
          <CountryWeather country={showCountry} weather={Weather} />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
