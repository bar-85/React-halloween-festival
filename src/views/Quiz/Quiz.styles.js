import styled from 'styled-components'

export const QuizStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	.backImg {
		position: absolute;
		top: 11rem;
		right: 0%;
		height: 40rem;
		z-index: -1;
	}

	@media screen and (max-width: 320px) {
		.backImg {
			top: 11rem;
			right: 0%;
			height: 31.7rem;
			z-index: -1;
		}
	}
`
export const AppStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(76, 19, 106, 0.675);
	width: 450px;
	height: min-content;
	min-height: 200px;
	height: 30rem;
	border-radius: 15px;
	padding: 0px;
	display: flex;
	box-shadow: 0px 19px 60px rgba(255, 136, 0, 0.26);
	justify-content: space-evenly;

	@media screen and (max-width: 900px) {
		width: 360px;
		margin-top: -8rem;
		background-color: rgba(76, 19, 106, 0.925);
	}

	@media screen and (max-width: 320px) {
		width: 310px;
		margin-top: -5rem;

		.backImg {
			top: 11rem;
			right: 0%;
			height: 31rem;
			z-index: -1;
		}
	}
`
export const Title = styled.div`
	display: block;
	flex-direction: column;
	margin: 2rem;

	span:nth-child(1) {
		color: #ffffff;
		font-size: 2.5rem;
		font-weight: bold;
		margin-right: 1rem;
	}

	span:nth-child(2) {
		color: orange;
		font-size: 2.5rem;
		font-weight: bold;
		text-transform: uppercase;
	}

	@media screen and (max-width: 900px) {
		span:nth-child(1) {
			font-size: 2rem;
		}
		span:nth-child(2) {
			font-size: 2rem;
		}
	}

	@media screen and (max-width: 320px) {
		span:nth-child(1) {
			font-size: 1.5rem;
		}
		span:nth-child(2) {
			font-size: 1.5rem;
		}
	}
`

export const Question = styled.div`
	font-size: 1.5rem;
	color: #ff00ee;

	@media screen and (max-width: 900px) {
		font-size: 1.5rem;
	}

	@media screen and (max-width: 320px) {
		font-size: 1.2rem;
	}
`

export const QuestionTitle = styled.div`
	font-size: 1.5rem;
	color: white;

	@media screen and (max-width: 900px) {
		font-size: 1.2rem;
	}

	@media screen and (max-width: 320px) {
		font-size: 1rem;
	}
`

export const Answer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	button {
		width: 80%;
		font-size: 1rem;
		color: #ffffff;
		background-color: #2c1803c4;
		border-radius: 15px;
		padding: 5px;
		margin: 0.2rem;
		align-items: center;
		border: 1px solid #ffbb002c;
		cursor: pointer;

		:hover {
			background-color: #a87317;
		}
		@media screen and (max-width: 450px) {
			:hover {
				background-color: #2c1803c4;
			}
		}
	}
`

export const ScoreTitle = styled.div`
	color: white;
	font-size: 1rem;

	span {
		color: orange;
	}

	p {
		margin: 2rem;
	}

	div {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		width: 50%;
		font-size: 1rem;
		color: orange;
		background-color: #2c1803c4;
		border-radius: 15px;
		padding: 5px;
		align-items: center;
		border: 1px solid #ffbb00;
		cursor: pointer;

		:hover {
			background-color: #a8731743;
		}
	}
`
