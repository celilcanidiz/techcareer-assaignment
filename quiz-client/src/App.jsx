import { useState } from 'react'
import Quiz from './components/quiz/Quiz'
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
      <Route path="/take-quiz" element={<Quiz />} />
      <Route path="/create-quiz" element={<AddQuestion />} />
      <Route path="/update-quiz/:id" element={<UpdateQuestion />} />
      <Route path="/all-quizzes" element={<GetAllQuiz />} />
			<Route path="/quiz-result" element={<QuizResult />} />
      </Routes>
      </Router>
    </main>
  )
}

export default App
