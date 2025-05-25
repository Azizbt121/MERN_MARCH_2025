import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/person'


function App() {
  const [count, setCount] = useState(0)
  const igor = { firstName: 'Igor', lastName: 'Ivanov', age: 30, hairColor: 'Black' };
  const anna = { firstName: 'Anna', lastName: 'Smith', age: 25, hairColor: 'Blonde' };
   return (
        <div className="App">
            <Person {...igor}  />
            <Person {...anna}  />
        </div>
    );
}

export default App
