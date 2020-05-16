import React from 'react'

const Total = ({ course }) => {
    
    const sum = course.parts.reduce( (sum, part) => {
        return sum + part.exercises
    }, 0)
    
    return(
        <>
            Number of exercises: {sum}
        </>
    ) 
  }

export default Total