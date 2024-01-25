import React from "react"
import { useLocation} from "react-router-dom"

 const QuizResult = () => {
		const location = useLocation()
		const { quizQuestions, totalScores } = location.state
		const numQuestions = quizQuestions.length
		const percentage = Math.round((totalScores / numQuestions) * 100)

		const handleRetakeQuiz = () => {
			alert("Oops! this functionality was not implemented!!!")
		}

		return (
			<section className="container mt-5">
				<h3>Quiz Sonucunuz :</h3>
				<hr />
				<h5 className="text-info">
					{totalScores} sorunun {numQuestions} soru doğru cevapladınız.
				</h5>
				<p>Skorunuz: {percentage}%.</p>

				<button className="btn btn-primary btn-sm" onClick={handleRetakeQuiz}>
					Quizi Tekrar Et
				</button>
			</section>
		)
 }

 export default QuizResult