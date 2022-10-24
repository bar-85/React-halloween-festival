import React from 'react'
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
			questionText: '5pyt',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]

	return (
		<div>
			<Header />
				<QuizStyled>
					<img src={backImg} alt='' className='backImg' />
					<AppStyled>
						
						{false ? (
							<Title>You scored 1 out of {questions.length}</Title>
						) : (
							<>
							
								
									<Title>
										<span>Quiz</span>
										<span>halloween</span>
										 </Title>
									<Question>	 
										<span>Pytanie 1</span>/{questions.length}
									</Question>
									<QuestionTitle>Pytania...</QuestionTitle>
								
								
								<Answer>
									<button>odp 1</button>
									<button>odp 2</button>
									<button>odp 3</button>
									<button>odp 4</button>
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
