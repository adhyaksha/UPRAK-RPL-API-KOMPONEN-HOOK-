import { useState } from 'react'
import './App.css'
import Badan from './Components/Navbar'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Loading from './Pages/Loading'
import LoginPages from './Pages/LoginPages'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/LoginPages" element={<LoginPages />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
