import styled from 'styled-components'

export const PageHeader = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 80px;
	margin-top: 2rem;
	margin-bottom: 3rem;
	height: 40vh;
	width: 100%;
	background-size: cover;
	background-position: top 5% right 0%;
	background-color: rgb(76, 19, 106);
	box-shadow: 4px 16px 74px 15px #d000ff2a;

	h2 {
		margin-bottom: 1rem;
		font-size: 2.5rem;
		color: orange;
	}

	p {
		font-size: 1.5rem;
		color: white;
	}

	.spider-img {
		position: absolute;
		z-index: -7;
	}

	@media screen and (max-width: 900px) {
		padding: 1px 8px;
		margin-bottom: 7rem;

		h2 {
			font-size: 1.5rem;
		}

		p {
			font-size: 1.1rem;
		}

		.spider-img {
			top: -8.8rem;
		}
	}

	@media screen and (max-width: 320px) {
		padding: 1px 8px;
		h2 {
			font-size: 1.3rem;
		}

		p {
			font-size: 1rem;
		}

		.spider-img {
			top: -3rem;
		}
	}
`
export const FormStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	div {
		right: 40%;
		top: 85%;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		width: 40%;
		height: min-content;
		min-height: 200px;
		height: 30rem;
		border-radius: 15px;
		padding: 0px;
		box-shadow: 0px 19px 60px rgba(255, 136, 0, 0.26);
		background-color: rgba(76, 19, 106, 0.675);

		h1 {
			margin-bottom: 1rem;
			font-size: 1.7rem;
			color: orange;	
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		label {
			margin-bottom: 0.5rem;
			font-size: 1rem;
			color: white;
		}

		input {
			font: inherit;
			padding: 0.5rem;
			border-radius: 6px;
			border: 2px solid orange;
			width: 20rem;
			max-width: 100%;
			background-color: #ffffffae;
		}

		textarea {
			font: inherit;
			padding: 0.5rem;
			border-radius: 6px;
			border: 1px solid orange;
			width: 20rem;
			max-width: 100%;
			background-color: #ffffffae;
		}

		.btn {
			font-weight: bold;
			background-color: orange;
			
			:hover {
				background-color: rgb(255, 200, 99);
				cursor: pointer;
			}
		}

		@media screen and (max-width: 900px) {
			width: 360px;
			background-color: rgba(76, 19, 106, 0.925);
		}

		@media screen and (max-width: 320px) {
			margin-top: 5rem;
			width: 310px;

			h1 {
				font-size: 1.5rem;
			}

			input {
				width: 100%;
			}

			textarea {
				width: 100%;
			}

			.btn {
				font-size: 0.9rem;
			}
		}
	}
`
