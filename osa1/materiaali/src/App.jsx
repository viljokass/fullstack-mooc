import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {

  const [leftClicks, setLeftClicks]   = useState(0)
  const [rightClicks, setRightClicks] = useState(0)
  const [allClicks, setAllClicks]     = useState([])
  const [total, setTotalClicks]       = useState(0)

  const handleLeftClick = () => {
    const updated = leftClicks + 1
    setLeftClicks(updated)
    setAllClicks(allClicks.concat("L"))
    setTotalClicks(updated + rightClicks)
  }

  const handleRightClick = () => {
    const updated = rightClicks + 1
    setRightClicks(updated)
    setAllClicks(allClicks.concat("R"))
    setTotalClicks(leftClicks + updated)
  }

  return (
    <div>
      <div>
        {leftClicks}
        <Button onClick={handleLeftClick} text={"left"}/>
        <Button onClick={handleRightClick} text={"right"}/>
        {rightClicks}
      </div>
      <History allClicks={allClicks} />
    </div>
  )
}

export default App