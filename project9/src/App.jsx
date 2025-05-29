import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Poke from './components/getapis'
import Pokes from './components/getapisusingaxios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Pokemon APi</h1>
     <Poke />
     {/*<Pokes />  this approach is using axios */}
    
    </>
  )
}

export default App
