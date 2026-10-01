import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({label, content}) => <>{label} {content}<br/></>

const Statistics = ({good, neutral, bad}) => {
  const total = [good, neutral, bad].reduce((acc, inc)=> acc + inc, 0)
  if (total === 0) {
    return <p>No feedback given</p>
  }
  return (
    <>
      <StatisticLine label={"good"} content={good}/>
      <StatisticLine label={"neutral"} content={neutral}/>
      <StatisticLine label={"bad"} content={bad}/>
      <StatisticLine label={"all"} content={total}/>
      <StatisticLine label={"average"} content={(good - bad) / total}/>
      <StatisticLine label={"positive"} content={(good / total)*100 + "%"}/>
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementor = (status, setter) => () => setter(status + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={incrementor(good, setGood)} text={"good"}/>
      <Button onClick={incrementor(neutral, setNeutral)} text={"neutral"}/>
      <Button onClick={incrementor(bad, setBad)} text={"bad"}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App