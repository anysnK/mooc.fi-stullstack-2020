import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Anecdote = ({ anecdotes, selected, votes }) => {
  console.log(selected)
  return (
    <>
      <div>
        <>{anecdotes[selected]}</>
      </div>
      <div>
        <>score: {votes[selected]} </>
      </div>
    </>
  )
}

const Button = ({ tag, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {tag}
    </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0))
  console.log(votes)

  const onVote = (selected) => {
    const helper = [...votes]
    helper[selected]++
    setVotes(helper)
  }

  const findMax = (array) => {
    let index=0;
    let max=array[0]
    for(let i = 1; i<array.length; i++){
      if(max < array[i]){
        max = array[i]
        index=i
      }
    }
    return index
  }

  return (

    <div>
      <Anecdote anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button tag='next' handleClick={() => { setSelected(Math.floor(Math.random() * 6)) }} />

      <Button tag='vote' handleClick={() => { onVote(selected) }} />
      <Button tag='best' handleClick={() => { setSelected(findMax(votes))}} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)