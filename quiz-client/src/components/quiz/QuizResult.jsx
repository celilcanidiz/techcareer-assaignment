import React from "react"
import {useLocation, Link} from "react-router-dom"

 const QuizResult = () => {
		const location = useLocation()
		const { quizQuestions, totalScores } = location.state
		const numQuestions = quizQuestions.length
		const percentage = Math.round((totalScores / numQuestions) * 100)
		const handleRetakeQuiz = () => {
			navigate('quiz-stepper');
		}

		return (
			<section className="container mt-5">
				<h3>Quiz Sonucunuz :</h3>
				<hr />
				<h5 className="text-info">
					{totalScores} soruda {numQuestions} soru doğru cevapladınız.
				</h5>
				<p>Skorunuz: {percentage}%.</p>

				<Link to="/quiz-stepper" className="btn btn-primary btn-sm">Yeni Quiz Çöz</Link>
			</section>
		)
 }

 export default QuizResult