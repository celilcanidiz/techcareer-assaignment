import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getSubjects } from "../../../utils/QuizService"

 const QuizStepper = () => {
		const [currentStep, setCurrentStep] = useState(1)
		const [selectedSubject, setSelectedSubject] = useState("")
		const [selectedNumQuestions, setSelectedNumQuestions] = useState("")
		const [subjects, setSubjects] = useState([])
		const navigate = useNavigate()

		useEffect(() => {
			fetchSubjectData()
		}, [])

		const fetchSubjectData = async () => {
			try {
				const subjectsData = await getSubjects()
				setSubjects(subjectsData)
			} catch (error) {
				console.error(error)
			}
		}

		const handleNext = () => {
			if (currentStep === 3) {
				if (selectedSubject && selectedNumQuestions) {
					navigate("/take-quiz", { state: { selectedNumQuestions, selectedSubject } })
				} else {
					alert("Lütfen Konu ve Soru Sayısını Seçiniz")
				}
			} else {
				setCurrentStep((prevStep) => prevStep + 1)
			}
		}

		const handlePrevious = () => {
			setCurrentStep((prevStep) => prevStep - 1)
		}

		const handleSubjectChange = (event) => {
			setSelectedSubject(event.target.value)
		}

		const handleNumQuestionsChange = (event) => {
			setSelectedNumQuestions(event.target.value)
		}

		const renderStepContent = () => {
			switch (currentStep) {
				case 1:
					return (
						<div>
							<h3 className="text-info mb-2">Quiz konusunu seçiniz :</h3>
							<select
								className="form-select"
								value={selectedSubject}
								onChange={handleSubjectChange}>
								<option value="">Bir Konu Seçiniz</option>
								{subjects.map((subject) => (
									<option key={subject} value={subject}>
										{subject}
									</option>
								))}
							</select>
						</div>
					)
				case 2:
					return (
						<div>
							<h4 className="text-info mb-2">Kaç Soru Sorulmasını İstersiniz?</h4>
							<input
								type="number"
								className="form-control"
								value={selectedNumQuestions}
								onChange={handleNumQuestionsChange}
								placeholder="Soru sayısını giriniz"
							/>
						</div>
					)
				case 3:
					return (
						<div>
							<h2>Onaylama</h2>
							<p>Konu: {selectedSubject}</p>
							<p>Soru Sayısı: {selectedNumQuestions}</p>
						</div>
					)
				default:
					return null
			}
		}

		const renderProgressBar = () => {
			const progress = currentStep === 3 ? 100 : ((currentStep - 1) / 2) * 100
			return (
				<div className="progress">
					<div
						className="progress-bar"
						role="progressbar"
						style={{ width: `${progress}%` }}
						aria-valuenow={progress}>
						Step {currentStep}
					</div>
				</div>
			)
		}

		return (
			<section className="mt-5">
				<h3 style={{ color: "GrayText" }} className="mb-4">
					Online Quiz App'e Hoş Geldiniz !
				</h3>
				{renderProgressBar()}
				<div className="card">
					<div className="card-body">
						{renderStepContent()}
						<div className="d-flex justify-content-between mt-4">
							{currentStep > 1 && (
								<button className="btn btn-primary" onClick={handlePrevious}>
									Önceki
								</button>
							)}
							{currentStep < 3 && (
								<button
									className="btn btn-primary"
									onClick={handleNext}
									disabled={
										(currentStep === 1 && !selectedSubject) ||
										(currentStep === 2 && !selectedNumQuestions)
									}>
									Sonraki
								</button>
							)}
							{currentStep === 3 && (
								<button className="btn btn-success" onClick={handleNext}>
									Başlat
								</button>
							)}
						</div>
					</div>
				</div>
			</section>
		)
 }

 export default QuizStepper