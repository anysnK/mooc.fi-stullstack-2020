import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  
  //console.log('content: ')
  //console.log(props)
  //console.log(<ContentPiece part={props.parts[0]} />)
  
 
  
  //console.log(t)

  return props.parts.map(p => <ContentPiece part={p} />)
}

const ContentPiece = (props) => {
  
  //console.log('contentpiece:')
  //console.log(props)
  //debugger
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  
  let total = 0
  props.parts.forEach(p=> total += p.exercises)

    return(
      <p>Number of exercises {total}</p>
    )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (

    <div>

      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))