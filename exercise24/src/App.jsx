import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoContainer from './components/containers/TodoContainer'
import TodoFormContainer from './components/containers/TodoFormContainer'
import FilterOptions from './components/pure/FilterOptions'

function App() {
  return (
    <div className="App">
      <header className='app-header'>
        <TodoContainer/>
        <TodoFormContainer/>
        <div>    </div>
        <FilterOptions></FilterOptions>
      </header>
    </div>
  )
}

export default App
