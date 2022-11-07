import styled from 'styled-components'

export const QuizStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	.backImg {
		position: absolute;
		top: 14rem;
		right: 0%;
		height: 40rem;
		z-index: -1;
	}

	@media screen and (max-width: 480px) {
		.backImg {
			top: 10rem;
			height: 31.7rem;
		}
	}

	@media screen and (max-width: 320px) {
		.backImg {
			top: 13rem;
			height: 31.7rem;
		}
	}
`
export const AppStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	width: 450px;
	height: min-content;
	min-height: 200px;
	height: 30rem;
	border-radius: 15px;
	padding: 0px;
	box-shadow: 0px 19px 60px rgba(255, 136, 0, 0.26);
	background-color: rgba(76, 19, 106, 0.675);

	@media screen and (max-width: 900px) {
		margin-top: -8rem;
		width: 360px;
		background-color: rgba(76, 19, 106, 0.925);
	}

	@media screen and (max-width: 320px) {
		margin-top: -5rem;
		width: 310px;
	}
`
export const Title = styled.div`
	display: block;
	flex-direction: column;
	margin: 2rem;

	span:nth-child(1) {
		margin-right: 1rem;
		font-size: 2.5rem;
		font-weight: bold;
		color: #ffffff;
	}

	span:nth-child(2) {
		font-size: 2.5rem;
		font-weight: bold;
		color: orange;
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	button {
		align-items: center;
		width: 80%;
		font-size: 1rem;
		border-radius: 15px;
		padding: 5px;
		margin: 0.2rem;
		border: 1px solid #ffbb002c;
		color: #ffffff;
		background-color: #2c1803c4;
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
	font-size: 1rem;
	color: white;

	span {
		color: orange;
	}

	p {
		margin: 2rem;
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1rem;
	}

	button {
		align-items: center;
		border-radius: 15px;
		padding: 5px;
		width: 50%;
		font-size: 1rem;
		background-color: #2c1803c4;
		color: orange;
		border: 1px solid #ffbb00;
		cursor: pointer;

		:hover {
			background-color: #a8731743;
		}
	}
`
