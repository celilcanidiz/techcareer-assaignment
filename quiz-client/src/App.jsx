import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import AddQuestion from './components/question/AddQuestion'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Router>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-quiz" element={<AddQuestion />} />
      <Route path="/update-quiz/:id" element={<UpdateQuestion />} />
      </Routes>
      </Router>
    </main>
  )
}

export default App
