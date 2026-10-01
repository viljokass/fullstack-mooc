import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Stats = ({label, count}) => <>{label} {count}<br/></>

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
      <Stats label={"good"} count={good}/>
      <Stats label={"neutral"} count={neutral}/>
      <Stats label={"bad"} count={bad}/>
    </div>
  )
}

export default App