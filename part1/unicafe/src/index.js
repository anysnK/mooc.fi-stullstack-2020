import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  return <h1>Feedback please</h1>
}

const Statistic = ({ name, value, type }) => {
    return (
      <tr><td>{name}:</td><td>{value}{type}</td></tr>
    )
}

const Statistics = ({ feedback, names }) => {

  let sum = 0
  feedback.forEach(element => {
    sum += element
  });
  if (sum === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  const average = (feedback, sum) => {
    return((feedback[0] - feedback[2]) / sum)
  }

  const percentage = (count, sum) => {
    return (100 * count / sum).toFixed(2)
  }

  return (
    <table>
      <thead>
      </thead>
      <tbody>
      <Statistic name={names[0]} value={feedback[0]} />
      <Statistic name={names[1]} value={feedback[1]} />
      <Statistic name={names[2]} value={feedback[2]} />
      <Statistic name='Sum' value={sum} />
      <Statistic name='Average' value={average(feedback, sum)} />
      <Statistic name='Positive' value={percentage(feedback[0], sum)} type={' %'} />
      </tbody>
      <tfoot></tfoot>
    </table>
  )
}


const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //console.log('your after the start', good, neutral, bad)
  const feedback = [good, neutral, bad]
  const names = ['good', 'neutral', 'bad']





  return (
    <div>
      <Header />
      <div>
        <Button text='good' handleClick={() => { setGood(good + 1) }} />
        <Button text='neutral' handleClick={() => { setNeutral(neutral + 1) }} />
        <Button text='bad' handleClick={() => { setBad(bad + 1) }} />
      </div>
      <div>
        <h2>Statistics:</h2>
        <Statistics feedback={feedback} names={names} />
      </div>

      <div>

      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)