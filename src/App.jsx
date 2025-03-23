import { useState } from 'react'
import './App.css'
import { NavLink } from 'react-router'
import RickCharSearch from './components/organisms/RickCharSearch'




function App() {
  const [count, setCount] = useState(0)

  return (
    <RickCharSearch/> 
  )
}

export default App
