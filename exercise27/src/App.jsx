import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoContainer from './container/TaskContainer'
import TaskContainer from './container/TaskContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TaskContainer></TaskContainer>
    </div>
  )
}

export default App
