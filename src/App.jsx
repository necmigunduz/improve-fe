import React, { useState } from 'react'
import './App.css'
import ProfileCards from './pages/ProfileCards/ProfileCards.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  const increaseCount = () => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    setCount(count - 1)
  }

  return (
    <>
      <p>Count: {count} </p>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={() => setCount(0)}>Reset Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <ProfileCards n={5} /> 
    </>
  )
}

export default App
