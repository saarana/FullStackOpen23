import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const MostVoted = (props) => {
  //if nothing has been voted yet:
  if (props.max === 0) {
    return (
      <div>
        <h2>Anecdote with most votes</h2>
        <div>No votes yet</div>
      </div>
    )
  }

  //...and if something has been voted:
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <div>{props.anecdote}</div>
      <div>(has {props.max} votes)</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0))

  const maxValue = Math.max(...voted)
  const indexOfMax = voted.indexOf(maxValue)

  const handleClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    console.log(random)
    setSelected(random)
  }

  const handleVote = () => {
    const updatedVotes = [...voted]
    updatedVotes[selected] += 1
    setVoted(updatedVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>(has {voted[selected]} votes)</div>
      <Button handleClick={handleClick} text="Show anecdote" />
      <Button handleClick={handleVote} text="Vote"/>
      <MostVoted max={maxValue} anecdote={anecdotes[indexOfMax]}/>
    </div>
  )
}

export default App