import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './Filter'
import Display from './Display'

function App() {

  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')
  const [searchTerms, setSearchTerms] = useState([])
  const [showCountry, setShowCountry] = useState({})

  //import data from countries server
  useEffect(() => {
    console.log('fetching country data from server')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setData(response.data))
    console.log('success fetching data')
  }, [])


  //create searchterm array from country data
  useEffect(() => {
    console.log('creating searchterm array...')

    let newSearch = data.map(country => country.name.toLowerCase())

    for (let i = 0; i < data.length; i++) {
      newSearch[i] = newSearch[i]
        .concat(
          Object.values(data[i].translations)
            .toString()
            .toLowerCase())
    }

    setSearchTerms(newSearch)
    console.log('created search terms: ', newSearch.length)

  }, [data])

  //handle filter change
  const handleFilterChange = (event) => {

    setFilter(event.target.value)
  }

  const handleShowCountryButton = (event) => {
    //console.log('button clicked', event)
    setShowCountry(event)
  }


  return (
    <>
      <div>
        <Filter filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <div>
        <Display filter={filter} data={data} searchTerms={searchTerms} onShowCountryButton={handleShowCountryButton} showCountry={showCountry}/>
      </div>
    </>
  );
}

export default App;
