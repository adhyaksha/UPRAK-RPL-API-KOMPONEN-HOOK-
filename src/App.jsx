import { useState } from 'react'
import './App.css'
import Badan from './Component/Navbar'
import Navbar from './Component/Navbar'
import Content from './Component/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Content/>
    </>
  )
}

export default App
