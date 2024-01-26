import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Quiz from './components/quiz/Quiz'
import Home from './components/Home'
import QuizStepper from './components/quiz/QuizStepper'
import AddQuestion from './components/question/AddQuestion'
import UpdateQuestion from './components/question/UpdateQuestion'
import GetAllQuiz from './components/quiz/GetAllQuiz'
import QuizResult from './components/quiz/QuizResult'
import Navbar from './components/layout/NavBar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
					<Route path="/quiz-stepper" element={<QuizStepper />} />
					<Route path="/take-quiz" element={<Quiz />} />
					<Route path="/admin" element={<Admin />} />

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
