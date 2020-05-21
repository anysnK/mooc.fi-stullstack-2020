import React from 'react'

const ShowCountryButton = ({country, onClick}) => {
  return (
    <button onClick={onClick.bind(this, country)} value={country}>
      show
    </button>
  )
}

export default ShowCountryButton
