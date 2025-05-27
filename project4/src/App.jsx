import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Person from './components/Person'

import './App.css'


function App() {
  const igor = { firstName: 'Igor', lastName: 'Ivanov', age: 30, hairColor: 'Black' };
  const anna = { firstName: 'Anna', lastName: 'Smith', age: 25, hairColor: 'Blonde' };

  return (
    <div className="App">
      <Person {...igor} />
      <Person {...anna} />
    </div>
  );
}

export default App;
