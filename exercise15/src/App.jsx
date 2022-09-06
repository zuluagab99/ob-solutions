import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tasklist from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Tasklist></Tasklist>
    </div>
  )
}

export default App
