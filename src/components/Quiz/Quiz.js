import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { QuizStyled, AppStyled, Title, Question, QuestionTitle, Answer, ScoreTitle } from './Quiz.styles'
import backImg from '../../assets/back.png'


const Quiz = () => {
	const questions = [
		{
			questionText: 'Kiedy obchodzimy Halloween?',
			answerOptions: [
				{ answerText: '1 kwietnia', isCorrect: false },
				{ answerText: '2 listopada', isCorrect: false },
				{ answerText: '31 października', isCorrect: true },
				{ answerText: '6 grudnia', isCorrect: false },
			],
		},
		{
			questionText: 'Co jest symbolem Halloween?',
			answerOptions: [
				{ answerText: 'Bób', isCorrect: false },
				{ answerText: 'Dynia', isCorrect: true },
				{ answerText: 'Gruszka', isCorrect: false },
				{ answerText: 'Śliwka', isCorrect: false },
			],
		},
		{
			questionText: 'Halloween najpopularniejsze jest w...?',
			answerOptions: [
				{ answerText: 'w Polsce', isCorrect: false },
				{ answerText: 'we Francji', isCorrect: false },
				{ answerText: 'w USA', isCorrect: true },
				{ answerText: 'w Turcji', isCorrect: false },
			],
		},
		{
			questionText: 'Co zbierają dzieci w Halloween?',
			answerOptions: [
				{ answerText: 'pieniądze', isCorrect: false },
				{ answerText: 'kukurydzę', isCorrect: false },
				{ answerText: 'narkotyki', isCorrect: false },
				{ answerText: 'słodycze', isCorrect: true },
			],
		},
		{
			questionText: 'Cukierek albo...???',
			answerOptions: [
				{ answerText: 'gorączka', isCorrect: false },
				{ answerText: 'granat', isCorrect: false },
				{ answerText: 'psikus', isCorrect: true },
				{ answerText: 'pizza', isCorrect: false },
			],
		},
		{
			questionText: 'Polski odpowiednik Halloween?',
			answerOptions: [
				{ answerText: 'Wielkanoc', isCorrect: false },
				{ answerText: 'Andrzejki', isCorrect: false },
				{ answerText: 'Boże Narodzenie', isCorrect: false },
				{ answerText: 'Zaduszki', isCorrect: true },
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
			<section>
				<Footer />
			</section>
		</div>
	)
}

export default Quiz
