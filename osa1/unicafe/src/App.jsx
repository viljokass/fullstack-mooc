import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Stats = ({label, content}) => <>{label} {content}<br/></>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementor = (status, setter) => () => setter(status + 1)
  const total = [good, neutral, bad].reduce((num, init) => num + init, 0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={incrementor(good, setGood)} text={"good"}/>
      <Button onClick={incrementor(neutral, setNeutral)} text={"neutral"}/>
      <Button onClick={incrementor(bad, setBad)} text={"bad"}/>
      <h1>statistics</h1>
      <Stats label={"good"} content={good}/>
      <Stats label={"neutral"} content={neutral}/>
      <Stats label={"bad"} content={bad}/>
      <Stats label={"all"} content={total}/>
      <Stats label={"average"} content={(good - bad) / total}/>
      <Stats label={"positive"} content={(good / total)*100 + "%"}/>
    </div>
  )
}

export default App