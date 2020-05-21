import React from 'react'

const Input = ({ onClick, newName, newNumber, onNewNameChange, onNewNumberChange }) => {



  return (


    <form onSubmit={onClick}>
      <div>
        name: <input
          value={newName}
          onChange={onNewNameChange}
        />
      </div>
      <div>
        number: <input
          value={newNumber}
          onChange={onNewNumberChange}
        />


      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>

  )
}

export default Input
