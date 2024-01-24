import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddQuestion from './components/question/AddQuestion'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddQuestion />
    </>
  )
}

export default App
