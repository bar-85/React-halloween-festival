import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { QuizStyled, AppStyled, Title, Question, QuestionTitle, Answer } from './Quiz.styles'
import backImg from '../../assets/back.png'



const Quiz = () => {
	const questions = [
		{
			questionText: 'Ile lat ma Pchełka',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '5', isCorrect: false },
			],
		},
		{
			questionText: '2 pyt',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: '3pyt',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: '4pyt',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: '5pyt',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: '6pyt',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]

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
			<Header />
			<QuizStyled>
				<img src={backImg} alt='' className='backImg' />
				<AppStyled>
					{showScore ? (
						<Title>
							{' '}
							Zdobyłeś {score} na {questions.length} możliwych punktów
							<div>
								<p>Twój ostatni wynik: {recordedScore}</p>
							</div>
							<button  onClick={resetStateClick}>Retry</button>
						</Title>
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
									<button
										className={`button ${answerOption.isCorrect ? 'correct' : 'incorrect'}`}
										key = {answerOption.id} 
										onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
										{answerOption.answerText}
									</button>
								))}
							</Answer>
						</>
					)}
				</AppStyled>
			</QuizStyled>
			<section>
				<Footer />
			</section>
		</div>
	)
}

export default Quiz
