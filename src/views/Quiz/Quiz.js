import React, { useState } from 'react'
import { QuizStyled, AppStyled, Title, Question, QuestionTitle, Answer, ScoreTitle } from './Quiz.styles'
import backImg from '../../assets/back.webp'
import { questions } from '../../data/quizData'


const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [showScore, setShowScore] = useState(false)
	const [score, setScore] = useState(0)
	const [recordedScore, setRecordedScore] = useState(0)

	const resetStateClick = () => {
		setCurrentQuestion(0)
		setShowScore(false)
		setScore(0)
		setRecordedScore(score)
	}

	const handleAnswerButtonClick = isCorrect => {
		if (isCorrect === true) {
			setScore(score + 1)
		}

		const nextQuestion = currentQuestion + 1
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion)
		} else {
			setShowScore(true)
		}
	}

	return (
		<div>
			<QuizStyled>
				<img src={backImg} alt='drzewa i dynie tło' className='backImg' />
				<AppStyled>
					{showScore ? (
						<ScoreTitle>
							Zdobyłeś <span>{score}</span> na <span>{questions.length}</span> możliwych punktów! 
							<div>
								({(score / questions.length).toFixed(2) * 100}%)
							</div>
							<div>
								<p>Twój ostatni wynik: {recordedScore}</p>
							</div>
							<div>
								<button onClick={resetStateClick}>Powtórz quiz</button>
							</div>
						</ScoreTitle>
					) : (
						<>
							<Title>
								<span>Quiz</span>
								<span>halloween</span>
							</Title>
							<Question>
								<span>Pytanie {currentQuestion + 1}</span>/{questions.length}
							</Question>
							<QuestionTitle>{questions[currentQuestion].questionText}</QuestionTitle>

							<Answer>
								{questions[currentQuestion].answerOptions.map(answerOption => (
									<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
								))}
							</Answer>
						</>
					)}
				</AppStyled>
			</QuizStyled>
		</div>
	)
}

export default Quiz
