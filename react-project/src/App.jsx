import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <fieldset>
      <h1>HEllO Dojo!</h1>
      <h2>Things that i need to go:</h2>
      <ul>
          <li>Learn React</li>
          <li>Climb Mt evrest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
      </ul>
    </fieldset>
 
  )
}

export default App
