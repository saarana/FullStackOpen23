import { useState } from 'react'

// Component for button
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// Component for presenting the statistics line in HTML table
const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.amount}</td>
  </tr>
)

// Component for handling all stats
const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  if (sum === 0) {
    return (
      <div>No feedback given</div>
  )}

  return (
    <table>
      <tbody>
        <StatisticLine text="Good: " amount={props.good}/>
        <StatisticLine text="Neutral: " amount={props.neutral}/>
        <StatisticLine text="Bad: " amount={props.bad}/>
        <StatisticLine text="All: " amount={sum}/>
        <StatisticLine text="Average: " amount={(props.good * 1 + props.neutral * 0 + props.bad * (-1)) / sum}/>
        <StatisticLine text="Positive: " amount={props.good / sum * 100}/>
      </tbody>
    </table>
)}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good"/>
      <Button handleClick={handleNeutralClick} text="Neutral"/>
      <Button handleClick={handleBadClick} text="Bad"/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App